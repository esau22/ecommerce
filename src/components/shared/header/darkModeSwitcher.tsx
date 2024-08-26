import useColorMode from "@/components/shared/hooks/useColorMode";
import { cn } from "@/lib/utils";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkModeSwitcher = () => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <li>
      <div
        onClick={() => {
          if (typeof setColorMode === "function") {
            setColorMode(colorMode === "light" ? "dark" : "light");
          }
        }}
        className={cn(
          "relative z-10 flex h-12 w-[96px] cursor-pointer items-center gap-2 rounded-full",
          "bg-gray-400 dark:bg-black p-[5px] text-black dark:text-white"
        )}
      >
        <div
          className={cn(
            "absolute left-0.5 top-1/2 z-10 h-9 w-9 -translate-y-1/2 rounded-full bg-white transition-transform",
            "duration-300 ease-in-out dark:bg-gray-700",
            colorMode === "dark" ? "translate-x-[51px]" : "translate-x-[3px]"
          )}
        />

        <span className="relative z-10 flex h-9 w-full max-w-9 items-center justify-center">
          <FaSun size={20} />
        </span>
        <span className="relative z-10 flex h-9 w-full max-w-9 items-center justify-center">
          <FaMoon size={20} />
        </span>
      </div>
    </li>
  );
};

export default DarkModeSwitcher;
