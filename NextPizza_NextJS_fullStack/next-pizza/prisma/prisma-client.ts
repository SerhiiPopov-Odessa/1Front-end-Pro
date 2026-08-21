/*  цель — создать только один экземпляр PrismaClient, 
чтобы избежать ошибки “Too many database connections” во время разработки. */ 

import { PrismaClient } from "@prisma/client"; // Это тот самый класс, который генерируется командой: npx prisma generate

const globalForPrisma = global as unknown as { prisma: PrismaClient }; // Это означает:«Поверь мне, TypeScript, я знаю, 
                                                                       // что делаю. Считай, что global имеет поле prisma»

export const prisma = globalForPrisma.prisma || new PrismaClient(); // Если уже существует: globalForPrisma.prisma используй его. Иначе 
                                                                    // создай новый: new PrismaClient() 
                                                                    // 10 || 20          // 10
                                                                    //true || false    // true
                                                                    //"hello" || "world" // "hello"
                                                                    //null || 20        // 20
                                                                    //false || 20       // 20
                                                                    //0 || 20           // 20
                                                                    //"" || "world"    // "world"
                                                                    //undefined || 20   // 20
                                                            
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma; 


// Во время разработки: NODE_ENV=development Условие истинно.
// Поэтому:
// globalForPrisma.prisma = prisma;
// Экземпляр сохраняется в глобальный объект.
// При следующем Hot Reload он будет переиспользован.
// Почему только не в production?
// Потому что в production Hot Reload нет.
// Модули загружаются один раз.
// Там достаточно обычного:
// const prisma = new PrismaClient();

////////////////////////////////  global as unknown as { prisma: PrismaClient }   /////////////////////////
/* Её смысл: «Считай, что объект global имеет свойство prisma типа PrismaClient».
Разберём на простых примерах.
Пример 1. Без приведения типов
Есть объект:
const obj = {};
obj.name = "Sergey";
TypeScript скажет:
Property 'name' does not exist on type '{}'.
Потому что объект {} не содержит свойства name.
Пример 2. Одно приведение типа
Можно написать:
const obj = {} as { name: string };
obj.name = "Sergey";
Теперь TypeScript доволен.
Он считает, что obj имеет тип:
{ name: string }
Почему с global так не получается
Если написать:
const globalForPrisma =
  global as { prisma: PrismaClient };
TypeScript может выдать ошибку:
Conversion of type 'typeof globalThis' to type
'{ prisma: PrismaClient }' may be a mistake...
Почему?
Потому что global — огромный объект.
У него сотни свойств:
process
console
Buffer
setTimeout
и т.д.
А ты пытаешься сказать, что это объект только с одним свойством prisma.
TypeScript считает такое приведение небезопасным.
Зачем нужен unknown
unknown — это специальный тип.
Он означает:
«Я не знаю, что это за значение».
Например:
const value: unknown = "hello";
С unknown нельзя делать почти ничего:
value.toUpperCase(); // ошибка
Сначала нужно привести тип.
Двойное приведение
Схема такая:

global
   |
   | as unknown
   v
unknown
   |
   | as { prisma: PrismaClient }
   v
{ prisma: PrismaClient }

То есть мы говорим TypeScript:
забудь исходный тип (unknown);
теперь считай его новым типом. */
