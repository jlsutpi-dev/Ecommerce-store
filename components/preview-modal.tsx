"use client";

import Gallery from "@/components/gallery";
import Info from "@/components/info";
import Modal from "@/components/ui/modal";
import userPreviewModal from "@/hooks/use-preview-modal";

const PreviewModal = () => {
  const previewModal = userPreviewModal();
  const product = userPreviewModal((state) => state.item);
  if (!product) {
    return null;
  }
  return (
    <Modal open={previewModal.isOpen} onClose={previewModal.onClose}>
      <div className=" w-full grid grid-col-1  items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className=" sm:col-span-4 lg:col-span-5">
          <Gallery images={product.images} />
        </div>
        <div className=" sm:col-span-8 lg:col-span-7">
          <Info product={product} />
        </div>
      </div>
    </Modal>
  );
};

export default PreviewModal;
