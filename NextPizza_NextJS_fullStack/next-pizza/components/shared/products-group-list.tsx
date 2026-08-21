"use client";

import { useEffect, useRef} from "react";
import { cn } from "@/lib/utils";
import { ProductCard } from "./product-card";
import { Title } from "./title";
import { useCategoryStore } from "@/store/category";

/* import { ProductWithRelations } from '@/@types/prisma'; */

type ProductsGroupListProps = {
  title: string;
  items: any[];
  /* items: ProductWithRelations[]; */
  categoryId: number;
  className?: string;
  listClassName?: string;
};

export function ProductsGroupList({
  title,
  items,
  listClassName,
  categoryId,
  className,
}: ProductsGroupListProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setActiveCategoryId(categoryId);
          console.log("ACTIVE:", title);
        }
      },
      {
        rootMargin: "-40% 0px -40% 0px",
      },
    );

    const current = ref.current;

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [categoryId, setActiveCategoryId]);


  return (
    <div
      className={cn("", className)}
      id={title}
      ref={ref} /* ref={intersectionRef} */
    >
      <Title text={title} size="lg" className="font-extrabold mb-5" />

      <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
        {items.map((product, i) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.items[0].price}
            /* ingredients={product.ingredients} */
          />
        ))}
      </div>
    </div>
  );
}
