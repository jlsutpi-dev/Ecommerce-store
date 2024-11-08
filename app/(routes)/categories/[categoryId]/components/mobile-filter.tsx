"use client";

import { Dialog, DialogPanel } from "@headlessui/react";
import { Plus, X } from "lucide-react";
import { useState } from "react";

import Button from "@/components/ui/button";
import IconButton from "@/components/ui/icon-button";
import { ColorType, SizeType } from "@/types";
import Filter from "./filter";

interface MobileFiltersProps {
  sizes: SizeType[];
  colors: ColorType[];
}

const MobileFilters = ({ sizes, colors }: MobileFiltersProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const onOPen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button onClick={onOPen} className="flex gap-x-2 lg:hidden">
        Filters <Plus size={20} className=" items-center " />
      </Button>

      <Dialog
        open={open}
        className={"relative z-40 lg:hidden"}
        onClose={onClose}
      >
        <div className=" flex inset-0 bg-black bg-opacity-25" />
        <div className=" fixed inset-0 z-40 flex">
          <DialogPanel
            className={
              " relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl"
            }
          >
            <div className=" flex items-center justify-end px-4">
              <IconButton icon={<X size={15} onClick={onClose} />} />
            </div>
            <div className=" p-4">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;
