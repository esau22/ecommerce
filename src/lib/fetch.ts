const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchCategory = async (id?: number) => {
  try {
    const url = id
      ? `${API_URL}/api/categories/${id}` // Si se pasa un id, busca por categoría específica
      : `${API_URL}/api/categories`; // Si no, obtiene todas las categorías

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error fetching categories: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchCustomer = async () => {
  try {
    const response = await fetch(`${API_URL}/api/customer`);

    if (!response.ok) {
      throw new Error(`Error fetching customers: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchProduct = async (id?: number) => {
  try {
    const url = id
      ? `${API_URL}/api/products/${id}` // Si se pasa un id, busca por producto específico
      : `${API_URL}/api/products`; // Si no, obtiene todos los productos

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error fetching products: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchReport = async () => {
  try {
    const response = await fetch(`${API_URL}/api/report`);

    if (!response.ok) {
      throw new Error(`Error fetching report: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchSupplier = async () => {
  try {
    const response = await fetch(`${API_URL}/api/supplier`);

    if (!response.ok) {
      throw new Error(`Error fetching suppliers: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchUser = async () => {
  try {
    const response = await fetch(`${API_URL}/api/user`);

    if (!response.ok) {
      throw new Error(`Error fetching users: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
