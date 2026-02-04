// Base url
const BASE_URL = "http://localhost:3001";

export const getNavigation = async () => {
  const response = await fetch(`${BASE_URL}/navigaion`);

  if (!response.ok) {
    throw new Error("Unable to fetch characters");
  }

  const data = await response.json();

  return data;
};
