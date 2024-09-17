"use client";
import Cart from "../cart/cart";
import Breadcrumb from "@/components/shared/Breadcrumb/breadcrumb";
import CardProduct from "@/components/shared/cart/cart-product";
import Categories from "@/components/shared/cart/categories";
import SearchForm from "../header/searchForm";
import { Category, Product } from "@/types/types";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

interface FormSalesProps {
  category: Category[];
  products: Product[];
}

const FormSales = ({ products = [], category = [] }: FormSalesProps) => {
  const pathname = usePathname();
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  useEffect(() => {
    // Extraer el nombre de la categoría desde la URL si está presente
    const pathParts = pathname.split("/");
    const categoryName = pathParts[pathParts.length - 1];

    // Convertir el nombre de la categoría a un ID si es necesario
    const categoryId =
      category.find((cat) => cat.name === categoryName)?.id || null;
    setSelectedCategory(categoryId);
  }, [pathname, category]);

  // Filtra los productos basados en la categoría seleccionada
  const filteredProducts =
    selectedCategory === null || selectedCategory === 0
      ? products
      : products.filter((product) => product.categoryId === selectedCategory);

  return (
    <div className="rounded-[10px] border border-stroke bg-white p-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-7">
      <div className="flex items-center justify-between mb-4">
        <Breadcrumb pageName="Realizar Ventas" />
        <SearchForm />
      </div>
      <section className="lg:flex lg:gap-x-4 h-full">
        <div className="basis-4/5 xl:basis-3/4 p-5 lg:pr-2 overflow-y-auto">
          <Categories category={category} />
          <ul className="grid sm:grid-cols-2 gap-4 mt-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <li key={product.id}>
                  <CardProduct product={product} />
                </li>
              ))
            ) : (
              <p className="text-lg font-semibold text-dark dark:text-white text-center mt-6">
                No products found for the selected category.
              </p>
            )}
          </ul>
        </div>
        <div className="w-full xl:w-2/5 p-4 lg:h-full">
          <Cart products={products} />
        </div>
      </section>
    </div>
  );
};

export default FormSales;
