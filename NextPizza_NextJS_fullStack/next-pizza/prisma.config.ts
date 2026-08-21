import "dotenv/config";
import { defineConfig, env } from "prisma/config";
export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "tsx prisma/seed.ts", 
  },
  datasource: {
    url: env("PRISMA_DATABASE_URL"),
  },
});

/* Prisma выполняет примерно такую последовательность:
загружает prisma.config.ts;
выполняет import "dotenv/config" — загружает .env;
получает значение PRISMA_DATABASE_URL;
читает prisma/schema.prisma;
сравнивает схему с базой;
создаёт миграцию;
применяет её;
генерирует Prisma Client.
То есть prisma.config.ts — это точка входа для Prisma CLI. */