import ButtonIcon from "@/components/ui/button-icons";
import { MdDeleteForever } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import Breadcrumb from "@/components/shared/Breadcrumb/breadcrumb";
import { FaRegEdit } from "react-icons/fa";
import SelectGroup from "@/components/ui/select-group";
import { Category } from "@/types/types";
import { fetchCategory } from "@/lib/fetch";

const TableCategories = async () => {
  const categories: Category[] = await fetchCategory();
  return (
    <div className="rounded-[10px] border border-stroke bg-white p-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-7">
      <div className="flex items-center justify-between mb-4">
        <Breadcrumb pageName="Listado de Categorias" />
        <ButtonIcon
          icon={FaPlus}
          label="Nueva Categoria"
          className="w-auto sm:w-fit"
        />
      </div>
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-[#F7F9FC] text-left dark:bg-dark-2">
              <th className="min-w-[50px] px-4 py-4 font-medium text-dark dark:text-white xl:pl-7 text-center">
                #
              </th>
              <th className="min-w-[50px] px-4 py-4 font-medium text-dark dark:text-white xl:pl-7 text-center">
                Nombre
              </th>
              <th className="min-w-[100px] px-4 py-4 font-medium text-dark dark:text-white xl:pl-7 text-center">
                Descripcion
              </th>
              <th className="min-w-[50px] px-4 py-4 font-medium text-dark dark:text-white xl:pl-7 text-center">
                Estado
              </th>
              <th className="px-4 py-4 text-center font-medium text-dark dark:text-white xl:pr-7">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat, id) => (
              <tr key={id}>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7 text-center ${
                    id === categories.length - 1 ? "border-b-0" : "border-b"
                  }`}
                >
                  <h5 className="text-dark dark:text-white">{cat.id}</h5>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7 text-center ${
                    id === categories.length - 1 ? "border-b-0" : "border-b"
                  }`}
                >
                  <p className="text-dark dark:text-white">{cat.name}</p>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7 text-center ${
                    id === categories.length - 1 ? "border-b-0" : "border-b"
                  }`}
                >
                  <p className="text-dark dark:text-white">{cat.description}</p>
                </td>

                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7 text-center ${
                    id === categories.length - 1 ? "border-b-0" : "border-b"
                  }`}
                >
                  <div className="flex items-center justify-center">
                    <SelectGroup
                      className="rounded-md"
                      value={cat.state}
                      options={[
                        { label: "activo", value: cat.state },
                        { label: "desactivo", value: cat.state },
                      ]}
                    />
                  </div>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7 text-center ${
                    id === categories.length - 1 ? "border-b-0" : "border-b"
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

export default TableCategories;
