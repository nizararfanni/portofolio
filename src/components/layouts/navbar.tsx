"use client";

import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const navigationItems = [
  { title: "Home", href: "/" },
  { title: "Projek", href: "/projects" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-center  w-full px-6 py-4 bg-background border-b border-purple-600">
      <NavigationMenu>
        <NavigationMenuList>
          {navigationItems.map((item) => {
            //cek apakah item.href sama dengan pathname
            const isActive = pathname === item.href;

            return (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuLink
                  href={item.href}
                  className={`${navigationMenuTriggerStyle()} ${
                    isActive
                      ? "from-indigo-500 via-purple-600 to-pink-500 bg-clip-text text-transparent underline underline-offset-4"
                      : "text-muted-foreground"
                  } font-bold text-sm md:text-lg bg-gradient-to-r `}
                >
                  {item.title}
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
