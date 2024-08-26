"use client";
import { FC, useState } from "react";
import { cn } from "@/lib/utils";
import { RiLockLine, RiLockUnlockLine } from "react-icons/ri";

interface InputProps {
  type: "text" | "email" | "password" | "date" | "file" | "number";
  placeholder?: string;
  className?: string;
  label: string;
}
const Input: FC<InputProps> = ({ type, className, placeholder, label }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div className="relative">
        <label className="mb-3 block text-body-sm font-medium text-[#111928] dark:text-white">
          {label}
        </label>
        <div className="relative flex items-center">
          <input
            type={
              type === "text"
                ? "text"
                : type === "email"
                ? "email"
                : type === "date"
                ? "date"
                : type === "file"
                ? "file"
                : type === "number"
                ? "number"
                : type === "password" && showPassword
                ? "text"
                : type
            }
            placeholder={placeholder}
            className={cn(
              "w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5 py-2 pr-3 text-[#111928] outline-none transition placeholder:text-[#9CA3AF] focus:border-primary active:border-primary disabled:cursor-default dark:border-[#374151] dark:bg-[#1F2A37] dark:text-white dark:focus:border-primary",
              className
            )}
          />
          {type === "password" && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <RiLockUnlockLine /> : <RiLockLine />}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Input;
