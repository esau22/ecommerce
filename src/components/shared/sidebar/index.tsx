import SidebarItem from "@/components/shared/sidebar/sidebar";
import ClickOutside from "@/components/shared/hooks/clickOutside";
import useLocalStorage from "@/components/shared/hooks/useLocalStorage";
import Link from "next/link";
import Image from "next/image";
import {
  FaHouseUser,
  FaShoppingBag,
  FaUser,
  FaUsers,
  FaWpforms,
  FaTruck,
  FaArrowLeft,
  FaShopify,
} from "react-icons/fa";
import { RiApps2Fill, RiLogoutBoxLine } from "react-icons/ri";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
  salesId: String; // Nueva propiedad para el id dinámico
}

const Sidebar = ({ sidebarOpen, setSidebarOpen, salesId }: SidebarProps) => {
  const [pageName, setPageName] = useLocalStorage("selectedMenu", "dashboard");

  const salesRoute = salesId
    ? `/dashboard/sales/${salesId}`
    : "/dashboard/sales/todas";

  const menuGroups = [
    {
      menuItems: [
        {
          icon: <FaHouseUser size={20} />,
          label: "Dashboard",
          route: "#",
          children: [{ label: "eCommerce", route: "/dashboard" }],
        },
        {
          icon: <FaShopify size={20} />,
          label: "Ventas",
          route: "#",
          children: [
            {
              label: "Realizar Ventas",
              route: salesRoute,
            },
            {
              label: "Control de Caja",
              route: "/dashboard/sales/cash-control",
            },
          ],
        },
        {
          icon: <FaShoppingBag size={20} />,
          label: "Compras",
          route: "/dashboard/shopping",
        },
        {
          icon: <FaUsers size={20} />,
          label: "Clientes",
          route: "/dashboard/clients",
        },
        {
          icon: <FaWpforms size={20} />,
          label: "Productos",
          route: "#",
          children: [
            { label: "Productos", route: "/dashboard/products" },
            { label: "Categorias", route: "/dashboard/products/categories" },
          ],
        },
        {
          icon: <FaUser size={20} />,
          label: "Usuarios",
          route: "#",
          children: [
            { label: "Perfil", route: "/dashboard/profile" },
            { label: "Usuarios", route: "/dashboard/profile/user" },
          ],
        },
        {
          icon: <FaTruck size={20} />,
          label: "Proveedores",
          route: "/dashboard/supplier",
        },
        {
          icon: <RiApps2Fill size={20} />,
          label: "UI Elements",
          route: "#",
          children: [
            { label: "Alerts", route: "/ui-elements/alerts" },
            { label: "Buttons", route: "/ui-elements/buttons" },
          ],
        },
        {
          icon: <RiLogoutBoxLine size={20} />,
          label: "Authentication",
          route: "#",
          children: [{ label: "Sign In", route: "/auth/signin" }],
        },
      ],
    },
  ];

  return (
    <ClickOutside onClick={() => setSidebarOpen(false)}>
      <aside
        className={`absolute left-0 top-0 z-50 flex h-screen w-[250px] flex-col overflow-y-hidden border-r border-gray-200 bg-white dark:border-stroke-dark dark:bg-gray-dark lg:static lg:translate-x-0 ${
          sidebarOpen
            ? "translate-x-0 duration-300 ease-linear"
            : "-translate-x-full"
        }`}
      >
        {/* <!-- SIDEBAR HEADER --> */}
        <div className="flex items-center justify-between gap-2 px-6 py-5 lg:py-6 xl:py-10">
          <Link href="/">
            <Image
              width={176}
              height={32}
              src={"/images/logo/logo-dark.svg"}
              alt="Logo"
              priority
              className="dark:hidden"
            />
            <Image
              width={176}
              height={32}
              src={"/images/logo/logo.svg"}
              alt="Logo"
              priority
              className="hidden dark:block"
            />
          </Link>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="block lg:hidden ml-5"
          >
            <FaArrowLeft size={20} />
          </button>
        </div>
        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          <nav className="mt-1 px-4 lg:px-6">
            {menuGroups.map((group, groupIndex) => (
              <div key={groupIndex}>
                <ul className="mb-6 flex flex-col gap-2">
                  {group.menuItems.map((menuItem, menuIndex) => (
                    <SidebarItem
                      key={menuIndex}
                      item={menuItem}
                      pageName={pageName}
                      setPageName={setPageName}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </aside>
    </ClickOutside>
  );
};

export default Sidebar;
