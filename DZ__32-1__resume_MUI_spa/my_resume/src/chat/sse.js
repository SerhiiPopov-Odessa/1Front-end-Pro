// Разбор SSE-потока нашего бэкенда. Кадр: "event: <тип>\ndata: <json>\n\n".
// Парсер не знает про сеть и React, поэтому проверяется обычным `node --test`.

export function createSseParser(onEvent) {
  let buffer = '';

  const dispatch = (frame) => {
    const dataLines = [];
    for (const line of frame.split('\n')) {
      if (line.startsWith('data:')) dataLines.push(line.slice(5).replace(/^ /, ''));
    }
    if (!dataLines.length) return; // комментарий (": ping") или пустой кадр
    try {
      const event = JSON.parse(dataLines.join('\n'));
      if (event && typeof event.type === 'string') onEvent(event);
    } catch {
      /* битый кадр пропускаем: следующий кадр независим */
    }
  };

  return {
    feed(chunk) {
      buffer += chunk.replace(/\r\n/g, '\n');
      let end;
      while ((end = buffer.indexOf('\n\n')) !== -1) {
        dispatch(buffer.slice(0, end));
        buffer = buffer.slice(end + 2);
      }
    },
    // Поток закрылся: незавершённый хвост без пустой строки тоже кадр.
    end() {
      if (buffer.trim()) dispatch(buffer);
      buffer = '';
    },
  };
}
