"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="flex justify-between bg-secondary px-5 py-3">
      <div className="text-2xl font-bold">
        <Link href="/">Seo0</Link>
      </div>
      <div className="flex gap-2">
        <Link
          href="/skills"
          className={
            pathname === "/skills" ? "text-accent" : "text-basic-white"
          }
        >
          skills
        </Link>
        <Link
          href="/projects"
          className={
            pathname === "/projects" ? "text-accent" : "text-basic-white"
          }
        >
          projects
        </Link>
        <Link
          href="/blog"
          className={pathname === "/blog" ? "text-accent" : "text-basic-white"}
        >
          blog
        </Link>
        <Link
          href="/contact"
          className={
            pathname === "/contact" ? "text-accent" : "text-basic-white"
          }
        >
          contact
        </Link>
      </div>
    </header>
  );
}
