"use client";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "./ui/navigation-menu";

import { motion, LayoutGroup } from "motion/react";

interface MenuItems {
  name: string;
  url: string;
}
const MainNav = ({
  items,
  className,
  ...props
}: React.ComponentProps<"nav"> & {
  items: { href: string; label: string; items?: MenuItems[] }[];
}) => {
  const pathname = usePathname();
  return (
    // TODO: Change viewport for mobile
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <nav className={cn("items-center gap-0.5", className)} {...props}>
          {items.map((item) => (
            <NavigationMenuItem key={item.href}>
              <motion.div
                className={cn(
                  pathname === item.href &&
                    "text-primary underline underline-primary underline-offset-2"
                )}
              >
                <NavigationMenuLink href={item.href} className="relative">
                  <span>{item.label}</span>
                  {/* {pathname === item.href && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 w-full bottom-0 h-0.5 bg-amber-600"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )} */}
                </NavigationMenuLink>
              </motion.div>
            </NavigationMenuItem>
          ))}

          <NavigationMenuItem className="ml-4">
            <Button asChild variant={"secondary"}>
              <NavigationMenuLink
                href={"/contact"}
                className={cn(pathname === "/contact" && "")}
              >
                Contact
              </NavigationMenuLink>
            </Button>
          </NavigationMenuItem>
        </nav>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default MainNav;
