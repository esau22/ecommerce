"use client";
import { cn } from "@/lib/utils";
import { Category } from "@/types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface CategoriesProps {
  category: Category[];
}

const Categories = ({ category }: CategoriesProps) => {
  const pathname = usePathname();

  return (
    <div>
      <ul className="flex items-center gap-y-1 flex-nowrap border border-black/10 dark:border-white/40 p-3 rounded-2xl max-w-full overflow-y-auto">
        <li>
          <Link
            href="/dashboard/sales/todas"
            className={cn(
              "py-2 px-8 font-medium rounded-2xl",
              pathname === "/dashboard/sales/todas"
                ? "bg-primary text-white"
                : "hover:bg-white/30 dark:hover:bg-white/70"
            )}
          >
            Todas
          </Link>
        </li>
        {category.map((cat) => (
          <li key={cat.id}>
            <Link
              href={cat.name}
              className={cn(
                "py-2 px-8 font-medium rounded-2xl",
                pathname === `/dashboard/sales/${cat.name}`
                  ? "bg-primary text-white"
                  : "hover:bg-white/30 dark:hover:bg-white/70"
              )}
            >
              {cat.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
