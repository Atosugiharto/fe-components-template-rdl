// src/components/Header.tsx
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  //   navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router";
import { Accessibility } from "lucide-react";

const HeaderNavigation: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-sm">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
        <div className="text-sm font-semibold leading-tight">
          <div className="text-xs">RAGDALION</div>
          <div className="text-xs text-muted-foreground">TECHNOLOGY</div>
        </div>
      </div>

      {/* Navigation Menu */}
      <NavigationMenu>
        <NavigationMenuList className="gap-8">
          <NavigationMenuItem>
            <NavigationMenuLink asChild className="text-sm font-medium">
              <NavLink to="#">Text</NavLink>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className="text-sm font-medium">
              <NavLink to="#">Text</NavLink>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className="text-sm font-medium">
              <NavLink to="#">Text</NavLink>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Simple</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-4">
                <li>
                  <NavigationMenuLink asChild>
                    <NavLink to="#">Components</NavLink>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Buttons */}
      <div className="flex gap-2">
        <Button variant="outline">Button</Button>
        <Button
          variant="gradien"
          // className="bg-gradient-to-r from-blue-500 to-purple-500 text-white"
        >
          Button
        </Button>
      </div>
    </header>
  );
};

export default HeaderNavigation;
