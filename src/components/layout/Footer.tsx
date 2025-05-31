export const FooterSection = (): JSX.Element => {
  // Quick links data
  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "Category", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  return (
    <footer className="w-full bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Questions and Info Section */}
          <div className="space-y-4">
            <h3 className="font-medium text-2xl font-['Lora',Helvetica] text-black">
              Have questions or need more info?
            </h3>
            <p className="font-normal text-sm font-['Lora',Helvetica] text-[#000000cc]">
              Feel free to reach out to us at [
              <a
                href="mailto:artisy@gmail.com"
                rel="noopener noreferrer"
                target="_blank"
                className="underline"
              >
                artisy@gmail.com
              </a>
              ] — and if you saw something you liked, don&apos;t forget to
              include a picture so we can help you better!
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="font-medium text-lg font-['Lora',Helvetica] text-black">
              Quick Links
            </h3>
            <nav>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="font-normal text-sm font-['Lora',Helvetica] text-black hover:underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Address and Contact Section */}
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium text-lg font-['Lora',Helvetica] text-black">
                Address:
              </h3>
              <p className="font-normal text-sm font-['Lora',Helvetica] text-[#000000b2]">
                211-214 Dame Lane
                <br />
                NC, USA
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium text-lg font-['Lora',Helvetica] text-black">
                Contact Details
              </h3>
              <p className="font-normal text-sm font-['Lora',Helvetica] text-[#000000b2]">
                908-555-2314
                <br />
                888-098-7654
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium text-lg font-['Lora',Helvetica] text-black">
                Email
              </h3>
              <p className="font-normal text-sm font-['Lora',Helvetica] text-[#000000cc]">
                artisy@gmail.com
              </p>
            </div>
          </div>

          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="font-semibold text-4xl font-['Lora',Helvetica] text-[#ffbb00]">
              SNTibet
            </h2>
            <p className="font-normal text-lg font-['Lora',Helvetica] text-[#000000b2]">
              Handmade crafts for you.......
            </p>
            <p className="font-normal text-sm font-['Lora',Helvetica] text-[#000000b2]">
              For over 25 years, we&#39;ve shared the soul of Tibet —<br />
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
      <div className="w-full bg-[#ffbb00] py-5">
        <div className="container mx-auto text-center">
          <p className="font-normal text-base font-['Roboto',Helvetica] text-black">
            © 2025, SamphelNorbuTibetanHandicrafts.com
          </p>
        </div>
      </div>
    </footer>
  );
};
