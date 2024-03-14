"use client";

import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "All Events",
    path: "/events/all",
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between border-b border-white/10 h-14 px-3 sm:px-9">
      <Logo />
      <nav>
        <ul className="flex gap-3 text-sm">
          {routes.map((route) => (
            <li
              key={route.path}
              className={clsx("hover:text-white transition", {
                "text-white": pathname === route.path,
                "text-white/50": pathname !== route.path,
              })}
            >
              <Link href={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
