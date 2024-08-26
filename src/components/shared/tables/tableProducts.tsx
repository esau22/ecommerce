import ButtonIcon from "@/components/ui/button-icons";
import { MdUpdate, MdOutlineSearch } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import Breadcrumb from "@/components/shared/Breadcrumb/breadcrumb";

const packageData = [
  {
    serie: 1,
    id: 3,
    codigo: "00001",
    nombre: "fideo",
    precio_venta: 0.0,
  },
  {
    serie: 2,
    id: 4,
    codigo: "00002",
    nombre: "arroz",
    precio_venta: 10.0,
  },
  {
    serie: 3,
    id: 5,
    codigo: "00003",
    nombre: "azucar",
    precio_venta: 4.0,
  },
];

const TableProducts = () => {
  return (
    <div className="rounded-[10px] border border-stroke bg-white p-4 shadow-1 dark:border-[#374151] dark:bg-[#122031] dark:shadow-card sm:p-7">
      <div className="flex items-center justify-between mb-4">
        <Breadcrumb pageName="Listado de Productos" />
        <ButtonIcon icon={FaPlus} label="Nuevo" className="w-auto sm:w-fit" />
      </div>
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-[#F7F9FC] text-left dark:bg-[#1F2A37] uppercase">
              <th className="min-w-[50px] px-4 py-4 font-medium text-black dark:text-white xl:pl-7.5 text-center">
                #
              </th>
              <th className="min-w-[50px] px-4 py-4 font-medium text-black dark:text-white xl:pl-7.5 text-center">
                ID
              </th>
              <th className="min-w-[100px] px-4 py-4 font-medium text-black dark:text-white xl:pl-7.5 text-center">
                Codigo
              </th>
              <th className="min-w-[100px] px-4 py-4 font-medium text-black dark:text-white xl:pl-7.5 text-center">
                Nombre
              </th>
              <th className="min-w-[50px] px-4 py-4 font-medium text-black dark:text-white xl:pl-7.5 text-center">
                Historial
              </th>
              <th className="min-w-[50px] px-4 py-4 font-medium text-black dark:text-white xl:pl-7.5 text-center">
                Stock
              </th>
              <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white xl:pl-7.5 text-center">
                P.Unitario(Venta)
              </th>
            </tr>
          </thead>
          <tbody>
            {packageData.map((packageItem, index) => (
              <tr key={index}>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-[#374151] xl:pl-7.5 text-center ${
                    index === packageData.length - 1 ? "border-b-0" : "border-b"
                  }`}
                >
                  <h5 className="text-black dark:text-white">
                    {packageItem.serie}
                  </h5>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-[#374151] xl:pl-7.5 text-center ${
                    index === packageData.length - 1 ? "border-b-0" : "border-b"
                  }`}
                >
                  <p className="text-black dark:text-white">{packageItem.id}</p>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-[#374151] xl:pl-7.5 text-center ${
                    index === packageData.length - 1 ? "border-b-0" : "border-b"
                  }`}
                >
                  <p className="text-black dark:text-white">
                    {packageItem.codigo}
                  </p>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-[#374151] xl:pl-7.5 text-center ${
                    index === packageData.length - 1 ? "border-b-0" : "border-b"
                  }`}
                >
                  <p className="text-black dark:text-white">
                    {packageItem.nombre}
                  </p>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-[#374151] xl:pl-7.5 text-center ${
                    index === packageData.length - 1 ? "border-b-0" : "border-b"
                  }`}
                >
                  <div className="flex items-center justify-center">
                    <ButtonIcon
                      icon={MdUpdate}
                      className="bg-blue-500 dark:bg-blue-800 hover:border-transparent"
                    />
                  </div>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-[#374151] xl:pl-7.5 text-center ${
                    index === packageData.length - 1 ? "border-b-0" : "border-b"
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
                  className={`border-[#eee] px-4 py-4 dark:border-[#374151] xl:pl-7.5 text-center ${
                    index === packageData.length - 1 ? "border-b-0" : "border-b"
                  }`}
                >
                  <p className="text-black dark:text-white">
                    ${packageItem.precio_venta}
                  </p>
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
