import FormSales from "@/components/shared/form/form-sales";
import { fetchCategory, fetchProduct } from "@/lib/fetch";
import { Category, Product } from "@/types/types";

const MakeSales = async () => {
  const category: Category[] = await fetchCategory();
  const products: Product[] = await fetchProduct();
  return (
    <div className="flex flex-col gap-10">
      <FormSales category={category} products={products} />
    </div>
  );
};

export default MakeSales;
