import { cn } from "@/lib/utils";
import { FC } from "react";
import { IconType } from "react-icons";

interface ButtonIconProps {
  icon: IconType;
  label?: string;
  onClick?: () => void;
  className?: string;
}
const ButtonIcon: FC<ButtonIconProps> = ({
  icon: Icon,
  label,
  className,
  onClick,
}) => {
  return (
    <button
      type="button"
      className={cn(
        "p-2 bg-gray-200 dark:bg-gray-700 rounded-xl text-gray-700 dark:text-white border-2 border-gray-400 dark:border-gray-100 hover:bg-opacity-5 dark:hover:bg-opacity-50 transition-colors duration-300 flex",
        label ? "items-center justify-start" : "items-center justify-center",
        className
      )}
      onClick={onClick}
    >
      <Icon size={20} className={label ? "mr-2" : ""} />
      {label}
    </button>
  );
};

export default ButtonIcon;
