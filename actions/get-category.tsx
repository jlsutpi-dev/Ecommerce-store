import { CategoryType } from "@/types";

const url = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export const getCategory = async (id: string): Promise<CategoryType> => {
  const category = await fetch(`${url}/${id}`);
  return category.json();
};
