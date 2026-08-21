'use client';
import { cn } from '@/lib/utils';
import { Api } from '@/services/api-client';
import { Search } from 'lucide-react';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { useOnClickOutside, useDebounceValue } from 'usehooks-ts';
import { useQuery, useQueryClient } from '@tanstack/react-query';

type SearchInputProps = {
  className?: string;
};

export function SearchInput({ className }: SearchInputProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [focused, setFocused] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [debouncedQuery] = useDebounceValue(searchQuery, 250); // searchQuery уходит через debouncedQuery после 250 млсек, если пользователь закончил вводить
  const queryClient = useQueryClient();

  useOnClickOutside(ref as React.RefObject<HTMLElement>, () => setFocused(false));

  const { data: products = [], isLoading, isError,} = useQuery({
    // при деструктуризации дынным data даем имя products и делаем массивом
    queryKey: ['products-search', debouncedQuery],
    queryFn: () => Api.products.search(debouncedQuery), // важно что функция () => , иначе запрос при рендере
    enabled: focused, // условие запуска запроса. Грузим при фокусе, независимо от текста
    staleTime: 5 * 60 * 1000, // считать данные свежими 5 минут.
  });

  const showDropdown = focused && (isLoading || isError || products.length > 0);
  /* focused	isLoading	isError	products.length	showDropdown	Что видно
     false	—	—	—	false	ничего
     true	true	false	0	true	«Загрузка...»
     true	false	true	0	true	«Ошибка загрузки. Попробуйте ещё раз»
     true	false	false	0	false	ничего (пустой результат поиска)
     true	false	false	>0	true	список товаров
 */
  const onClickItem = () => {
    setFocused(false);
    setSearchQuery('');
    queryClient.removeQueries({ queryKey: ['products-search'] }); // чистим весь кеш поиска
  };

  return (
    <>
      {focused && <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30" />}
      <div ref={ref} className={cn('flex rounded-2xl flex-1 justify-between relative h-11 z-30', className)}>
        <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
        <input
          className="rounded-2xl outline-none w-full bg-gray-100 pl-11"
          type="text"
          placeholder="Найти пиццу..."
          onFocus={() => setFocused(true)}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {showDropdown && (
          <div className={cn('absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 z-30')}>
            {isLoading ? (
              <div className="px-3 py-2 text-sm text-gray-400">Загрузка...</div>
            ) : isError ? (
              <div className="px-3 py-2 text-sm text-red-500">Ошибка загрузки. Попробуйте ещё раз</div>
            ) : (
              products.map((product) => (
                <Link
                  onClick={onClickItem}
                  key={product.id}
                  className="flex items-center gap-3 w-full px-3 py-2 hover:bg-primary/10"
                  href={`/api/product/${product.id}`}>
                  <img className="rounded-sm h-8 w-8" src={product.imageUrl} alt={product.name} />
                  <span>{product.name}</span>
                </Link>
              ))
            )}
          </div>
        )}
      </div>
    </>
  );
}

/* 
searchQuery
      |
      v
useDebounceValue
      |
      v
debouncedQuery
      |
      v
useQuery
      |
      |
      +-- queryKey -> кэш
      |
      +-- enabled -> можно ли запускать
      |
      +-- queryFn -> запрос к API
      |
      v
data
      |
      v
products
      |
      v
products.map(...) */

/* 
Итог: что происходит по шагам при использовании
1. Компонент монтируется. focused = false → enabled: false → запрос не идёт, products = [], isLoading = false.
2. Юзер кликает на инпут → setFocused(true) → enabled становится true → react-query проверяет кеш по ключу ['products-search', ''].
3. Если кеша нет (первый раз) — isLoading = true, запрос уходит на сервер, дропдаун показывает «Загрузка...».
4. Ответ пришёл → products заполняется, isLoading = false, результат кешируется под этим queryKey на 5 минут.
5. Юзер печатает "п" → через 250мс (debounce) debouncedQuery меняется на 'п' → queryKey меняется на ['products-search', 'п'] → 
   это новый ключ, кеша под него нет → новый запрос, снова isLoading = true на момент загрузки.
6. Юзер стирает текст, кликает мимо, потом снова фокусит инпут (в пределах 5 минут) → queryKey опять ['products-search', ''] → 
  данные уже есть и fresh → мгновенно показываются без запроса на сервер. */
