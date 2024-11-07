import { Product } from "@/types";

import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";

interface ProductListProps {
  title: string;
  items: Product[];
}
const ProductList = ({ title, items }: ProductListProps) => {
  return (
    <div className=" space-y-4 ">
      <h3 className=" font-bold text-3xl">{title}</h3>
      {items.length === 0 && <NoResults />}
      <div className=" gird grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;