// Base url
const BASE_URL = process.env.API_BASE_URL;

// Get navigation menu
export const getNavigation = async () => {
  const response = await fetch(`${BASE_URL}/navigation`, { cache: "no-store" });
  if (!BASE_URL) {
    throw new Error("NEXT_PUBLIC_API_BASE_URL is not set");
  }

  if (!response.ok) {
    throw new Error(`Unable to fetch links: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();

  return data;
};
