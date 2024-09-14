import { Product } from "@/types/types";
import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa";

interface CardQuantityProductProps {
  product: Product;
}

const CardQuantityProduct = ({ product }: CardQuantityProductProps) => {
  const { name, image, salesPrice, stockQuantity } = product;
  return (
    <>
      <div className="flex items-center justify-between gap-x-5">
        <div className="flex items-center gap-x-4">
          <Image
            src={image}
            alt="Image"
            width={100}
            height={100}
            className="w-14 h-14 object-contain"
          />
          <h5 className="text-lg font-bold line-clamp-1 text-dark dark:text-white">
            {name}
          </h5>
        </div>
        <span className="bg-background dark:bg-yellow-400 w-10 h-10 flex items-center justify-center rounded-full font-medium text-sm text-dark dark:text-white">
          x{stockQuantity}
        </span>
      </div>
      <div className="flex items-center justify-between gap-x-5 mt-3">
        <div className="flex items-center gap-x-2">
          <button
            type="button"
            className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-dark dark:text-white"
          >
            <FaMinus />
          </button>
          <button
            type="button"
            className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-dark dark:text-white"
          >
            <FaPlus />
          </button>
        </div>
        <h3 className="text-lg font-bold text-dark dark:text-white">
          ${(stockQuantity * salesPrice).toFixed(2)}
        </h3>
      </div>
    </>
  );
};

export default CardQuantityProduct;
