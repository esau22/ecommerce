import Cart from "../cart/cart";
import Breadcrumb from "@/components/shared/Breadcrumb/breadcrumb";
import { products } from "@/assets/data";
import CardProduct from "@/components/shared/cart/cart-product";
import Categories from "@/components/shared/cart/categories";
import SearchForm from "../header/searchForm";

const FormSales = () => {
  return (
    <div className="rounded-[10px] border border-stroke bg-white p-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-7">
      <div className="flex items-center justify-between mb-4">
        <Breadcrumb pageName="Realizar Ventas" />
        <SearchForm />
      </div>
      <section className="lg:flex lg:gap-x-4 h-full">
        <div className="basis-4/5 xl:basis-3/4 p-5 lg:pr-2 overflow-y-auto">
          <Categories />
          <ul className="grid sm:grid-cols-2 gap-4 mt-6">
            {products.map((product) => (
              <li key={product.name}>
                <CardProduct product={product} />
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full xl:w-2/5 p-4 lg:h-full">
          <Cart />
        </div>
      </section>
    </div>
  );
};

export default FormSales;
