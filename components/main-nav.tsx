"use client";

import { cn } from "@/libs/utils";
import { CategoryType } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MainNavProps {
  data: CategoryType[];
}

const MainNav = ({ data }: MainNavProps) => {
  const pathName = usePathname();

  const routes = data.map((route) => ({
    href: `/categories/${route.id}`,
    label: route.name,
    active: pathName === `/categories/${route.id}`,
  }));
  return (
    <nav className=" mx-6 flex items-center space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            " text-sm  transition-colors font-medium hover:text-black ",
            route.active ? " text-black" : "text-neutral-500"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
