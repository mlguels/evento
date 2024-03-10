import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-white/10 h-14 px-3 sm:px-9">
      <Logo />
      <nav>
        <ul className="flex gap-3 text-sm">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/events/all">All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
