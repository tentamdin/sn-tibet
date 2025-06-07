import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export const HeaderSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if we navigated with a hash
    if (location.hash === "#contact") {
      // Wait for the footer to be available in the DOM
      setTimeout(() => {
        const footer = document.getElementById("footer");
        if (footer) {
          footer.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  const scrollToFooter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      // Navigate to home and scroll to footer
      navigate("/?scroll=true");
      setTimeout(() => {
        const footer = document.getElementById("footer");
        if (footer) {
          footer.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const footer = document.getElementById("footer");
      if (footer) {
        footer.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Navigation items data
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Category", href: "/collections" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact Us", href: "/#contact", onClick: scrollToFooter },
  ];

  return (
    <header className="w-full h-[70px] bg-white flex items-center relative">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-12 flex justify-between items-center">
        <Link
          to="/"
          className="[font-family:'Lora',Helvetica] font-semibold text-[#ffbb00] text-4xl"
        >
          Sntibet
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="flex gap-8">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.name}>
                <NavigationMenuLink
                  asChild
                  className="[font-family:'Lora',Helvetica] font-normal text-black text-lg"
                >
                  <Link to={item.href} onClick={item.onClick}>
                    {item.name}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-[70px] left-0 w-full bg-white shadow-lg md:hidden z-10">
            <nav className="flex flex-col p-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="[font-family:'Lora',Helvetica] font-normal text-black text-lg py-3 px-4 hover:bg-gray-100"
                  onClick={(e) => {
                    setIsMenuOpen(false);
                    if (item.onClick) {
                      item.onClick(e);
                    }
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
