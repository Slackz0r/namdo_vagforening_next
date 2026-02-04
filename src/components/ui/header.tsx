import { getNavigation } from "@/data/fetchFunctions";
import NavMenu from "../navigation/navigation-menu";
import { INavigationLinks } from "@/models/INavigationLinks";

export default async function Header() {
  // Fetch data for navigation menu
  const navLinks: INavigationLinks[] = await getNavigation();

  // Header component
  return (
    <>
      <header className="site-header">
        <NavMenu links={navLinks} />
      </header>
    </>
  );
}
