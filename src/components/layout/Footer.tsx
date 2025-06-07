import { Link } from "react-router-dom";

export const FooterSection = (): JSX.Element => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Category", href: "/collections" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact Us", href: "/" },
  ];

  return (
    <footer id="footer" className="w-full bg-white">
      <div className="container mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Questions and Info Section */}
          <div className="space-y-4">
            <h3 className="font-medium text-xl md:text-2xl font-['Lora',Helvetica] text-black">
              Have questions or need more info?
            </h3>
            <p className="font-normal text-sm md:text-base font-['Lora',Helvetica] text-[#000000cc] leading-relaxed">
              Feel free to reach out to us at{" "}
              <a
                href="mailto:artisy@gmail.com"
                rel="noopener noreferrer"
                target="_blank"
                className="text-[#ffbb00] hover:underline"
              >
                artisy@gmail.com
              </a>{" "}
              — and if you saw something you liked, don't forget to include a
              picture so we can help you better!
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="font-medium text-lg font-['Lora',Helvetica] text-black">
              Quick Links
            </h3>
            <nav>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="font-normal text-sm md:text-base font-['Lora',Helvetica] text-black hover:text-[#ffbb00] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Address and Contact Section */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="font-medium text-lg font-['Lora',Helvetica] text-black">
                Address
              </h3>
              <p className="font-normal text-sm md:text-base font-['Lora',Helvetica] text-[#000000b2] leading-relaxed">
                211-214 Dame Lane
                <br />
                NC, USA
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium text-lg font-['Lora',Helvetica] text-black">
                Contact Details
              </h3>
              <p className="font-normal text-sm md:text-base font-['Lora',Helvetica] text-[#000000b2] leading-relaxed">
                <a
                  href="tel:908-555-2314"
                  className="hover:text-[#ffbb00] transition-colors"
                >
                  908-555-2314
                </a>
                <br />
                <a
                  href="tel:888-098-7654"
                  className="hover:text-[#ffbb00] transition-colors"
                >
                  888-098-7654
                </a>
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium text-lg font-['Lora',Helvetica] text-black">
                Email
              </h3>
              <p className="font-normal text-sm md:text-base font-['Lora',Helvetica] text-[#000000cc]">
                <a
                  href="mailto:artisy@gmail.com"
                  className="hover:text-[#ffbb00] transition-colors"
                >
                  artisy@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Brand Section */}
          <div className="space-y-4 sm:col-span-2 md:col-span-1">
            <Link to="/" className="inline-block">
              <h2 className="font-semibold text-3xl md:text-4xl font-['Lora',Helvetica] text-[#ffbb00] hover:opacity-90 transition-opacity">
                SNTibet
              </h2>
            </Link>
            <p className="font-normal text-base md:text-lg font-['Lora',Helvetica] text-[#000000b2]">
              Handmade crafts for you.......
            </p>
            <p className="font-normal text-sm md:text-base font-['Lora',Helvetica] text-[#000000b2] leading-relaxed">
              For over 25 years, we've shared the soul of Tibet —<br />
              Hand to hand, heart to heart.
              <br />
              Now, our journey continues online,
              <br />
              Bringing sacred sound and mindful treasures
              <br />
              From our hands to your home.
            </p>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="w-full bg-[#ffbb00] py-4 md:py-5">
        <div className="container mx-auto px-4 text-center">
          <p className="font-normal text-sm md:text-base font-['Roboto',Helvetica] text-black">
            © {new Date().getFullYear()}, SamphelNorbuTibetanHandicrafts.com
          </p>
        </div>
      </div>
    </footer>
  );
};
