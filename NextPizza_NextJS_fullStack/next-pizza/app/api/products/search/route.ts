/* import { prisma } from '@/prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get('query') || '';

  const products = await prisma.product.findMany({
    where: {
      name: {
        contains: query, // что ищем
        mode: 'insensitive', // нет чувствительности к регистру
      },
    },
    take: 10, // только 10 продуктов вернём
  });

  return NextResponse.json(products);
} */

import { prisma } from '@/prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get('query') || '';

  const products = await prisma.product.findMany({
    where: query ? { name: { contains: query , // что ищем
                   mode: 'insensitive' // нет чувствительности к регистру
                  } } 
                 : {}, // where: {} — пустой объект where в Prisma означает «без фильтра вообще», т.е. SELECT * FROM Product LIMIT 10 без WHERE.
    take: 10, 
  });

  return NextResponse.json(products);
}
