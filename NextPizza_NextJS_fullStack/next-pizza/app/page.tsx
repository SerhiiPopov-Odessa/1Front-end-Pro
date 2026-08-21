import { Filters, ProductCard, ProductsGroupList, Title, TopBar } from "@/components/shared";
import { Container } from "@/components/shared/container";




export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold"/>
      </Container>

      <TopBar />
      
      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>
          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {/* <ProductCard id={0} name="Чизбургер-пицца" price={550} imageUrl="https://i1-e.pinimg.com/1200x/4d/a7/3f/4da73f313deef52c2373795a970b4082.jpg" /> */}
              <ProductsGroupList title="Пиццы" items={[{
                id:1,
                name: 'Чизбургер-пицца',
                imageUrl:"https://i1-e.pinimg.com/1200x/4d/a7/3f/4da73f313deef52c2373795a970b4082.jpg",
                price: 550,
                items: [{price:550}],
              },
              {
                id:2,
                name: 'Чизбургер-пицца',
                imageUrl:"https://i1-e.pinimg.com/1200x/4d/a7/3f/4da73f313deef52c2373795a970b4082.jpg",
                price: 550,
                items: [{price:550}],
              },
              {
                id:3,
                name: 'Чизбургер-пицца',
                imageUrl:"https://i1-e.pinimg.com/1200x/4d/a7/3f/4da73f313deef52c2373795a970b4082.jpg",
                price: 550,
                items: [{price:550}],
              },
              {
                id:4,
                name: 'Чизбургер-пицца',
                imageUrl:"https://i1-e.pinimg.com/1200x/4d/a7/3f/4da73f313deef52c2373795a970b4082.jpg",
                price: 550,
                items: [{price:550}],
              },
              {
                id:5,
                name: 'Чизбургер-пицца',
                imageUrl:"https://i1-e.pinimg.com/1200x/4d/a7/3f/4da73f313deef52c2373795a970b4082.jpg",
                price: 550,
                items: [{price:550}],
              },
              {
                id:6,
                name: 'Чизбургер-пицца',
                imageUrl:"https://i1-e.pinimg.com/1200x/4d/a7/3f/4da73f313deef52c2373795a970b4082.jpg",
                price: 550,
                items: [{price:550}],
              }
              ]} categoryId={1}/>

              <ProductsGroupList title="Комбо" items={[{
                id:7,
                name: 'Чизбургер-пицца',
                imageUrl:"https://i1-e.pinimg.com/1200x/4d/a7/3f/4da73f313deef52c2373795a970b4082.jpg",
                price: 550,
                items: [{price:550}],
              },
              {
                id:8,
                name: 'Чизбургер-пицца',
                imageUrl:"https://i1-e.pinimg.com/1200x/4d/a7/3f/4da73f313deef52c2373795a970b4082.jpg",
                price: 550,
                items: [{price:550}],
              },
              {
                id:9,
                name: 'Чизбургер-пицца',
                imageUrl:"https://i1-e.pinimg.com/1200x/4d/a7/3f/4da73f313deef52c2373795a970b4082.jpg",
                price: 550,
                items: [{price:550}],
              },
              {
                id:10,
                name: 'Чизбургер-пицца',
                imageUrl:"https://i1-e.pinimg.com/1200x/4d/a7/3f/4da73f313deef52c2373795a970b4082.jpg",
                price: 550,
                items: [{price:550}],
              },
              {
                id:11,
                name: 'Чизбургер-пицца',
                imageUrl:"https://i1-e.pinimg.com/1200x/4d/a7/3f/4da73f313deef52c2373795a970b4082.jpg",
                price: 550,
                items: [{price:550}],
              },
              {
                id:12,
                name: 'Чизбургер-пицца',
                imageUrl:"https://i1-e.pinimg.com/1200x/4d/a7/3f/4da73f313deef52c2373795a970b4082.jpg",
                price: 550,
                items: [{price:550}],
              }
              ]} categoryId={2}/>


            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
