import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ClickOutside from "@/components/shared/hooks/clickOutside";
import { FaAngleDown, FaUser } from "react-icons/fa";
import { RiSettings4Fill, RiLogoutBoxLine } from "react-icons/ri";
import { cn } from "@/lib/utils";

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      <Link
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        href="#"
      >
        <span className="h-12 w-12 rounded-full">
          <Image
            width={112}
            height={112}
            src="/images/users/user-03.png"
            alt="User"
            className="overflow-hidden rounded-full"
          />
        </span>

        <span className="flex items-center gap-2 font-medium text-[#111928] dark:text-[#9CA3AF]">
          <span className="hidden lg:block">Jhon Smith</span>
          <FaAngleDown
            className={cn("fill-current", "duration-200", "ease-in", {
              "rotate-180": dropdownOpen,
            })}
          />
        </span>
      </Link>

      {/* <!-- Dropdown Star --> */}
      {dropdownOpen && (
        <div
          className={`absolute right-0 mt-5 flex w-[280px] flex-col rounded-lg border-[0.5px] border-[#E6EBF1] bg-white shadow-default dark:border-[#374151] dark:bg-[#122031]`}
        >
          <div className="flex items-center gap-2 px-5 pb-5 pt-3">
            <span className="relative block h-12 w-12 rounded-full">
              <Image
                width={112}
                height={112}
                src="/images/users/user-03.png"
                alt="User"
                className="overflow-hidden rounded-full"
              />

              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-[#22AD5C] dark:border-[#122031]"></span>
            </span>

            <span className="block">
              <span className="block font-medium text-[#111928] dark:text-white">
                Jhon Smith
              </span>
              <span className="block font-medium text-[#6B7280] dark:text-[#9CA3AF]">
                jonson@nextadmin.com
              </span>
            </span>
          </div>
          <ul className="flex flex-col gap-1 border-y-[0.5px] border-[#E6EBF1] p-2 dark:border-[#374151]">
            <li>
              <Link
                href="/profile"
                className="flex w-full items-center gap-2 rounded-[7px] p-2 text-sm font-medium text-[#4B5563] duration-300 ease-in-out hover:bg-[#F3F4F6] hover:text-[#111928] dark:text-[#9CA3AF] dark:hover:bg-[#374151] dark:hover:text-white lg:text-base"
              >
                <FaUser size={20} />
                View profile
              </Link>
            </li>

            <li>
              <Link
                href="/pages/settings"
                className="flex w-full items-center gap-2 rounded-[7px] p-2 text-sm font-medium text-[#4B5563] duration-300 ease-in-out hover:bg-[#F3F4F6] hover:text-[#111928] dark:text-[#9CA3AF] dark:hover:bg-[#374151] dark:hover:text-white lg:text-base"
              >
                <RiSettings4Fill size={20} />
                Account Settings
              </Link>
            </li>
          </ul>
          <div className="p-2.5">
            <button className="flex w-full items-center gap-2 rounded-[7px] p-2 text-sm font-medium text-[#4B5563] duration-300 ease-in-out hover:bg-[#F3F4F6] hover:text-[#111928] dark:text-[#9CA3AF] dark:hover:bg-[#374151] dark:hover:text-white lg:text-base">
              <RiLogoutBoxLine size={20} />
              Logout
            </button>
          </div>
        </div>
      )}
      {/* <!-- Dropdown End --> */}
    </ClickOutside>
  );
};

export default DropdownUser;
