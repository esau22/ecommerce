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
  const url = id ? `api/categories/${id}` : "api/categories";
  return handleFetch(url);
};

export const fetchCustomer = async () => {
  return handleFetch("api/customer");
};

export const fetchProduct = async (id?: number) => {
  const url = id ? `api/products/${id}` : "api/products";
  return handleFetch(url);
};

export const fetchReport = async () => {
  return handleFetch("api/report");
};

export const fetchSupplier = async () => {
  return handleFetch("api/supplier");
};

export const fetchUser = async () => {
  return handleFetch("api/user");
};
