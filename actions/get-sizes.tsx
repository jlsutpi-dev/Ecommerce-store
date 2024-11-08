import { SizeType } from "@/types";

const url = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

export const getSizes = async (): Promise<SizeType[]> => {
  const sizes = await fetch(`${url}`);
  return sizes.json();
};
