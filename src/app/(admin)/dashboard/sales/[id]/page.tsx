import FormSales from "@/components/shared/form/form-sales";
import { fetchCategory, fetchProduct } from "@/lib/fetch";

const MakeSales = async () => {
  const category = await fetchCategory();
  const products = await fetchProduct();
  return (
    <div className="flex flex-col gap-10">
      <FormSales category={category} products={products} />
    </div>
  );
};

export default MakeSales;
