import { Billboard } from "@/types";

const url = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

export const getBillboard = async (id: string): Promise<Billboard> => {
  const billboard = await fetch(`${url}/${id}`);
  return billboard.json();
};
