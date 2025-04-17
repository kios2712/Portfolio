import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Separator } from "../ui/separator";

const navItems = [
  { href: "/home", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export default function DrawerMenu() {
  const pathname = usePathname();
  const baseClasses = "transition-colors hover:text-neutral-700";
  const activeClasses = "text-black font-medium underline underline-offset-8";
  const inactiveClasses = "text-black";
  const font = "font-roboto font-[100] text-md";

  return (
    <Drawer>
      <DrawerTrigger asChild className="px-4">
        <Button variant="ghost">
          <Menu className="h-12 w-12 stroke-[3]" />
        </Button>
      </DrawerTrigger>

      <DrawerContent>
        <DrawerTitle className="p-4 text-center">Menu</DrawerTitle>
        <Separator />

        <nav>
          <ul className="flex flex-col items-center gap-6 p-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <DrawerClose asChild>
                  <Link
                    href={item.href}
                    className={`${baseClasses} ${
                      pathname === item.href ? activeClasses : inactiveClasses
                    } ${font}`}
                  >
                    {item.label}
                  </Link>
                </DrawerClose>
              </li>
            ))}
          </ul>
        </nav>
      </DrawerContent>
    </Drawer>
  );
}
