"use client";
import { INavigationLinks } from "@/models/INavigationLinks";
import NavLinks from "./navigation-links";
import { useState } from "react";

export default function NavMenu({ links }: { links: INavigationLinks[] }) {
  // Show/hide menu
  let [show, setShow] = useState(false);

  return (
    <>
      <nav aria-label="Primary">
        {/* List of navigation categories */}
        <ul className="header-navigation" role="list" onClick={() => setShow((show) => !show)}>
          {links.map(({ id, category, subCategory }) => (
            <li key={id}>
              <span className="category">{category}</span>

              {/* List of sublinks */}
              {show && <NavLinks links={subCategory} />}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
