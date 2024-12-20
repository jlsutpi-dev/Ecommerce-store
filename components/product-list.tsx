import { ProductType } from "@/types";

import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";

interface ProductListProps {
  title: string;
  items: ProductType[];
}
const ProductList = ({ title, items }: ProductListProps) => {
  return (
    <div className=" space-y-4 ">
      <h3 className=" font-bold text-3xl">{title}</h3>
      {items.length === 0 && <NoResults />}
      {/* <div className=" gird grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <div className="w-[80%] sm:w-[80%] lg:w-[25%]" key={item.id}>
            {" "}
            <ProductCard item={item} />
          </div>
        ))}
      </div> */}
      <div className="flex flex-wrap gap-4">
        {items.map((item) => (
          <div
            className="w-full sm:w-[45%] md:w-[30%] lg:w-[23%]"
            key={item.id}
          >
            <ProductCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
