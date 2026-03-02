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

  const navigation = [
    {
      id: 1,
      category: "Grundläggande information",
      subCategory: [
        { href: "/statutes", title: "Stadgar" },
        { href: "/board", title: "Styrelse" },
        { href: "/membership", title: "Medlemskap" },
        { href: "/properties", title: "Fastighetsbeteckningar" },
        { href: "/contact", title: "Kontakta oss" },
      ],
    },
    {
      id: 2,
      category: "Verksamhetsinformation",
      subCategory: [
        { href: "/about", title: "Verksamhetsinformation" },
        { href: "/news", title: "Händelser och projekt" },
        { href: "/calendar", title: "Kalender" },
        { href: "/reports", title: "Resultat och rapporter" },
      ],
    },
    {
      id: 3,
      category: "Gemenskap",
      subCategory: [
        { href: "/gallery", title: "Bilder och video" },
        { href: "/map", title: "Karta över området" },
      ],
    },
    {
      id: 4,
      category: "Övrigt",
      subCategory: [
        { href: "/gdpr", title: "GDPR-information" },
        { href: "/security", title: "Säkerhetsfunktioner" },
        { href: "/links", title: "Länkar" },
      ],
    },
  ];
  return navigation;
};
