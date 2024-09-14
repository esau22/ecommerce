import { PrismaClient } from "@prisma/client";

const connectionPrisma = () => {
  return new PrismaClient();
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof connectionPrisma>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? connectionPrisma();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
