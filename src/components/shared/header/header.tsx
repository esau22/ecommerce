import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import DarkModeSwitcher from "./darkModeSwitcher";
import SearchForm from "./searchForm";
import DropdownUser from "./dropdownUser";
import Logo from "@/components/ui/logo";

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  return (
    <header
      className={cn(
        "sticky top-0 z-40 flex w-full border-b bg-white dark:bg-gray-dark",
        "border-stroke dark:border-stroke-dark"
      )}
    >
      <div
        className={cn(
          "flex flex-grow items-center justify-between px-4 py-5 shadow-2",
          "md:px-5 2xl:px-10"
        )}
      >
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* Hamburger Toggle BTN */}
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className={cn(
              "z-50 block rounded-sm border p-1.5 shadow-sm lg:hidden",
              "border-gray-200 bg-white dark:border-[#374151] dark:bg-[#1F2A37]"
            )}
          >
            <span className="relative block h-6 w-6 cursor-pointer">
              <span className="du-block absolute right-0 h-full w-full">
                <span
                  className={cn(
                    "relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-dark",
                    "dark:bg-white delay-[0] duration-200 ease-in-out",
                    !props.sidebarOpen && "!w-full delay-300"
                  )}
                ></span>
                <span
                  className={cn(
                    "relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-dark",
                    "dark:bg-white delay-150 duration-200 ease-in-out",
                    !props.sidebarOpen && "delay-400 !w-full"
                  )}
                ></span>
                <span
                  className={cn(
                    "relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-dark",
                    "dark:bg-white delay-200 duration-200 ease-in-out",
                    !props.sidebarOpen && "!w-full delay-500"
                  )}
                ></span>
              </span>
              <span className="absolute right-0 h-full w-full rotate-45">
                <span
                  className={cn(
                    "absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-dark",
                    "dark:bg-white delay-300 duration-200 ease-in-out",
                    !props.sidebarOpen && "!h-0 !delay-[0]"
                  )}
                ></span>
                <span
                  className={cn(
                    "delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-dark",
                    "dark:bg-white duration-200 ease-in-out",
                    !props.sidebarOpen && "!h-0 !delay-200"
                  )}
                ></span>
              </span>
            </span>
          </button>

          <Link className="block flex-shrink-0 lg:hidden" href="/">
            <Image
              width={32}
              height={32}
              src={"/images/logo/logo-icon.svg"}
              alt="Logo"
            />
          </Link>
        </div>

        <div className="hidden xl:block">
          <div>
            <h1 className="mb-0.5 text-heading-5 font-bold text-dark dark:text-white">
              <Logo />
            </h1>
          </div>
        </div>

        <div className="flex items-center justify-normal gap-2 2xsm:gap-4 lg:w-full lg:justify-between xl:w-auto xl:justify-normal">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            <SearchForm />
            <DarkModeSwitcher />
          </ul>
          <DropdownUser />
        </div>
      </div>
    </header>
  );
};

export default Header;
