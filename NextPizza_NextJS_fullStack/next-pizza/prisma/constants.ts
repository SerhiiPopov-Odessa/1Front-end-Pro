export const categories = [
  {
    name: 'Пиццы',
  },
  {
    name: 'Завтрак',
  },
  {
    name: 'Закуски',
  },
  {
    name: 'Коктейли',
  },
  {
    name: 'Напитки',
  },
];

export const ingredients = [
  {
    name: 'Сырный бортик',
    price: 179,
    imageUrl:
      '/img/ingredients/cheese-crust.png',
  },
  {
    name: 'Сливочная моцарелла',
    price: 79,
    imageUrl:
      '/img/ingredients/cream-mozzarella.png',
  },
  {
    name: 'Сыры чеддер и пармезан',
    price: 79,
    imageUrl: '/img/ingredients/cheddar-parmesan.png',
  },
  {
    name: 'Острый перец халапеньо',
    price: 59,
    imageUrl:
      '/img/ingredients/jalapeno.png',
  },
  {
    name: 'Нежный цыпленок',
    price: 79,
    imageUrl: '/img/ingredients/chicken.png',
  },
  {
    name: 'Шампиньоны',
    price: 59,
    imageUrl: '/img/ingredients/mushrooms.png',
  },
  {
    name: 'Ветчина',
    price: 79,
    imageUrl: '/img/ingredients/ham.png',
  },
  {
    name: 'Пикантная пепперони',
    price: 79,
    imageUrl: '/img/ingredients/pepperoni.png',
  },
  {
    name: 'Острая чоризо',
    price: 79,
    imageUrl: '/img/ingredients/chorizo.png',
  },
  {
    name: 'Маринованные огурчики',
    price: 59,
    imageUrl: '/img/ingredients/pickles.png',
  },
  {
    name: 'Свежие томаты',
    price: 59,
    imageUrl: '/img/ingredients/tomatoes.png',
  },
  {
    name: 'Красный лук',
    price: 59,
    imageUrl: '/img/ingredients/red-onion.png',
  },
  {
    name: 'Сочные ананасы',
    price: 59,
    imageUrl: '/img/ingredients/pineapple.png',
  },
  {
    name: 'Итальянские травы',
    price: 39,
    imageUrl:
      '/img/ingredients/italian-herbs.png',
  },
  {
    name: 'Сладкий перец',
    price: 59,
    imageUrl: '/img/ingredients/sweet-pepper.png',
  },
  {
    name: 'Кубики брынзы',
    price: 79,
    imageUrl: '/img/ingredients/feta-cubes.png',
  },
  {
    name: 'Митболы',
    price: 79,
    imageUrl:
      '/img/ingredients/meatballs.png',
  },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const products = [
  {
    name: 'Омлет с ветчиной и грибами',
    imageUrl: '/img/breakfast/omelette-ham-mushrooms.webp',
    categoryId: 2,
  },
  {
    name: 'Омлет с пепперони',
    imageUrl: '/img/breakfast/omelette-pepperoni.webp',
    categoryId: 2,
  },
  {
    name: 'Кофе Латте',
    imageUrl: '/img/drinks/latte.webp',
    categoryId: 2,
  },
  {
    name: 'Дэнвич ветчина и сыр',
    imageUrl: '/img/snacks/danwich-ham-cheese.webp',
    categoryId: 3,
  },
  {
    name: 'Куриные наггетсы',
    imageUrl: '/img/snacks/chicken-nuggets.webp',
    categoryId: 3,
  },
  {
    name: 'Картофель из печи с соусом 🌱',
    imageUrl: '/img/snacks/potato-wedges.webp',
    categoryId: 3,
  },
  {
    name: 'Додстер',
    imageUrl: '/img/snacks/dodster.webp',
    categoryId: 3,
  },
  {
    name: 'Острый Додстер 🌶️🌶️',
    imageUrl: '/img/snacks/dodster-spicy.webp',
    categoryId: 3,
  },
  {
    name: 'Банановый молочный коктейль',
    imageUrl: '/img/cocktails/banana-milkshake.webp',
    categoryId: 4,
  },
  {
    name: 'Карамельное яблоко молочный коктейль',
    imageUrl: '/img/cocktails/caramel-apple-milkshake.webp',
    categoryId: 4,
  },
  {
    name: 'Молочный коктейль с печеньем Орео',
    imageUrl: '/img/cocktails/oreo-milkshake.webp',
    categoryId: 4,
  },
  {
    name: 'Классический молочный коктейль 👶',
    imageUrl: '/img/cocktails/classic-milkshake.webp',
    categoryId: 4,
  },
  {
    name: 'Ирландский Капучино',
    imageUrl: '/img/drinks/irish-cappuccino.webp',
    categoryId: 5,
  },
  {
    name: 'Кофе Карамельный капучино',
    imageUrl: '/img/drinks/caramel-cappuccino.webp',
    categoryId: 5,
  },
  {
    name: 'Кофе Кокосовый латте',
    imageUrl: '/img/drinks/coconut-latte.webp',
    categoryId: 5,
  },
  {
    name: 'Кофе Американо',
    imageUrl: '/img/drinks/americano.webp',
    categoryId: 5,
  },
  {
    name: 'Кофе Латте',
    imageUrl: '/img/drinks/latte.webp',
    categoryId: 5,
  },
];
