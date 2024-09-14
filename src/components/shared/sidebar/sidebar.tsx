import Link from "next/link";
import SidebarDropdown from "@/components/shared/sidebar/sidebarDropdown";
import { FaAngleDown } from "react-icons/fa";
import { cn } from "@/lib/utils";

const SidebarItem = ({ item, pageName, setPageName }: any) => {
  const handleClick = () => {
    const updatedPageName =
      pageName !== item.label.toLowerCase() ? item.label.toLowerCase() : "";
    return setPageName(updatedPageName);
  };

  return (
    <>
      <li>
        <Link
          href={item.route}
          onClick={handleClick}
          className={`${
            pageName === item.label.toLowerCase()
              ? "bg-[#5750F1]/[.07] text-primary dark:bg-white/10 dark:text-white"
              : "text-[#4B5563] hover:bg-[#F3F4F6] hover:text-[#111928] dark:text-[#9CA3AF] dark:hover:bg-white/10 dark:hover:text-white"
          } group relative flex items-center gap-3 rounded-[7px] px-3.5 py-3 font-medium duration-300 ease-in-out`}
        >
          {item.icon}
          {item.label}
          {item.message && (
            <span className="absolute right-11.5 top-1/2 -translate-y-1/2 rounded-full bg-[#FEF3F3] px-1.5 py-px text-[10px] font-medium leading-[17px] text-red">
              {item.message}
            </span>
          )}
          {item.pro && (
            <span className="absolute right-3.5 top-1/2 -translate-y-1/2 rounded-md bg-[#5750F1] px-1.5 py-px text-[10px] font-medium leading-[17px] text-white">
              Pro
            </span>
          )}
          {item.children && (
            <FaAngleDown
              size={20}
              className={cn(
                "absolute right-3.5 top-1/2 -translate-y-1/2 fill-current duration-200 ease-in-out",
                {
                  "rotate-180": pageName === item.label.toLowerCase(),
                }
              )}
            />
          )}
        </Link>

        {item.children && (
          <div
            className={`translate transform overflow-hidden ${
              pageName !== item.label.toLowerCase() && "hidden"
            }`}
          >
            <SidebarDropdown item={item.children} />
          </div>
        )}
      </li>
    </>
  );
};

export default SidebarItem;
