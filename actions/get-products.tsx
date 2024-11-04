import { Product } from "@/types";

const url = `${process.env.NEXT_PUBLIC_API_URL}/products`;

export const getProducts = async (): Promise<Product[]> => {
  const products = await fetch(`${url}`);
  return products.json();
};
