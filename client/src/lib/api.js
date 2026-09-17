const API_URL = import.meta.env.VITE_API_URL;

export const getMenu = async () => {
  const response = await fetch(`${API_URL}api/menu`);

  if (!response.ok) {
    throw new Error("Failed to fetch menu");
  }

  return response.json();
};
