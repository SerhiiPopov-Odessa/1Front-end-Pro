"use client";

function Error() {
  return (
    <div className='loader-wrapper'>
      <p>Some error</p>
    </div>
  );
}

export default Error;

/* 👉 Файл error.jsx — особенный.
Он работает как обработчик ошибок и использует:

обработку событий (кнопки)
перерендер (reset())

А это всё работает только на клиенте (в браузере). */