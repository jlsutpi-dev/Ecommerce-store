import { ProductType } from "@/types";

const url = `${process.env.NEXT_PUBLIC_API_URL}/products`;

export const getProduct = async (id: string): Promise<ProductType> => {
  const product = await fetch(`${url}/${id}`);
  return product.json();
};
