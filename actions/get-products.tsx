import { ProductType } from "@/types";
import qs from "query-string";

const Url = `${process.env.NEXT_PUBLIC_API_URL}/products`;
interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

export const getProducts = async (query: Query): Promise<ProductType[]> => {
  const url = qs.stringifyUrl({
    url: Url,
    query: {
      colorId: query.colorId,
      categoryId: query.categoryId,
      sizeId: query.sizeId,
      isFeatured: query.isFeatured,
    },
  });
  const res = await fetch(url);
  return res.json();
};
