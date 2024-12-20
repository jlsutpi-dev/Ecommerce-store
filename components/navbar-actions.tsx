"use client";

import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-card";
import { useRouter } from "next/navigation";

const NavbarActions = () => {
  const cart = useCart();
  const router = useRouter();
  const [isMounted, setIsMounted] = useState<boolean>(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className=" ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => {
          router.push("/cart");
        }}
        className=" flex items-center rounded-full bg-black px-4 py-2"
      >
        <ShoppingBag size={20} color="white" />
        <span className=" ml-2 font-medium text-white  ">
          {cart.items.length}
        </span>
      </Button>{" "}
    </div>
  );
};

export default NavbarActions;
