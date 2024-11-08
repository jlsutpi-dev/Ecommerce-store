import { ImageType } from "@/types";
import { TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Image from "next/image";

import GalleryTab from "@/components/gallery/gallery-tab";

interface GalleryProps {
  images: ImageType[];
}

const Gallery = ({ images }: GalleryProps) => {
  return (
    <TabGroup as="div" className={"flex flex-col-reverse"}>
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <TabList className={"grid grid-cols-4 gap-6"}>
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </TabList>
      </div>
      <TabPanels className={" aspect-square w-full"}>
        {images.map((image) => (
          <TabPanel key={image.id}>
            <div className=" aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
              <Image
                src={image.url}
                className=" object-cover object-center"
                alt="image"
                fill
              />
            </div>
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
};

export default Gallery;
