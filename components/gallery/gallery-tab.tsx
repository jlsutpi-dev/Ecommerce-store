"use client"; // Ensure the component is marked as a client component

import { ImageType } from "@/types";
import { Tab } from "@headlessui/react";
import Image from "next/image";

interface GalleryTabProps {
  image: ImageType;
}

const GalleryTab = ({ image }: GalleryTabProps) => {
  return (
    <Tab
      className={({ selected }) =>
        `relative flex aspect-square ring-2 ring-offset-2 inset-0 cursor-pointer items-center justify-center rounded-md bg-white ${
          selected ? " ring-black" : "ring-transparent"
        }`
      }
    >
      <span className="absolute inset-0 h-full w-full aspect-square overflow-hidden rounded-md">
        <Image
          fill
          src={image.url}
          className="object-cover object-center"
          alt="image"
        />
      </span>
    </Tab>
  );
};

export default GalleryTab;
