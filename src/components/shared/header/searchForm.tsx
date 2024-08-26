import { FaSearch } from "react-icons/fa";

const SearchForm = () => {
  return (
    <>
      <li className="hidden lg:block">
        <form>
          <div className="relative w-full max-w-[300px]">
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-full border border-gray-200 bg-gray-100 py-3 pl-10 pr-5 text-black focus:border-blue-700 focus:outline-none dark:border-gray-700 dark:bg-gray-500 dark:text-white dark:focus:border-blue-700 xl:w-[300px]"
            />
            <button className="absolute left-5 top-1/2 transform -translate-y-1/2 text-dark hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-700 gap-4">
              <FaSearch size={18} />
            </button>
          </div>
        </form>
      </li>
    </>
  );
};

export default SearchForm;
