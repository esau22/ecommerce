const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const fetchCategory = async (id?: number) => {
  const url = id
    ? `${API_URL}/api/categories/${id}` // Si se pasa un id, busca por categoría específica
    : `${API_URL}/api/categories`; // Si no, obtiene todas las categorías
  const response = await fetch(url);
  return response.json();
};

export const fetchCustomer = async () => {
  const response = await fetch(`${API_URL}/api/customer`);
  return response.json();
};

export const fetchProduct = async (id?: number) => {
  const url = id
    ? `${API_URL}/api/products/${id}` // Si se pasa un id, busca por categoría específica
    : `${API_URL}/api/products`; // Si no, obtiene todas las categorías
  const response = await fetch(url);
  return response.json();
};

export const fetchReport = async () => {
  const response = await fetch(`${API_URL}/api/report`);
  return response.json();
};
export const fetchSupplier = async () => {
  const response = await fetch(`${API_URL}/api/supplier`);
  return response.json();
};

export const fetchUser = async () => {
  const response = await fetch(`${API_URL}/api/user`);
  return response.json();
};
