'use client';

import { cn } from '@/lib/utils';
import { Title } from './title';
import { Input } from '../ui/input';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
import { useGetFilterIngredients } from '@/hooks/useGetFilterIngredients';
import { useSetCustom } from '@/hooks/useSetCustom';
import { useEffect, useMemo, useState } from 'react';
import qs from 'qs';
import { useRouter, useSearchParams } from 'next/navigation';

type FiltersProps = {
  className?: string;
};

type PriceProps = {
  priceFrom?: number;
  priceTo?: number;
};

type QueryFilters = PriceProps & {
  ingredients: string[];
  pizzaTypes: string[];
  sizes: string[];
};

export function Filters({ className }: FiltersProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { set: selectedIngredients, toggle: toggleIngredients } = useSetCustom<string>(searchParams.get('ingredients')?.split(',') ?? []);
  const { set: selectedPizzaTypes, toggle: togglePizzaTypes } = useSetCustom<string>(searchParams.get('pizzaTypes')?.split(',') ?? []);
  const { set: selectedSizes, toggle: toggleSizes } = useSetCustom<string>(searchParams.get('sizes')?.split(',') ?? []);
  const [prices, setPrice] = useState<PriceProps>({
    priceFrom: searchParams.get('priceFrom') ? Number(searchParams.get('priceFrom')) : undefined,
    priceTo: searchParams.get('priceTo') ? Number(searchParams.get('priceTo')) : undefined,
  });
  const { ingredients, isLoading } = useGetFilterIngredients();

  useEffect(() => {
    const filters: QueryFilters = {
      ...prices,
      pizzaTypes: Array.from(selectedPizzaTypes),
      sizes: Array.from(selectedSizes),
      ingredients: Array.from(selectedIngredients),
    };
    const queryString = qs.stringify(filters, { arrayFormat: 'comma' });
    router.push(`?${queryString}`, { scroll: false }); // router.replace- не добовляет новые поля в историю браузера.
    
  }, [selectedIngredients, selectedPizzaTypes, selectedSizes, prices, router]);

  /* const itemIngredients = ingredients.map((item)=>({value:String(item.id), text:item.name})) */
  const itemIngredients = useMemo(
    // map() не выполняется повторно, если ссылка на ingredients не изменилась.
    () =>
      ingredients.map((item) => ({
        value: String(item.id),
        text: item.name,
      })),
    [ingredients]
  );

  const defaultIngredients = useMemo(() => itemIngredients.slice(0, 5), [itemIngredients]);

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrice((prev) => ({ ...prev, [name]: value }));
  }; // {[name]: value}   в название свойства подставляется переменная name

  return (
    <div className={cn('', className)}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      {/* Верхние чекбоксы */}
      <CheckboxFiltersGroup
        title="Тип теста"
        name="pizzaTypes"
        className="mt-5"
        selected={selectedPizzaTypes}
        onClickCheckbox={(value) => togglePizzaTypes(value)}
        items={[
          { text: 'Тонкое', value: '1' },
          { text: 'Традиционное', value: '30' },
        ]}
      />

      <CheckboxFiltersGroup
        title="Размеры"
        name="sizes"
        className="mt-5"
        selected={selectedSizes}
        onClickCheckbox={(value) => toggleSizes(value)}
        items={[
          { text: '20 см', value: '20' },
          { text: '30 см', value: '30' },
          { text: '40 см', value: '40' },
        ]}
      />

      {/* Фильтр цен */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={30000}
            value={prices.priceFrom ?? ''}
            onChange={(e) => updatePrice('priceFrom', Number(e.target.value))}
          />
          <Input
            type="number"
            placeholder="1000"
            min={100}
            max={30000}
            value={prices.priceTo ?? ''}
            onChange={(e) => updatePrice('priceTo', Number(e.target.value))}
          />
        </div>
        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[prices.priceFrom ?? 0, prices.priceTo ?? 1000]}
          onValueChange={([from, to]) => setPrice({ priceFrom: from, priceTo: to })}
        />
      </div>

      <CheckboxFiltersGroup
        title="Ингредиенты"
        name="ingredients"
        className="mt-5"
        limit={5}
        defaultItems={defaultIngredients}
        items={itemIngredients}
        loading={isLoading}
        selected={selectedIngredients}
        onClickCheckbox={(value) => toggleIngredients(value)}
        /* 
        onClickCheckbox={filters.setSelectedIngredients}
        selected={filters.selectedIngredients} */
      />
    </div>
  );
}
