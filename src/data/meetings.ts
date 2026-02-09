// Base url
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// Get all meetings
export const getMeetings = async () => {
  const response = await fetch(`${BASE_URL}/meetings`, { cache: "no-store" });
  if (!response.ok) {
    throw new Error("Unable to fetch meetings");
  }

  const data = await response.json();
  return data;
};

//Get single meeting
export const getMeeting = async (id: number) => {
  const response = await fetch(`${BASE_URL}/meetings/${id}`);
  if (!response.ok) {
    throw new Error("Unable to fetch meeting");
  }

  const data = await response.json();
  return data;
};
