"use server";

import { PrismaClient } from "@prisma/client";
import { convertToPlainObject } from "../utils";

export const getLatestProducts = async () => {
  const prisma = new PrismaClient();

  const data = await prisma.product.findMany({
    take: 4,
    orderBy: { createdAt: "desc" },
  });

  return convertToPlainObject(data);
};

/* object javascript : 
    {nom: "Dhia", test: true, number : 23.5}
    object python : 
    {nom: "Dhia", test: True, number : 23.5}
*/
