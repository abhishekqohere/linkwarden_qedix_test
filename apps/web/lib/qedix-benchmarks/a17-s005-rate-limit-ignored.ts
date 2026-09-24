import axios from "axios";
import { PrismaClient } from "@prisma/client";

type QedixProviderRateLimited = boolean & {
  readonly __brand: "provider-rate-limited";
};

const qedixPrisma = new PrismaClient();

export async function qedixIgnoreProviderRateLimit(
  rateLimited: QedixProviderRateLimited,
) {
  await axios.post(
    "https://example.test/qedix-provider",
    {},
  );

  if (rateLimited) {
    return qedixPrisma.link.updateMany({
      where: {
        id: 0,
      } as any,
      data: {} as any,
    });
  }
}