import Breadcrumb from "@/components/shared/Breadcrumb/breadcrumb";
import ButtonIcon from "@/components/ui/button-icons";
import Input from "@/components/ui/input";
import SelectGroup from "@/components/ui/select-group";
import { FaPlus } from "react-icons/fa";

const FormShopping = () => {
  return (
    <div className="rounded-[10px] border border-stroke bg-white p-4 shadow-1 dark:border-[#374151] dark:bg-[#122031] dark:shadow-card sm:p-7">
      <div className="flex items-center justify-between mb-4">
        <Breadcrumb pageName="Nueva Compra" />
        <ButtonIcon icon={FaPlus} label="Agregar Producto" />
      </div>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          <SelectGroup
            label="Tipo de Comprovante"
            options={[{ label: "Activo" }, { label: "No Activo" }]}
          />
          <Input label="Serie" type="number" />
          <Input label="Numero" type="number" />
          <Input label="Fecha Emision" type="date" />
          <Input label="Fecha Vencimiento" type="date" />
          <SelectGroup
            label="Tipo de Comprovante"
            options={[{ label: "Activo" }, { label: "No Activo" }]}
          />
          <SelectGroup
            label="Moneda"
            options={[{ label: "Activo" }, { label: "No Activo" }]}
          />
          <SelectGroup
            label="Tipo de Cambio"
            options={[{ label: "Activo" }, { label: "No Activo" }]}
          />
          <SelectGroup
            label="Orden de Compra"
            options={[{ label: "Activo" }, { label: "No Activo" }]}
          />
        </div>
      </form>
      <div className="max-w-full overflow-x-auto my-4">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-[#F7F9FC] text-left dark:bg-[#1F2A37]">
              <th className="min-w-[50px] px-4 py-4 font-medium text-black dark:text-white xl:pl-7.5 text-center">
                #
              </th>
              <th className="min-w-[200px] px-4 py-4 font-medium text-black dark:text-white xl:pl-7.5 text-center">
                Descripcion
              </th>
              <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white xl:pl-7.5 text-center">
                Almacen
              </th>
              <th className="min-w-[80px] px-4 py-4 font-medium text-black dark:text-white xl:pl-7.5 text-center">
                Lote
              </th>
              <th className="min-w-[50px] px-4 py-4 font-medium text-black dark:text-white xl:pl-7.5 text-center">
                Unidad
              </th>
              <th className="min-w-[50px] px-4 py-4 font-medium text-black dark:text-white xl:pl-7.5 text-center">
                Cantidad
              </th>
              <th className="min-w-[50px] px-4 py-4 font-medium text-black dark:text-white xl:pl-7.5 text-center">
                Valor Unitario
              </th>
              <th className="min-w-[50px] px-4 py-4 font-medium text-black dark:text-white xl:pl-7.5 text-center">
                Precio Unitario
              </th>
              <th className="min-w-[50px] px-4 py-4 font-medium text-black dark:text-white xl:pl-7.5 text-center">
                Total
              </th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default FormShopping;
