import { ColorType } from "@/types";

const url = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

export const getColors = async (): Promise<ColorType[]> => {
  const colors = await fetch(`${url}`);
  return colors.json();
};
