import Link from "next/link";
import type { ISubLink } from "@/models/INavigationLinks";

export default function NavLinks({ links }: { links: ISubLink[] }) {
  return (
    <>
      <ul className="nav-dropdown" role="list">
        {links.map(({ href, title }) => (
          <li key={href}>
            <Link href={href}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
