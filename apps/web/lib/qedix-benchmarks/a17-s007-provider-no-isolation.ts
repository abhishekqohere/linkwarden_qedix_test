import axios from "axios";
import { PrismaClient } from "@prisma/client";

const qedixPrisma = new PrismaClient();

export async function qedixProviderFailureBlocksCoreFlow() {
  await axios.get(
    "https://example.test/qedix-provider",
  );

  return qedixPrisma.link.updateMany({
    where: {
      id: 0,
    } as any,
    data: {} as any,
  });
}