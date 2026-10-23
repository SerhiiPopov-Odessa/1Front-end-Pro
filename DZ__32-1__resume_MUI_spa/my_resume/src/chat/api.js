import { createSseParser } from './sse.js';

// Адрес бэкенда задаётся при сборке. Без него чат не показывается вовсе.
export const CHAT_API_URL = (import.meta.env.VITE_CHAT_API_URL || '').replace(/\/+$/, '');

export const MAX_MESSAGES = 12;      // совпадает с лимитами бэкенда (contracts.ts)
export const MAX_MESSAGE_CHARS = 1000;

export class ChatError extends Error {
  constructor(message, code) {
    super(message);
    this.code = code;
  }
}

// История для отправки: только завершённые реплики, не больше лимитов бэкенда.
// Длинные ответы ассистента обрезаются, иначе бэкенд отклонит запрос целиком.
export function toRequestMessages(messages) {
  const clean = messages
    .filter((m) => m.content && !m.failed)
    .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_MESSAGE_CHARS) }));
  return clean.slice(-MAX_MESSAGES);
}

// handlers: { onStatus, onDelta, onReset, onSources }. Завершается нормально на событии done,
// бросает ChatError на событии error, ошибке HTTP или обрыве соединения.
export async function streamChat({ messages, locale, signal, handlers, networkMessage }) {
  let res;
  try {
    res = await fetch(`${CHAT_API_URL}/api/chat`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ messages: toRequestMessages(messages), locale }),
      signal,
    });
  } catch (e) {
    if (e.name === 'AbortError') throw e;
    throw new ChatError(networkMessage, 'network');
  }

  if (!res.ok || !res.body) {
    let body = {};
    try { body = await res.json(); } catch { /* тело не JSON */ }
    throw new ChatError(body.message || networkMessage, body.code || 'http_' + res.status);
  }

  let finished = false;
  let failure = null;
  const parser = createSseParser((event) => {
    if (event.type === 'status') handlers.onStatus?.(event.state);
    else if (event.type === 'delta') handlers.onDelta?.(event.text);
    else if (event.type === 'reset') handlers.onReset?.();
    else if (event.type === 'sources') handlers.onSources?.(event.items);
    else if (event.type === 'done') finished = true;
    else if (event.type === 'error') failure = new ChatError(event.message, event.code);
  });

  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  try {
    for (;;) {
      const { value, done } = await reader.read();
      if (done) break;
      parser.feed(decoder.decode(value, { stream: true }));
    }
  } catch (e) {
    if (e.name === 'AbortError') throw e;
    throw new ChatError(networkMessage, 'network');
  }
  parser.feed(decoder.decode());
  parser.end();

  if (failure) throw failure;
  // Поток закрылся без done и без error: соединение оборвалось на середине.
  if (!finished) throw new ChatError(networkMessage, 'network');
}
