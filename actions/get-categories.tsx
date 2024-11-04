import { Category } from "@/types";

const url = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export const getCategory = async (): Promise<Category[]> => {
  const categories = await fetch(`${url}`);
  return categories.json();
};
