export interface BillboardType {
  id: string;
  label: string;
  imageUrl: string;
}

export interface CategoryType {
  id: string;
  name: string;
  billboard: BillboardType;
}

export interface ProductType {
  id: string;
  name: string;
  category: CategoryType;
  price: string;
  isFeatured: boolean;
  size: SizeType;
  color: ColorType;
  images: ImageType[];
}

export interface ColorType {
  id: string;
  name: string;
  value: string;
}
export interface SizeType {
  id: string;
  name: string;
  value: string;
}
export interface ImageType {
  id: string;
  url: string;
}
