import { Filters, ProductCard, ProductsGroupList, Title, TopBar } from '@/components/shared';
import { Container } from '@/components/shared/container';
import { prisma } from '@/prisma/prisma-client';

export default async function Home() {
  const categories = await prisma.category.findMany({
    // взять категории и их продукты с ингридиентами и items
    include: {
      products: {
        include: {
          ingredients: true,
          items: true,
        },
      },
    },
  });

  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar categories={categories.filter((category)=>category.products.length > 0)}/>

      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>
          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {categories.map(
                (category) =>
                  category.products.length > 0 && (
                    <ProductsGroupList
                      key={category.id}
                      title={category.name}
                      categoryId={category.id}
                      items={category.products}
                      /* items={[
                        {
                          id: 1,
                          name: 'Чизбургер-пицца',
                          imageUrl: 'https://i1-e.pinimg.com/1200x/4d/a7/3f/4da73f313deef52c2373795a970b4082.jpg',
                          price: 550,
                          items: [{ price: 550 }],
                        },
                      ]} */
                    />
                  )
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
