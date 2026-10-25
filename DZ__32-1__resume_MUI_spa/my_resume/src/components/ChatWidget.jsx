import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { X, Send, Square, RotateCcw, Plus } from 'lucide-react';
import { CHAT_API_URL, ChatError, streamChat } from '../chat/api';
import { STRINGS, detectLocale } from '../chat/i18n';
import { InlineContext } from '../chat/InlineContext';

// Сообщение: { role, content, sources?, searching?, stopped?, failed? }
const patchLast = (setMessages, patch) =>
  setMessages((prev) => {
    if (!prev.length) return prev;
    const next = prev.slice();
    next[next.length - 1] = { ...next[next.length - 1], ...patch(next[next.length - 1]) };
    return next;
  });

const ChatWidget = ({ inline = false }) => {
  const setInlineMounted = useContext(InlineContext);
  useEffect(() => {
    if (!inline) return undefined;
    setInlineMounted(true);
    return () => setInlineMounted(false);
  }, [inline, setInlineMounted]);
  const locale = useMemo(() => detectLocale(), []);
  const t = STRINGS[locale];

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null); // { message, code }
  const abortRef = useRef(null);
  const endRef = useRef(null);

  useEffect(() => { endRef.current?.scrollIntoView({ block: 'end' }); }, [messages, error, open]);
  useEffect(() => () => abortRef.current?.abort(), []);

  // Адрес бэкенда не задан при сборке: виджет не показываем, чтобы не вести в никуда.
  if (!CHAT_API_URL) return null;

  // history заканчивается репликой пользователя; ответ дописывается в новое сообщение.
  const run = async (history) => {
    setMessages([...history, { role: 'assistant', content: '' }]);
    setError(null);
    setBusy(true);
    const controller = new AbortController();
    abortRef.current = controller;
    try {
      await streamChat({
        messages: history,
        locale,
        signal: controller.signal,
        networkMessage: t.network,
        handlers: {
          onStatus: (state) => patchLast(setMessages, () => ({ searching: state === 'searching' })),
          onDelta: (text) => patchLast(setMessages, (m) => ({ content: m.content + text, searching: false })),
          // Модель оборвалась на полуслове, ответ идёт заново от запасной: стираем показанный обрывок.
          onReset: () => patchLast(setMessages, () => ({ content: '', sources: undefined })),
          onSources: (items) => patchLast(setMessages, () => ({ sources: items })),
        },
      });
      patchLast(setMessages, () => ({ searching: false }));
    } catch (e) {
      if (e.name === 'AbortError') {
        patchLast(setMessages, (m) => ({ searching: false, stopped: Boolean(m.content) }));
      } else {
        patchLast(setMessages, () => ({ searching: false, failed: true }));
        setError({ message: e instanceof ChatError ? e.message : t.network, code: e.code });
      }
    } finally {
      setBusy(false);
      // Пустой ответ (остановили до первого слова или упало сразу) не оставляем пузырём «…».
      setMessages((prev) => (prev.length && prev[prev.length - 1].role === 'assistant' && !prev[prev.length - 1].content
        ? prev.slice(0, -1) : prev));
    }
  };

  const send = (text) => {
    const content = text.trim();
    if (!content || busy) return;
    setInput('');
    run([...messages.filter((m) => !m.failed), { role: 'user', content }]);
  };

  const retry = () => {
    if (busy) return;
    const history = messages.filter((m) => !m.failed);
    if (history.length && history[history.length - 1].role === 'user') run(history);
  };

  const reset = () => {
    abortRef.current?.abort();
    setMessages([]);
    setError(null);
  };

  return (
    <>
      {open && (
        <div role="dialog" aria-label={t.title}
          onKeyDown={(e) => { if (e.key === 'Escape') setOpen(false); }}
          className="fixed bottom-20 right-4 z-50 flex h-[28rem] max-h-[70dvh] md:bottom-32 md:max-h-[65dvh] w-[22rem] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-lg border-2 border-[rgb(22,56,83)] bg-white shadow-xl">
          <div className="flex items-center justify-between bg-[rgb(22,83,23)] px-3 py-2 text-white">
            <span className="text-sm font-semibold">{t.title}</span>
            <span className="flex items-center gap-3">
              {messages.length > 0 && (
                <button type="button" aria-label={t.clear} title={t.clear} onClick={reset}><Plus size={18} /></button>
              )}
              <button type="button" aria-label={t.close} onClick={() => setOpen(false)}><X size={18} /></button>
            </span>
          </div>
          <div role="log" className="flex-1 space-y-2 overflow-y-auto p-3 text-sm text-gray-900">
            {messages.length === 0 && (
              <div className="space-y-2">
                <p className="text-gray-600">{t.hint}</p>
                {t.suggestions.map((s) => (
                  <button key={s} type="button" onClick={() => send(s)}
                    className="block w-full rounded-md border border-lime-600/50 bg-lime-600/10 px-2 py-1 text-left hover:bg-lime-600/20">
                    {s}
                  </button>
                ))}
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={m.role === 'user' ? 'text-right' : 'text-left'}>
                <span className={'inline-block max-w-[90%] whitespace-pre-wrap rounded-lg px-3 py-1.5 text-left ' +
                  (m.role === 'user' ? 'bg-[rgb(22,56,83)] text-white' : 'bg-gray-200')}>
                  {m.content || (m.searching ? <em className="text-gray-600">{t.searching}</em> : '…')}
                </span>
                {m.stopped && <p className="mt-0.5 text-xs text-gray-500">{t.stopped}</p>}
                {m.sources?.length > 0 && !busy && (
                  <p className="mt-1 text-xs text-gray-600">
                    {t.sources}: {m.sources.map((s) => s.title).join(' · ')}
                  </p>
                )}
              </div>
            ))}
            {error && (
              <div role="alert" className="space-y-1 text-red-700">
                <p>{error.message}</p>
                <button type="button" onClick={retry}
                  className="inline-flex items-center gap-1 rounded-md border border-red-700/50 px-2 py-0.5 hover:bg-red-50">
                  <RotateCcw size={14} /> {t.retry}
                </button>
              </div>
            )}
            <div ref={endRef} />
          </div>
          <form className="flex gap-2 border-t p-2" onSubmit={(e) => { e.preventDefault(); send(input); }}>
            <input value={input} onChange={(e) => setInput(e.target.value)} maxLength={1000}
              placeholder={t.placeholder} aria-label={t.placeholder}
              className="min-w-0 flex-1 rounded-md border px-2 py-1 text-sm text-gray-900" />
            {busy ? (
              <button type="button" aria-label={t.stop} onClick={() => abortRef.current?.abort()}
                className="rounded-md bg-red-700 px-2 text-white"><Square size={16} /></button>
            ) : (
              <button type="submit" aria-label={t.send} disabled={!input.trim()}
                className="rounded-md bg-[rgb(22,56,83)] px-2 text-white disabled:opacity-40"><Send size={16} /></button>
            )}
          </form>
        </div>
      )}
      <button type="button" aria-label={open ? t.close : t.open} onClick={() => setOpen((o) => !o)}
        className={(inline ? 'relative mx-auto ' : 'fixed bottom-4 right-4 ') + 'z-50 block h-16 w-16 md:h-24 md:w-24 appearance-none border-0 bg-transparent p-0 shadow-none outline-none focus:outline-none focus-visible:outline-none' + (open ? '' : ' chat-bounce')}>
        <svg viewBox="0 0 100 100" className="h-full w-full overflow-visible drop-shadow-lg" aria-hidden="true">
          <defs>
            <linearGradient id="chat-grad" x1="0" y1="0" x2="1" y2="0.2">
              <stop offset="0" stopColor="#2f3dfb" />
              <stop offset="0.55" stopColor="#9626f4" />
              <stop offset="1" stopColor="#d9406a" />
            </linearGradient>
          </defs>
          <path d="M50 6C25 6 6 23 6 45s19 39 44 39c4 0 8-.4 11.6-1.2L84 94 78 72c9-7 16-17 16-27C94 23 75 6 50 6Z" fill="url(#chat-grad)" />
          <text x="50" y="46" textAnchor="middle" dominantBaseline="central" fill="#fff" fontSize="34" fontWeight="700" fontFamily="system-ui, sans-serif">AI</text>
        </svg>
      </button>
    </>
  );
};

export default ChatWidget;
