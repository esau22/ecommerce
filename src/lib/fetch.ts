const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export const fetchCategory = async (id?: number) => {
  const url = id
    ? `${API_URL}/api/categories/${id}` // URL completa en producción
    : `${API_URL}/api/categories`; // URL completa en producción
  const response = await fetch(url);
  return response.json();
};

// Obtener todos los clientes
export const fetchCustomer = async () => {
  const response = await fetch(`${API_URL}/api/customer`); // Ruta para clientes
  return response.json();
};

// Obtener productos (todos o por ID)
export const fetchProduct = async (id?: number) => {
  const url = id
    ? `${API_URL}/api/products/${id}` // Obtener un producto específico si se pasa ID
    : `${API_URL}/api/products`; // Obtener todos los productos si no se pasa ID
  const response = await fetch(url);
  return response.json();
};

// Obtener reportes
export const fetchReport = async () => {
  const response = await fetch(`${API_URL}/api/report`); // Ruta para reportes
  return response.json();
};

// Obtener proveedores
export const fetchSupplier = async () => {
  const response = await fetch(`${API_URL}/api/supplier`); // Ruta para proveedores
  return response.json();
};

// Obtener usuarios
export const fetchUser = async () => {
  const response = await fetch(`${API_URL}/api/user`); // Ruta para usuarios
  return response.json();
};
