import ButtonIcon from "@/components/ui/button-icons";
import { MdDeleteForever } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import Breadcrumb from "@/components/shared/Breadcrumb/breadcrumb";
import { FaRegEdit } from "react-icons/fa";
import SelectGroup from "@/components/ui/select-group";
import { fetchCustomer } from "@/lib/fetch";
import { Customer } from "@/types/types";

const TableClients = async () => {
  let customers: Customer[];
  try {
    customers = await fetchCustomer();
  } catch (error) {
    console.error("Error fetching data:", error);
    // Puedes manejar el error de diferentes maneras, como mostrar un mensaje al usuario
    // o usar valores predeterminados. Aquí, por ejemplo, podrías mostrar un mensaje simple:
    return <div>Error loading data. Please try again later.</div>;
  }

  return (
    <div className="rounded-[10px] border border-stroke bg-white p-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-7">
      <div className="flex items-center justify-between mb-4">
        <Breadcrumb pageName="Listado de Clientes" />
        <ButtonIcon
          icon={FaPlus}
          label="Nuevo Cliente"
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
                DNI
              </th>
              <th className="min-w-[100px] px-4 py-4 font-medium text-dark dark:text-white xl:pl-7 text-center">
                Nombre Completo
              </th>
              <th className="min-w-[50px] px-4 py-4 font-medium text-dark dark:text-white xl:pl-7 text-center">
                Telefono
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
            {customers.map((customer, id) => (
              <tr key={customer.id}>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7 text-center ${
                    id === customers.length - 1 ? "border-b-0" : "border-b"
                  }`}
                >
                  <h5 className="text-dark dark:text-white">{customer.id}</h5>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7 text-center ${
                    id === customers.length - 1 ? "border-b-0" : "border-b"
                  }`}
                >
                  <p className="text-dark dark:text-white">{customer.dni}</p>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7 text-center ${
                    id === customers.length - 1 ? "border-b-0" : "border-b"
                  }`}
                >
                  <p className="text-dark dark:text-white">
                    {customer.lastName} {customer.firstName}
                  </p>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7 text-center ${
                    id === customers.length - 1 ? "border-b-0" : "border-b"
                  }`}
                >
                  <p className="text-dark dark:text-white">{customer.phone}</p>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7 text-center ${
                    id === customers.length - 1 ? "border-b-0" : "border-b"
                  }`}
                >
                  <div className="flex items-center justify-center">
                    <SelectGroup
                      className="rounded-md"
                      value={customer.state}
                      options={[
                        { label: "activo", value: "activo" },
                        { label: "desactivo", value: "desactivo" },
                      ]}
                    />
                  </div>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7 text-center ${
                    id === customers.length - 1 ? "border-b-0" : "border-b"
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

export default TableClients;
