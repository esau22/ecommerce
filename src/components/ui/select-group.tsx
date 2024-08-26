"use client";
import React, { FC, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { cn } from "@/lib/utils";

interface Option {
  label: string;
}
interface SelectGroupProps {
  label?: string;
  className?: string;
  options: Option[];
}

const SelectGroup: FC<SelectGroupProps> = ({ label, className, options }) => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [isOptionSelected, setIsOptionSelected] = useState<boolean>(false);

  const changeTextColor = () => {
    setIsOptionSelected(true);
  };

  return (
    <div className="mb-4">
      <label className="mb-3 block text-body-sm font-medium text-[#111928] dark:text-white">
        {label}
      </label>

      <div className="relative z-20 bg-transparent dark:bg-[#374151]">
        <select
          value={selectedOption}
          onChange={(e) => {
            setSelectedOption(e.target.value);
            changeTextColor();
          }}
          className={cn(
            `relative z-20 w-full mr-6 appearance-none rounded-[7px] border border-stroke bg-transparent px-5 py-2 outline-none transition focus:border-primary active:border-primary dark:border-[#374151] dark:bg-[#1F2A37] dark:focus:border-primary ${
              isOptionSelected ? "text-[#111928] dark:text-white" : ""
            }`,
            className
          )}
        >
          {options.map((option, index) => (
            <option key={index}>{option.label}</option>
          ))}
        </select>
        <span className="absolute right-4 top-1/2 z-30 -translate-y-1/2">
          <FaAngleDown />
        </span>
      </div>
    </div>
  );
};

export default SelectGroup;
