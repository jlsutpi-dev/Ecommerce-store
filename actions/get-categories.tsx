import { CategoryType } from "@/types";

const url = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export const getCategory = async (): Promise<CategoryType[]> => {
  const categories = await fetch(`${url}`);
  return categories.json();
};
