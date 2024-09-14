export type Menu = {
  label: string;
  icon: string;
  href: string;
};

export type Category = {
  id: number;
  name: string;
  description: string;
  state: string;
};

export type Customer = {
  id: number;
  dni: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  state: string;
};

export type Product = {
  id: number;
  name: string;
  image: string;
  description: string;
  purchasePrice: number;
  salesPrice: number;
  stockQuantity: number;
  supplierId: number;
  categoryId: number;
};

export type Supplier = {
  id: number;
  ruc: number;
  name: string;
  contactName: string;
  phone: string;
  email: string;
  address: string;
  state: string;
};

export type ProductCart = {
  name: string;
  image: string;
  salesPrice: number;
  quantity: number;
};
export type User = {
  id: number;
  dni: number;
  username: string;
  image: Buffer;
  password: string;
  email: string;
  role: string;
  state: string;
};
