'use client';

import { cn } from '@/lib/utils';
import { FilterCheckbox, FilterCheckboxProps } from './filter-checkbox';
import { Input } from '../ui/input';
import React from 'react';
import { Skeleton } from '../ui/skeleton';

type Item = FilterCheckboxProps;

type CheckboxFiltersGroupProps = {
  title: string;
  items: Item[];
  defaultItems?: Item[];
  limit?: number;
  loading?: boolean;
  searchInputPlaceholder?: string;
  onClickCheckbox?: (id: string) => void;
  defaultValue?: string[];
  selected?: Set<string>;
  className?: string;
  name?: string;
};

export function CheckboxFiltersGroup({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = 'Поиск...',
  className,
  loading,
  onClickCheckbox,
  selected,
  name,
  defaultValue,
}: CheckboxFiltersGroupProps) {
  const [showAll, setShowAll] = React.useState(false); // После нажатия showAll: + Показать все компонент переходит в режим полного списка + поиска.
  const [searchValue, setSearchValue] = React.useState(''); // Поиск компонента

  if (loading) { // Если loading то показываем Skeleton
    return (
      <div className={cn('', className)}>
        <p className="mb-3 font-bold">{title}</p>
        {Array.from({ length: limit }, (_, i) => (
          <Skeleton key={i} className="mb-4 h-6 rounded-md bg-gray-200" /> //один проход. Это считается более идиоматичным, так как не создаётся промежуточный массив с undefined.
        ))}
       {/*  {Array.from({ length: limit }).map((_, index) => (
          <Skeleton key={index} className="mb-4 h-6 rounded-md bg-gray-200" />
        ))} */}
      </div>
    );
  }

  const list = showAll
    ? items.filter((item) => item.text.toLowerCase().includes(searchValue.toLocaleLowerCase()))// отфильтрует список по поиску, по ключевым буквам. .includes('сыр') И filter() оставит:Сыр и Сыр моцарелла
    : defaultItems || items ; 

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => { // Это обработчик изменения <Input>.
    setSearchValue(e.target.value);
  };

  return (
    <div className={cn('', className)}>
      <p className="font-bold mb-3">{title}</p>

      {showAll && ( // показываем или непоказываем  Input showAll ? 'Скрыть' : '+ Показать все'
        <div className="mb-5">
          <Input onChange={onChangeSearchInput} placeholder={searchInputPlaceholder} className="bg-gray-50 border-none" />
        </div>
      )}

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {list.map((item, index) => (
          <FilterCheckbox
            key={item.value}
            text={item.text}
            value={item.value}
            children={item.children}
            checked={selected?.has(item.value)} // проверяем на undefined и возврощаем  true или false. есть такой элемент в хуке или нет  const { set: selectedIngredients, toggle } = useSetCustom<string>();
            onCheckedChange={() => onClickCheckbox?.(item.value)} // если нажали делаем тогл onClickCheckbox={(value) => toggle(value)} в хуке  const { set: selectedIngredients, toggle } = useSetCustom<string>();
            name={name}
          />
        ))}
      </div>

      {items.length > limit && ( // После нажатия showAll: + Показать все компонент переходит в режим полного списка + поиска.
        <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}> 
          <button onClick={() => setShowAll(!showAll)} className="text-primary mt-3"> 
            {showAll ? 'Скрыть' : '+ Показать все'}
          </button>
        </div>
      )}
    </div>
  );
}
