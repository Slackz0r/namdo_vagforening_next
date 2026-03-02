// Base url
const BASE_URL = process.env.API_BASE_URL;

// Get all gallery items
export const getGallery = async () => {
  const response = await fetch(`${BASE_URL}/gallery`, { cache: "no-cache" });
  if (!response.ok) {
    throw new Error("Unable to fetch gallery");
  }

  const data = await response.json();
  return data;
};
