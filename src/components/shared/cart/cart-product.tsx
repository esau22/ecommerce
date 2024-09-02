import Image from "next/image";
import { Product } from "@/types/types";
import { cn } from "@/lib/utils";
import { FaPlus } from "react-icons/fa";

interface CardProductProps {
  product: Product;
}

const CardProduct = ({ product }: CardProductProps) => {
  const { name, image, discount, stock, price, description } = product;
  return (
    <div className="bg-background-foreground rounded-4xl p-6 space-y-5 border-2">
      <div className="flex items-center gap-x-6">
        <Image
          src={image}
          alt="Image"
          width={100}
          height={100}
          className="w-24 h-24 object-contain rounded-2xl"
        />
        <div className="space-y-2">
          <div className="flex items-center gap-x-2">
            {discount > 0 && (
              <span className="py-1.5 px-2 bg-primary/10 text-primary rounded-full text-sm font-bold">
                Descuento {discount}%
              </span>
            )}
            {stock <= 0 && (
              <span className="py-1.5 px-2 bg-red-500/10 text-red-600 rounded-full text-sm font-bold">
                Sin existencias
              </span>
            )}
          </div>
          <h3 className="text-3xl font-bold line-clamp-1">{name}</h3>
        </div>
      </div>
      <p className="text-gray-500 dark:text-gray-300 line-clamp-2">
        {description}
      </p>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-dark dark:text-white">
          ${price}
        </h1>
        <button
          type="button"
          disabled={stock <= 0 ? true : false}
          className={cn(
            "w-14 h-14 flex items-center justify-center rounded-full text-xl bg-primary border-4 border-background box-content hover:rotate-90 transition-transform",
            stock <= 0 && "hover:rotate-0 bg-background text-gray-500"
          )}
        >
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default CardProduct;
