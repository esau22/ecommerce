export const fetchCategory = async (id?: number) => {
  const url = id
    ? `/api/categories/${id}` // Ruta relativa para obtener una categoría específica
    : `/api/categories`; // Ruta relativa para obtener todas las categorías
  const response = await fetch(url);
  return response.json();
};

export const fetchCustomer = async () => {
  const response = await fetch(`/api/customer`); // Ruta relativa
  return response.json();
};

export const fetchProduct = async (id?: number) => {
  const url = id
    ? `/api/products/${id}` // Ruta relativa para obtener un producto específico
    : `/api/products`; // Ruta relativa para obtener todos los productos
  const response = await fetch(url);
  return response.json();
};

export const fetchReport = async () => {
  const response = await fetch(`/api/report`); // Ruta relativa
  return response.json();
};

export const fetchSupplier = async () => {
  const response = await fetch(`/api/supplier`); // Ruta relativa
  return response.json();
};

export const fetchUser = async () => {
  const response = await fetch(`/api/user`); // Ruta relativa
  return response.json();
};
