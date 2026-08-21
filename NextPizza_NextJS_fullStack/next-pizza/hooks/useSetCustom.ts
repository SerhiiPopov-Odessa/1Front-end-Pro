import { useState, useCallback } from 'react';

export function useSetCustom<T>(initialValue: Iterable<T> = []) { // Iterable<T> итерируемый. означает: «что-то, по чему можно пройтись с помощью for...of и 
                                                                 // получить значения типа T» Если ничего не передали то = [] массив поумолчанию.
  const [set, setSet] = useState<Set<T>>(
    () => new Set<T>(initialValue)
  );

  const add = useCallback((value: T) => {
    setSet((prev) => {
      const next = new Set(prev);
      next.add(value);
      return next;
    });
  }, []);

  const remove = useCallback((value: T) => {
    setSet((prev) => {
      const next = new Set(prev);
      next.delete(value);
      return next;
    });
  }, []);

  const toggle = useCallback((value: T) => {
    setSet((prev) => {
      const next = new Set(prev);

      if (next.has(value)) {
        next.delete(value);
      } else {
        next.add(value);
      }

      return next;
    });
  }, []);

  const clear = useCallback(() => {
    setSet(new Set<T>());
  }, []);

  const reset = useCallback(() => {
    setSet(new Set<T>(initialValue));
  }, [initialValue]);

  return {
    set,
    add,
    remove,
    toggle,
    clear,
    reset,
  };
}

/* Главная идея  useSetCustom — это специальный React-хук для управления Set.
То есть он превращает обычный:

const [set, setSet] = useState(new Set());

в удобный инструмент:

const {
  set,
  add,
  remove,
  toggle,
  clear,
  reset,
} = useSetCustom<string>();

И ты получаешь готовые операции над Set.

Представь фильтр ингредиентов

Допустим, у тебя есть:

☐ Cheese
☐ Tomato
☐ Onion
☐ Bacon

Пользователь выбирает:

☑ Cheese
☑ Tomato
☐ Onion
☐ Bacon

Тебе нужно где-то хранить:

Set {
  'cheese',
  'tomato'
}

Вот именно этим и занимается твой хук.

1. Хук создаёт состояние
const [set, setSet] = useState<Set<T>>(
  () => new Set(initialValue)
);

Например:

const { set } = useSetCustom<string>();

Создаётся:

set
 ↓
Set {}

Если:

const { set } = useSetCustom<string>([
  'cheese',
  'tomato'
]);

получится:

set
 ↓
Set {
  'cheese',
  'tomato'
}

set — это текущее выбранное состояние.

2. add добавляет элемент
add('cheese');

Было:

Set {
  'tomato'
}

Стало:

Set {
  'tomato',
  'cheese'
}

После изменения React перерисует компонент.

3. remove удаляет элемент
remove('cheese');

Было:

Set {
  'tomato',
  'cheese'
}

Стало:

Set {
  'tomato'
}
4. toggle переключает элемент

Это самая интересная функция.

toggle('cheese');

Она проверяет:

if (next.has(value))

То есть:

Есть ли cheese в Set?

Если есть
Set {
  'cheese',
  'tomato'
}

то:

toggle('cheese');

удалит его:

Set {
  'tomato'
}
Если нет
Set {
  'tomato'
}

то:

toggle('cheese');

добавит его:

Set {
  'tomato',
  'cheese'
}

Поэтому toggle идеально подходит для checkbox.

5. clear удаляет всё
clear();

Было:

Set {
  'cheese',
  'tomato',
  'onion'
}

Станет:

Set {}
6. reset возвращает начальное состояние

Допустим:

const { set, reset } = useSetCustom([
  'cheese',
  'tomato'
]);

Начальное состояние:

Set {
  'cheese',
  'tomato'
}

Потом пользователь добавил:

toggle('onion');

Теперь:

Set {
  'cheese',
  'tomato',
  'onion'
}

А:

reset();

вернёт:

Set {
  'cheese',
  'tomato'
}

То есть reset возвращает не пустой Set, а именно первоначальное состояние.

7. Почему функции используют setSet(prev => ...)

Например:

setSet((prev) => {
  const next = new Set(prev);
  next.add(value);
  return next;
});

Здесь:

prev

— это предыдущий Set.

Например:

prev
 ↓
Set {
  'cheese',
  'tomato'
}

Создаём копию:

const next = new Set(prev);

Получаем:

next
 ↓
Set {
  'cheese',
  'tomato'
}

Добавляем:

next.add('onion');

Теперь:

next
 ↓
Set {
  'cheese',
  'tomato',
  'onion'
}

И возвращаем:

return next;

React получает новый Set и обновляет состояние.

8. Почему не менять prev напрямую

Нельзя делать так:

setSet((prev) => {
  prev.add(value);
  return prev;
});

Потому что ты изменяешь старый объект.

Правильный подход:

const next = new Set(prev);
next.add(value);


return next;

То есть:

СТАРЫЙ SET
     │
     │ копируем
     ↓
  НОВЫЙ SET
     │
     │ изменяем
     ↓
  React state

Это называется иммутабельное обновление состояния.

9. А зачем useCallback?

Например:

const add = useCallback((value: T) => {
  ...
}, []);

useCallback запоминает функцию между рендерами.

Без него при каждом рендере:

render 1 → создаётся add №1
render 2 → создаётся add №2
render 3 → создаётся add №3

С useCallback:

render 1 → создаётся add
render 2 → та же add
render 3 → та же add

Это особенно полезно, если ты передаёшь:

toggle

в дочерние компоненты.

10. В итоге хук — это маленький API для Set

Вот это:

const {
  set,
  add,
  remove,
  toggle,
  clear,
  reset,
} = useSetCustom<string>();

можно воспринимать как маленький объект управления:

                 useSetCustom
                      │
          ┌───────────┴───────────┐
          ↓                       ↓
       СОСТОЯНИЕ               ОПЕРАЦИИ
          │                       │
        set                    add()
                              remove()
                              toggle()
                              clear()
                              reset()
Для твоего Filters это особенно удобно:
const { set, toggle, clear } = useSetCustom<string>();

Checkbox:

<FilterCheckbox
  value="cheese"
  checked={set.has('cheese')}
  onCheckedChange={() => toggle('cheese')}
/>

То есть происходит:

Пользователь нажал checkbox
          ↓
       toggle()
          ↓
     Set изменился
          ↓
      React render
          ↓
set.has('cheese')
          ↓
checked = true/false

Именно в этом основная ценность твоего хука: он прячет всю работу с Set и React state внутри себя, а компонент Filters получает простой и понятный API. */