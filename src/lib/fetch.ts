export const fetchCategory = async (id?: number) => {
  const url = id
    ? `http://localhost:3000/api/category/${id}` // Si se pasa un id, busca por categoría específica
    : "http://localhost:3000/api/category"; // Si no, obtiene todas las categorías
  const response = await fetch(url);
  return response.json();
};

export const fetchCustomer = async () => {
  const response = await fetch("http://localhost:3000/api/customer");
  return response.json();
};

export const fetchProduct = async (id?: number) => {
  const url = id
    ? `http://localhost:3000/api/products/${id}` // Si se pasa un id, busca por categoría específica
    : "http://localhost:3000/api/products"; // Si no, obtiene todas las categorías
  const response = await fetch(url);
  return response.json();
};

export const fetchReport = async () => {
  const response = await fetch("http://localhost:3000/api/report");
  return response.json();
};
export const fetchSupplier = async () => {
  const response = await fetch("http://localhost:3000/api/supplier");
  return response.json();
};

export const fetchUser = async () => {
  const response = await fetch("http://localhost:3000/api/user");
  return response.json();
};
