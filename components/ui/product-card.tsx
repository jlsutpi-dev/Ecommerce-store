"use client";

import { Expand, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { ProductType } from "@/types";

import Currency from "@/components/ui/currency";
import IconButton from "@/components/ui/icon-button";
import userPreviewModal from "@/hooks/use-preview-modal";
import { MouseEventHandler } from "react";

interface ProductProps {
  item: ProductType;
}

const ProductCard = ({ item }: ProductProps) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/products/${item.id}`);
  };
  const previewModal = userPreviewModal();

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    previewModal.onOpen(item);
  };
  return (
    <div
      onClick={handleClick}
      className=" bg-white group cursor-pointer rounded-xl border p-3 space-y-4 "
    >
      {/* {images and actions} */}
      <div className=" aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={item?.images?.[0]?.url}
          fill
          className=" aspect-square object-cover rounded-md"
          alt="Image"
        />
        <div className=" opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className=" flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className=" text-gray-600" />}
            />
            <IconButton
              onClick={() => {}}
              icon={<ShoppingCart size={20} className=" text-gray-600" />}
            />
          </div>
        </div>
      </div>
      <div>
        <p className=" text-lg font-semibold"> {item.name}</p>
        <p className=" text-sm  text-gray-500"> {item.category.name}</p>
      </div>
      <div className=" flex items-center justify-between">
        <Currency value={item.price} />
      </div>
    </div>
  );
};

export default ProductCard;
