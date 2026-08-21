"use client";

import { cn } from "@/lib/utils"
import { useCategoryStore } from "@/store/category";
import { Category } from "@prisma/client";

type CategoriesProps = {
  categories: Category[];
  className?: string
}

/* const items = [
  { id: 1, name: 'Пиццы' },
  { id: 2, name: 'Комбо' },
  { id: 3, name: 'Закуски' },
  { id: 4, name: 'Коктели' },
  { id: 5, name: 'Кофе' },
  { id: 6, name: 'Напитки' },
  { id: 7, name: 'Десерты' },
]; */


export  function Categories({ categories, className }: CategoriesProps) {

  const categoryActiveId = useCategoryStore((state) => state.activeId);
  
  return (
    <div className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}>
        {
            categories.map(({name, id}, index)=>(
            <a className={cn("flex items-center font-bold h-11 rounded-2xl px-5", categoryActiveId === id && "bg-white shadow-md shadow-gray-200 text-primary" )} href={`/#${name}`} key={id}>
                <button>{name}</button>
            </a>
            ))
        }
      
    </div>
  )
}