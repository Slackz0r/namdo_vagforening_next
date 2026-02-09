// Base url
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// Get navigation menu
export const getNavigation = async () => {
  const response = await fetch(`${BASE_URL}/navigation`, { cache: "no-store" });
  if (!response.ok) {
    throw new Error("Unable to fetch links");
  }

  const data = await response.json();
  return data;
};
