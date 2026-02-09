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
  const navLinks: INavigationLinks[] = await getNavigation();

  // Header component
  return (
    <>
      <header className="site-header">
        <div className="header-content">
          <Link href="/">
            <Image src="/svg/MapCompass.svg" alt="Logo svg" height={50} width={50}></Image>
          </Link>
          <NavMenu links={navLinks} />
        </div>
      </header>
    </>
  );
}
