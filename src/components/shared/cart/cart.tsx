"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
//import { productsCart } from "@/assets/data";
import { Product } from "@/types/types";
import CardQuantityProduct from "./card-quantity-product";
import { FaShoppingCart } from "react-icons/fa";

interface CartProps {
  products: Product[];
}
const Cart = ({ products }: CartProps) => {
  const [showCart, setShowCart] = useState<boolean>(false);

  const subtotalByProduct = products.map(
    (product) => product.salesPrice * product.stockQuantity
  );
  const subtotal = subtotalByProduct.reduce((acc, curr) => acc + curr, 0);

  const total = subtotal;
  return (
    <>
      <aside
        className={cn(
          "fixed xl:static right-0 bg-background xl:bg-transparent p-5 xl:p-0 flex flex-col gap-y-8 2xl:gap-y-4 h-full z-50 w-[85%] sm:w-[70%] lg:w-[50%] xl:w-full transition-all",
          showCart ? "top-0 delay-300" : "-top-full"
        )}
      >
        <div className="basis-11/12 overflow-y-auto flex flex-col bg-background-foreground border-2 rounded-4xl p-6">
          <section className="basis-1/12">
            <h1 className="text-2xl font-medium text-dark dark:text-white mb-4">
              Detalles de la orden
            </h1>
          </section>
          <ul className="basis-8/12 max-h-full overflow-y-auto">
            {products.map((product) => (
              <li key={product.name} className="border p-3 rounded-3xl mb-3">
                <CardQuantityProduct product={product} />
              </li>
            ))}
          </ul>
          <section className="basis-3/12 pt-2 flex flex-col justify-between gap-y-2">
            <ul className="space-y-1 2xl:space-y-3">
              <li className="flex items-center justify-between">
                <p className="text-gray-500 dark:text-gray-300">Subtotal</p>
                <h3 className="text-lg font-bold">${subtotal.toFixed(2)}</h3>
              </li>
              <li className="flex items-center justify-between">
                <p className="text-gray-500 dark:text-gray-300">Total</p>
                <h3 className="text-lg font-bold">${total.toFixed(2)}</h3>
              </li>
            </ul>
            <button
              type="button"
              className="py-4 px-4 rounded-full bg-primary w-full font-medium hover:tracking-widest transition-all text-dark dark:text-white"
            >
              Confirmar orden
            </button>
          </section>
        </div>
      </aside>
      <button
        type="button"
        onClick={() => setShowCart(true)}
        className="xl:hidden fixed bottom-0 right-0 bg-primary w-14 h-14 text-dark dark:text-white text-xl rounded-tl-xl z-30 flex items-center justify-center"
      >
        <FaShoppingCart />
      </button>
      <div
        role="button"
        onClick={() => setShowCart(false)}
        className={cn(
          "fixed bg-dark/40 z-40 xl:hidden transition-all",
          showCart
            ? "w-full h-full right-0 top-0"
            : "w-0 h-0 left-0 bottom-0 delay-300"
        )}
      />
    </>
  );
};

export default Cart;
