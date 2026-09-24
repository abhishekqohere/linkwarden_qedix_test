import axios from "axios";
import { PrismaClient } from "@prisma/client";

const qedixPrisma = new PrismaClient();

export async function qedixPersistProviderResponseDirectly() {
  const response = await axios.get(
    "https://example.com/qedix-provider",
  );

  return qedixPrisma.link.updateMany({
    where: {
      id: 0,
    },
    data: response.data,
  });
}