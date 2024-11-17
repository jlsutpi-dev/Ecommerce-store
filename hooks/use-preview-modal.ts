import { ProductType } from "@/types";
import { create } from "zustand";

interface PreviewModalStore {
  isOpen: boolean;
  item?: ProductType;
  onOpen: (item: ProductType) => void;
  onClose: () => void;
}

const usePreviewModal = create<PreviewModalStore>((set) => ({
  isOpen: false,
  item: undefined,
  onOpen: (item: ProductType) => set({ item, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default usePreviewModal;
