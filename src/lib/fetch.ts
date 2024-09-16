//Determina el BASE_URL dependiendo del entorno
const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://ecommerce-53veukg0u-esau22s-projects.vercel.app/api" // URL de tu aplicación desplegada
    : "http://localhost:3000/api"; // URL local para desarrollo

const handleFetch = async (url: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

export const fetchCategory = async (id?: number) => {
  const url = id ? `${BASE_URL}/categories/${id}` : `${BASE_URL}/categories`;
  return handleFetch(url);
};

export const fetchCustomer = async () => {
  return handleFetch(`${BASE_URL}/customer`);
};

export const fetchProduct = async (id?: number) => {
  const url = id ? `${BASE_URL}/products/${id}` : `${BASE_URL}/products`;
  return handleFetch(url);
};

export const fetchReport = async () => {
  return handleFetch(`${BASE_URL}/report`);
};

export const fetchSupplier = async () => {
  return handleFetch(`${BASE_URL}/supplier`);
};

export const fetchUser = async () => {
  return handleFetch(`${BASE_URL}/user`);
};
