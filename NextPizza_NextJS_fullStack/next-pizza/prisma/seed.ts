/* import "dotenv/config";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
//const connectionString = `${process.env.PRISMA_DATABASE_URL}`;
const connectionString = process.env.PRISMA_DATABASE_URL!; // оператор ! говорит TypeScript: «я уверен, 
                                                           // что переменная существует».
                                                           // string | undefined
                                                           // ! убирает undefined из типа
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });
async function main() {
}
main()
  .then(async () => {
    await prisma.$disconnect();
    await pool.end();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    await pool.end();
    process.exit(1);
  }); */

import { categories, ingredients, products } from './constants';
import { prisma } from './prisma-client';
import { hashSync } from 'bcryptjs';

const randomPrice = (min: number, max: number) => {
return Math.floor(Math.random() * (max - min + 1)) + min;
};

async function up() {
// Пользователи
await prisma.user.createMany({
data: [
{ fullName: 'User Test', email: 'user@test.com', password: hashSync('111111', 10), verified: new Date(), role: 'USER' },
{ fullName: 'Admin Admin', email: 'admin@test.com', password: hashSync('111111', 10), verified: new Date(), role: 'ADMIN' },
],
});

// Категории
await prisma.category.createMany({
data: categories,
});

// Ингредиенты
await prisma.ingredient.createMany({
data: ingredients,
});

// Обычные продукты
await prisma.product.createMany({
data: products,
});

// Пиццы со связями
const pizza1 = await prisma.product.create({
data: {
name: 'Пепперони фреш',
imageUrl: '/img/pizzas/pepperoni-fresh.webp',
categoryId: 1,
ingredients: { connect: ingredients.slice(0, 5) }, // id генерируем через .map((obj, index) => ({ id: index + 1, ...obj })) или если нет то 
                                                   // автоматом @id @default(autoincrement()). @default означает если пусто то сгенерируй autoincrement()
},
});

const pizza2 = await prisma.product.create({
data: {
name: 'Сырная',
imageUrl: '/img/pizzas/cheesy.webp',
categoryId: 1,
ingredients: { connect: ingredients.slice(5, 10) },
},
});

const pizza3 = await prisma.product.create({
data: {
name: 'Чоризо фреш',
imageUrl: '/img/pizzas/chorizo-fresh.webp',
categoryId: 1,
ingredients: { connect: ingredients.slice(10, 17) },
},
});

// Варианты продуктов
await prisma.productItem.createMany({
data: [
  // Пепперони фреш
  { productId: pizza1.id, pizzaType: 1, size: 20, price: randomPrice(190, 600) },
  { productId: pizza1.id, pizzaType: 2, size: 30, price: randomPrice(190, 600) },
  { productId: pizza1.id, pizzaType: 2, size: 40, price: randomPrice(190, 600) },

  // Сырная
  { productId: pizza2.id, pizzaType: 1, size: 20, price: randomPrice(190, 600) },
  { productId: pizza2.id, pizzaType: 1, size: 30, price: randomPrice(190, 600) },
  { productId: pizza2.id, pizzaType: 1, size: 40, price: randomPrice(190, 600) },
  { productId: pizza2.id, pizzaType: 2, size: 20, price: randomPrice(190, 600) },
  { productId: pizza2.id, pizzaType: 2, size: 30, price: randomPrice(190, 600) },
  { productId: pizza2.id, pizzaType: 2, size: 40, price: randomPrice(190, 600) },
  // Чоризо фреш
  { productId: pizza3.id, pizzaType: 1, size: 20, price: randomPrice(190, 600) },
  { productId: pizza3.id, pizzaType: 2, size: 30, price: randomPrice(190, 600) },
  { productId: pizza3.id, pizzaType: 2, size: 40, price: randomPrice(190, 600) },

  { productId: 1, price: randomPrice(190, 600) },
  { productId: 2, price: randomPrice(190, 600) },
  { productId: 3, price: randomPrice(190, 600) },
  { productId: 4, price: randomPrice(190, 600) },
  { productId: 5, price: randomPrice(190, 600) },
  { productId: 6, price: randomPrice(190, 600) },
  { productId: 7, price: randomPrice(190, 600) },
  { productId: 8, price: randomPrice(190, 600) },
  { productId: 9, price: randomPrice(190, 600) },
  { productId: 10, price: randomPrice(190, 600) },
  { productId: 11, price: randomPrice(190, 600) },
  { productId: 12, price: randomPrice(190, 600) },
  { productId: 13, price: randomPrice(190, 600) },
  { productId: 14, price: randomPrice(190, 600) },
  { productId: 15, price: randomPrice(190, 600) },
  { productId: 16, price: randomPrice(190, 600) },
  { productId: 17, price: randomPrice(190, 600) },
],
});

// Коды подтверждения
await prisma.verificationCode.createMany({
data: [
{ userId: 1, code: 'ABC123' },
{ userId: 2, code: 'ADMIN999' },
],
});

// Корзины
await prisma.cart.createMany({
data: [
{ userId: 1, totalAmount: 0, token: '11111' },
{ userId: 2, totalAmount: 0, token: '22222' },
],
});

// Товар в корзине
await prisma.cartItem.create({
data: {
productItemId: 1,
cartId: 1,
quantity: 2,
ingredients: { connect: [{ id: 1 }, { id: 2 }, { id: 3 }] },
},
});

// Заказ
await prisma.order.create({
data: {
userId: 1,
token: 'order-111',
totalAmount: 850,
status: 'PENDING',
items: [{ product: 'Пепперони фреш', size: 30, quantity: 2, price: 425 }], // в schema.prisma указано items Json
fullName: 'User Test',
email: 'user@test.com',
phone: '+380501112233',
address: 'Rue de la Paix 5, Belgium',
comment: 'Без лука',
},
});
}

async function down() {
await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`; // TRUNCATE TABLE "Ingredient" означает: полностью очистить таблицу, RESTART IDENTITY сбрасывает последовательность.
await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`; // После очистки таблицы следующий автоматически созданный id снова будет 1.
await prisma.$executeRaw`TRUNCATE TABLE "Order" RESTART IDENTITY CASCADE`;//$executeRaw - Это метод Prisma, который позволяет выполнить любой SQL-запрос напрямую: prisma.$executeRaw`SQL`
await prisma.$executeRaw`TRUNCATE TABLE "VerificationCode" RESTART IDENTITY CASCADE`;
await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
}

async function main() {
try {
await down();
await up();
console.log('Database seeded successfully');
} catch (e) {
console.error(e);
}
}

main()
.then(async () => {
await prisma.$disconnect(); // Соединение закрывается.Процесс завершается сам.Код выхода будет 0.
})
.catch(async (e) => {
console.error(e);
await prisma.$disconnect(); //1 Соединение закрывается.
process.exit(1); //2 завершает программу с кодом 1 - ошибка. По соглашению в операционных системах: 0 - Успешное завершение, 1 - Ошибка
});
