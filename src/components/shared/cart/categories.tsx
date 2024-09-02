import { categories } from "@/assets/data";

const Categories = () => {
  return (
    <div>
      <ul className="flex items-center gap-x-1 flex-nowrap border border-black/10 p-1 rounded-2xl max-w-full overflow-x-auto">
        <li>
          <button
            type="button"
            className="py-3 px-6 bg-primary font-medium rounded-2xl"
          >
            Todas
          </button>
        </li>
        {categories.map((category) => (
          <li key={category.category}>
            <button
              type="button"
              className="py-3 px-6 font-medium rounded-2xl hover:bg-white/30 dark:hover:bg-white/70 transition-colors text-dark dark:text-white"
            >
              {category.category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
