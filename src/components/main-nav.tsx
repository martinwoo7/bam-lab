"use client";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "./ui/navigation-menu";

import { Item, ItemContent, ItemTitle } from "./ui/item";

interface SubItems {
  href: string;
  label: string;
}

interface MenuItems {
  href?: string;
  label: string;
  items?: SubItems[];
}

const MainNav = ({
  items,
  className,
  ...props
}: React.ComponentProps<"nav"> & {
  items: MenuItems[];
}) => {
  const pathname = usePathname();
  return (
    // TODO: Change viewport for mobile
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <nav className={cn("items-center gap-0.5", className)} {...props}>
          {items.map((item, i) => {
            const isActive = pathname === item.href;

            return (
              <NavigationMenuItem key={i}>
                {item.items && item.items.length > 0 ? (
                  <>
                    <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                    <NavigationMenuContent className="p-0 py-2">
                      {item.items.map((subItem, j) => (
                        <Item key={j} className="px-2 py-0">
                          <NavigationMenuLink href={"#"} className="w-full">
                            <ItemContent>
                              <ItemTitle>{subItem.label}</ItemTitle>
                            </ItemContent>
                          </NavigationMenuLink>
                        </Item>
                      ))}
                    </NavigationMenuContent>
                  </>
                ) : (
                  <>
                    <NavigationMenuLink className="font-medium">
                      {item.label}
                    </NavigationMenuLink>
                  </>
                )}
              </NavigationMenuItem>
            );
          })}

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
