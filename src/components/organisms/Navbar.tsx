"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import DrawerMenu from "@/components/organisms/DrawerMenu";

const navItems = [
  { href: "/home", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const baseClasses = "transition-colors hover:text-neutral-700";
  const activeClasses = "text-black font-medium underline underline-offset-8";
  const inactiveClasses = "text-black";
  const font = "font-roboto font-[100] text-md";

  return (
    <div className="w-full mt-5">
      {/* Versión Mobile */}
      <div className="relative flex items-center justify-center px-4 py-3 sm:hidden">
        {/* Botón del menú (izquierda) */}
        <div className="absolute left-4">
          <DrawerMenu />
        </div>

        {/* Título centrado */}
        <h1 className="text-sm text-black font-[700] font-roboto">
          Kiosma Rincones
        </h1>
      </div>

      {/* Versión Desktop */}
      <div className="items-center justify-between hidden px-1 py-3 sm:flex">
        {/* Título (izquierda) */}
        <h1 className="text-sm text-black font-[700] font-roboto">
          Kiosma Rincones
        </h1>

        {/* Menú de navegación (centro) */}
        <nav>
          <ul className="flex gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${baseClasses} ${
                    pathname === item.href ? activeClasses : inactiveClasses
                  } ${font}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Botón (derecha) */}
        <Button className="text-sm font-[100] font-roboto">Download CV</Button>
      </div>
    </div>
  );
}
