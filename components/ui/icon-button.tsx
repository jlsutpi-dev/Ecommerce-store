import { cn } from "@/libs/utils";
import { MouseEventHandler } from "react";

interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactNode;
}

const IconButton = ({ icon, onClick }: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        " rounded-full items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition"
      )}
    >
      {icon}
    </button>
  );
};

export default IconButton;
