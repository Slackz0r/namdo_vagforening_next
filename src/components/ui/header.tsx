// Data fetch
import { getNavigation } from "@/data/navigation";
// Interfaces
import type { INavigationLinks } from "@/models/INavigationLinks";
// Components
import Image from "next/image";
import Link from "next/link";
import NavMenu from "../navigation/navigation-menu";

export default async function Header() {
  // Fetch data for navigation menu
  // const navLinks: INavigationLinks[] = await getNavigation();

  const navigation: INavigationLinks[] = [
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

  // Header component
  return (
    <>
      <header className="site-header">
        <div className="header-content">
          <Link href="/">
            <Image src="/svg/MapCompass.svg" alt="Logo svg" height={50} width={50}></Image>
          </Link>
          <NavMenu links={navigation} />
        </div>
      </header>
    </>
  );
}
