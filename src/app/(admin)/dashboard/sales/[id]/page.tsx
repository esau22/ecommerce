import FormSales from "@/components/shared/form/form-sales";
import { fetchCategory, fetchProduct } from "@/lib/fetch";

const MakeSales = async () => {
  let category: [];
  let products: [];

  try {
    category = await fetchCategory();
    products = await fetchProduct();
  } catch (error) {
    console.error("Error fetching data:", error);
    // Puedes manejar el error de diferentes maneras, como mostrar un mensaje al usuario
    // o usar valores predeterminados. Aquí, por ejemplo, podrías mostrar un mensaje simple:
    return <div>Error loading data. Please try again later.</div>;
  }

  return (
    <div className="flex flex-col gap-10">
      <FormSales category={category} products={products} />
    </div>
  );
};

export default MakeSales;
