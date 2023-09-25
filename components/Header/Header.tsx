"use client";
import { links } from "@/constants";
import { HeaderItem } from "./HeaderItem";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky left-0 top-0 col-span-2 hidden h-screen flex-col sm:flex">
      <div className="flex flex-col px-2 pt-3 md:px-0">
        <div className="mb-4 inline-flex items-center justify-start">
          <Link
            href="/"
            className="flex items-center justify-center rounded-full p-2 hover:bg-slate-200"
          >
            <div className="relative h-10 w-10">
              <Image src="/assets/icon.svg" alt="X" fill />
            </div>
          </Link>
        </div>
        <ul className="flex flex-col space-y-2">
          {links.map((link, i) => (
            <HeaderItem link={link} key={i} pathname={pathname} />
          ))}
        </ul>
      </div>
    </header>
  );
}
export default Header;
