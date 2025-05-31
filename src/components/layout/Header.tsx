import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export const HeaderSection = () => {
  // Navigation items data
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Category", href: "/collections" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact Us", href: "#" },
  ];

  return (
    <header className="w-full h-[70px] bg-white flex items-center">
      <div className="w-full max-w-[1280px] mx-auto px-12 flex justify-between items-center">
        <Link
          to="/"
          className="[font-family:'Lora',Helvetica] font-semibold text-[#ffbb00] text-4xl"
        >
          Sntibet
        </Link>

        <NavigationMenu>
          <NavigationMenuList className="flex gap-8">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.name}>
                <NavigationMenuLink
                  asChild
                  className="[font-family:'Lora',Helvetica] font-normal text-black text-lg"
                >
                  <Link to={item.href}>{item.name}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};
