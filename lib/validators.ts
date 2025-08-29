import { Description } from "@radix-ui/react-dialog";
import { z } from "zod";

// // destructured mode !
// import sampleData from "@/db/sample-data";

// // afficher products json :
// console.log(sampleData.products);
// console.log(sampleData.users);

export const insertProductSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  slug: z.string().min(3, "Slug must be at least 3 characters long"),
  category: z.string().min(3, "Category must be at least 3 characters long"),
  images: z.array(z.string()).min(1, "Product must have at least one image"),
  brand: z.string().min(3, "brand must be at least 3 characters long"),
  Description: z
    .string()
    .min(3, "Description must be at least 3 characters long"),
  stock: z.coerce.number(),
  price: z.coerce.number(),
  rating: z.coerce.number(),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
});
