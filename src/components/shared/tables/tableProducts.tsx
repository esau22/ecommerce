import ButtonIcon from "@/components/ui/button-icons";
import { MdDeleteForever, MdOutlineSearch } from "react-icons/md";
import { FaPlus, FaRegEdit, FaEye } from "react-icons/fa";
import Breadcrumb from "@/components/shared/Breadcrumb/breadcrumb";
import SearchForm from "../header/searchForm";
import { fetchProduct } from "@/lib/fetch";
import { Product } from "@/types/types";

const TableProducts = async () => {
  let products: Product[];
  try {
    products = await fetchProduct();
  } catch (error) {
    console.error("Error fetching data:", error);
    // Puedes manejar el error de diferentes maneras, como mostrar un mensaje al usuario
    // o usar valores predeterminados. Aquí, por ejemplo, podrías mostrar un mensaje simple:
    return <div>Error loading data. Please try again later.</div>;
  }
  return (
    <div className="rounded-[10px] border border-stroke bg-white p-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-7">
      <div className="flex items-center justify-between mb-4">
        <Breadcrumb pageName="Listado de Productos" />
        <SearchForm />
        <ButtonIcon icon={FaPlus} label="Nuevo" className="w-auto sm:w-fit" />
      </div>
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-[#F7F9FC] text-left dark:bg-dark-2">
              <th className="min-w-[50px] px-4 py-4 font-medium text-dark dark:text-white xl:pl-7.5 text-center">
                #
              </th>
              <th className="min-w-[100px] px-4 py-4 font-medium text-dark dark:text-white xl:pl-7.5 text-center">
                Nombre
              </th>
              <th className="min-w-[50px] px-4 py-4 font-medium text-dark dark:text-white xl:pl-7.5 text-center">
                Descripcion
              </th>
              <th className="min-w-[50px] px-4 py-4 font-medium text-dark dark:text-white xl:pl-7.5 text-center">
                Stock
              </th>
              <th className="min-w-[120px] px-4 py-4 font-medium text-dark dark:text-white xl:pl-7.5 text-center">
                P.Unitario(Venta)
              </th>
              <th className="px-4 py-4 text-center font-medium text-dark dark:text-white xl:pr-7.5">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, id) => (
              <tr key={product.id}>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7 text-center ${
                    id === products.length - 1 ? "border-b-0" : "border-b"
                  }`}
                >
                  <h5 className="text-dark dark:text-white">{product.id}</h5>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7 text-center ${
                    id === products.length - 1 ? "border-b-0" : "border-b"
                  }`}
                >
                  <p className="text-dark dark:text-white">{product.name}</p>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7 text-center ${
                    id === products.length - 1 ? "border-b-0" : "border-b"
                  }`}
                >
                  <p className="text-dark dark:text-white">
                    {product.description}
                  </p>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7 text-center ${
                    id === products.length - 1 ? "border-b-0" : "border-b"
                  }`}
                >
                  <div className="flex items-center justify-center">
                    <ButtonIcon
                      icon={MdOutlineSearch}
                      className="bg-blue-500 dark:bg-blue-800 hover:border-transparent"
                    />
                  </div>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7 text-center ${
                    id === products.length - 1 ? "border-b-0" : "border-b"
                  }`}
                >
                  <p className="text-dark dark:text-white">
                    $ {product.salesPrice}
                  </p>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7 text-center ${
                    id === products.length - 1 ? "border-b-0" : "border-b"
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <ButtonIcon
                      icon={FaRegEdit}
                      className="bg-blue-500 dark:bg-blue-800 hover:border-transparent"
                    />
                    <ButtonIcon
                      icon={MdDeleteForever}
                      className="bg-red-500 dark:bg-red-800 hover:border-transparent"
                    />
                    <ButtonIcon
                      icon={FaEye}
                      className="bg-green-800 dark:bg-green-500 hover:border-transparent"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableProducts;
