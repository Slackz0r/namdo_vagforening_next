// Make the first letter of a string capitalized
export const firstLetterCapitel = (text: string) => {
  const newText = text.substring(0, 1).toUpperCase() + text.substring(1).toLowerCase();

  return newText;
};
