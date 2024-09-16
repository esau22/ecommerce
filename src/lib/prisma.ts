import { PrismaClient } from "@prisma/client";

const createPrismaClient = () => new PrismaClient();

declare const globalThis: {
  prismaClient?: PrismaClient;
} & typeof global;

const prisma = globalThis.prismaClient ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prismaClient = prisma;
}

export default prisma;
