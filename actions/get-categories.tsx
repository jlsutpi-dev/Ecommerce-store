import { CategoryType } from "@/types";

const url = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export const getCategories = async (): Promise<CategoryType[]> => {
  const categories = await fetch(`${url}`);
  return categories.json();
};
