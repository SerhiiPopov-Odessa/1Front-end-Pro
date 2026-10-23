// Язык интерфейса виджета. Тот же код уходит на бэкенд в поле locale,
// чтобы сообщения об ошибках приходили на языке посетителя.

export const STRINGS = {
  en: {
    title: 'Ask about this resume', hint: 'Ask about the resume or anything else.',
    placeholder: 'Your question…', send: 'Send', stop: 'Stop', retry: 'Try again',
    open: 'Open chat', close: 'Close chat', searching: 'Searching the resume…',
    sources: 'Sources', stopped: 'Stopped', clear: 'New chat',
    network: 'Could not reach the server. Check your connection and try again.',
    suggestions: ['What is his tech stack?', 'Where did he study?', 'What projects has he built?'],
  },
  ru: {
    title: 'Спросите о резюме', hint: 'Спросите о резюме или о чём угодно.',
    placeholder: 'Ваш вопрос…', send: 'Отправить', stop: 'Остановить', retry: 'Повторить',
    open: 'Открыть чат', close: 'Закрыть чат', searching: 'Ищу в резюме…',
    sources: 'Источники', stopped: 'Остановлено', clear: 'Новый чат',
    network: 'Не удалось связаться с сервером. Проверьте соединение и повторите.',
    suggestions: ['Какой у Сергея стек?', 'Какое у него образование?', 'Какие проекты он делал?'],
  },
  uk: {
    title: 'Запитайте про резюме', hint: 'Запитайте про резюме або про що завгодно.',
    placeholder: 'Ваше запитання…', send: 'Надіслати', stop: 'Зупинити', retry: 'Повторити',
    open: 'Відкрити чат', close: 'Закрити чат', searching: 'Шукаю в резюме…',
    sources: 'Джерела', stopped: 'Зупинено', clear: 'Новий чат',
    network: 'Не вдалося зʼєднатися із сервером. Перевірте зʼєднання й повторіть.',
    suggestions: ['Який у Сергія стек?', 'Яка в нього освіта?', 'Які проєкти він робив?'],
  },
  fr: {
    title: 'Interrogez le CV', hint: 'Posez une question sur le CV ou sur autre chose.',
    placeholder: 'Votre question…', send: 'Envoyer', stop: 'Arrêter', retry: 'Réessayer',
    open: 'Ouvrir le chat', close: 'Fermer le chat', searching: 'Recherche dans le CV…',
    sources: 'Sources', stopped: 'Arrêté', clear: 'Nouvelle discussion',
    network: 'Impossible de joindre le serveur. Vérifiez votre connexion et réessayez.',
    suggestions: ['Quelle est sa stack technique ?', 'Où a-t-il étudié ?', 'Quels projets a-t-il réalisés ?'],
  },
};

export function detectLocale(languages = (typeof navigator !== 'undefined' ? navigator.languages : [])) {
  for (const tag of languages || []) {
    const code = String(tag).slice(0, 2).toLowerCase();
    if (code in STRINGS) return code;
  }
  return 'en';
}
