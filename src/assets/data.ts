import { Category, Menu, Product, ProductCart } from "@/types/types";

export const menu: Menu[] = [
  {
    label: "Inicio",
    icon: "fi fi-rr-home",
    href: "/",
  },

  {
    label: "Ordenes",
    icon: "fi fi-rr-ballot-check",
    href: "/orders",
  },

  {
    label: "Facturas",
    icon: "fi fi-rr-file-invoice-dollar",
    href: "/facturas",
  },
];

export const productsCart: ProductCart[] = [
  {
    name: "Bacon burger",
    image:
      "https://img.freepik.com/foto-gratis/foto-deliciosa-hamburguesa-aislado-sobre-fondo-blanco_125540-3378.jpg?t=st=1714602475~exp=1714606075~hmac=8b586f916b1486958326fcd5abba01346b3b0da6bd3a9dc49304abfc689f8274&w=2000",
    salesPrice: 99.99,
    quantity: 2,
  },
  {
    name: "Pollito",
    image:
      "https://img.freepik.com/foto-gratis/pollo-frito-aislado_74190-3392.jpg?t=st=1714604945~exp=1714608545~hmac=30fe4c78fac745501a21a3928864cb199df3f8bca07ce3f9a56c616111fa3aeb&w=2000",
    salesPrice: 49.99,
    quantity: 1,
  },
  {
    name: "Refresco 600ml",
    image:
      "https://img.freepik.com/fotos-premium/botella-cola-sobre-fondo-blanco_318269-1271.jpg?w=1480",
    salesPrice: 29.99,
    quantity: 2,
  },
];
