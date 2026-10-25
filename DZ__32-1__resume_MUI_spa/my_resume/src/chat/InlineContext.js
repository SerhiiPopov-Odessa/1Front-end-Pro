import { createContext } from 'react';

// Layout даёт функцию, которой встроенный виджет (на странице) сообщает,
// что он на экране, — тогда глобальный плавающий виджет скрывается.
export const InlineContext = createContext(() => {});
