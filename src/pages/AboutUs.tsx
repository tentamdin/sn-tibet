import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

export const AboutUs = (): JSX.Element => {
  // Quick links data
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Category", path: "/collections" },
    { name: "About Us", path: "/about-us" },
    { name: "Contact Us", path: "#" },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full max-w-[1366px] relative">
        {/* Header */}
        <header className="w-full h-[70px] bg-white">
          <div className="relative w-full max-w-[1280px] h-[46px] mx-12 my-3">
            <Link
              to="/"
              className="absolute top-0 left-0 font-semibold text-[#ffbb00] text-4xl font-['Lora',Helvetica] tracking-[0] leading-normal"
            >
              Sntibet
            </Link>

            <nav className="absolute right-0 top-[9px] flex space-x-8">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className={`font-['Lora',Helvetica] font-normal text-black text-lg tracking-[0] leading-normal ${
                    link.name === "About Us"
                      ? "[-webkit-text-stroke:1px_#000000]"
                      : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        {/* Breadcrumb */}
        <div className="ml-12 mt-[89px] font-['Lora',Helvetica] font-normal text-sm tracking-[0] leading-normal">
          <Link to="/" className="text-[#00000080]">
            Home
          </Link>
          <span className="text-[#00000080]">&gt; </span>
          <span className="text-[#000000b2]">About Us</span>
        </div>

        {/* Hero Banner */}
        <div className="w-full h-[354px] mt-8 bg-[url(https://c.animaapp.com/mbar9udjzmmtyZ/img/rectangle-50.png)] bg-cover">
          <Card className="w-[1033px] h-[120px] mx-auto mt-[117px] bg-[#f5f5f5b2] border-none rounded-none">
            <CardContent className="p-0 h-full flex items-center justify-center">
              <div className="font-['Lora',Helvetica] font-normal text-black text-xl text-center tracking-[0] leading-[30px]">
                &quot;At Samphel Norbu, we are guided by a simple yet powerful
                belief: that art and tradition can heal. Each handcrafted piece
                is a bridge between cultures, a tool for inner balance, and a
                step toward global peace. Our mission is to serve the wellness
                community with authenticity, integrity, and heart.&quot;
                <br /> — Founder, Samphel Norbu
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="mt-[511px] ml-[49px] font-['Lora',Helvetica] font-medium text-black text-4xl tracking-[0] leading-normal">
          About Us
        </div>

        <div className="flex mt-[78px]">
          <div className="w-[658px] ml-[49px] font-['Lora',Helvetica] font-normal text-black text-base tracking-[0] leading-[30px]">
            At Samphel Norbu Tibetan Art &amp; Handicraft, we are honored to
            share the sacred traditions of Tibetan culture through our
            collection of authentic, handcrafted treasures. For over 25 years,
            we have specialized in handmade singing bowls, each one created with
            care and precision by skilled artisans using ancient techniques.
            These bowls are more than musical instruments—they are tools for
            healing, meditation, energy work, and spiritual alignment. Their
            deep, resonant tones are cherished by sound healers, yogis, and
            wellness seekers around the world.
            <br />
            <br />
            Our journey began with a passion for holistic living and the
            powerful healing arts rooted in Tibetan spirituality. Since our
            early days, we&apos;ve been actively involved in holistic fairs,
            spiritual expos, and wellness events, offering our handcrafted
            pieces to those seeking peace, balance, and a deeper connection with
            themselves and the universe. Beyond singing bowls, our offerings
            include a diverse range of traditional crafts—from malas and incense
            holders to prayer flags and sacred art—each thoughtfully chosen to
            support mindfulness, intention, and inner harmony.
            <br />
            <br />
            At Samphel Norbu, we believe that every handcrafted piece holds
            energy—a vibration that can inspire healing, compassion, and unity.
            Our mission is not just to offer beautiful objects, but to spread
            peace and positive energy into the world, one piece at a time. We
            invite you to explore our collection, connect with the spirit behind
            the craftsmanship, and join us in cultivating a more mindful,
            harmonious world.
          </div>
          <img
            className="w-[540px] h-[730px] ml-[66px] object-cover"
            alt="Tibetan singing bowls and handicrafts"
            src="https://c.animaapp.com/mbar9udjzmmtyZ/img/rectangle-51.png"
          />
        </div>

        {/* Footer */}
        <footer className="w-full mt-[1273px]">
          <div className="flex px-12 py-8">
            {/* Contact Info Section */}
            <div className="w-[401px]">
              <div className="font-['Lora',Helvetica] font-medium text-black text-2xl tracking-[0] leading-normal">
                Have questions or need more info?
              </div>
              <div className="mt-[55px] font-['Lora',Helvetica] font-normal text-[#000000cc] text-sm tracking-[0] leading-normal">
                <span>Feel free to reach out to us at [</span>
                <a
                  href="mailto:artisy@gmail.com"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="underline"
                >
                  artisy@gmail.com
                </a>
                <span>
                  ] — and if you saw something you liked, don&apos;t forget to
                  include a picture so we can help you better!
                </span>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="ml-[119px]">
              <div className="font-['Lora',Helvetica] font-medium text-black text-lg tracking-[0] leading-normal">
                Quick Links
              </div>
              <div className="mt-[45px] flex flex-col space-y-12">
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    className="font-['Lora',Helvetica] font-normal text-black text-sm tracking-[0] leading-normal"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Address Section */}
            <div className="ml-[123px]">
              <div>
                <div className="font-['Lora',Helvetica] font-medium text-black text-lg tracking-[0] leading-normal">
                  Address:
                </div>
                <div className="mt-[34px] font-['Lora',Helvetica] font-normal text-[#000000b2] text-sm tracking-[0] leading-normal">
                  211-214 Dame Lane
                  <br />
                  NC, USA
                </div>
              </div>

              <div className="mt-[89px]">
                <div className="font-['Lora',Helvetica] font-medium text-black text-lg tracking-[0] leading-normal">
                  Contact Details
                </div>
                <div className="mt-[34px] font-['Lora',Helvetica] font-normal text-[#000000b2] text-sm tracking-[0] leading-normal">
                  908-555-2314
                  <br />
                  888-098-7654
                </div>
              </div>

              <div className="mt-[88px]">
                <div className="font-['Lora',Helvetica] font-medium text-black text-lg tracking-[0] leading-normal">
                  Email
                </div>
                <div className="mt-[34px] font-['Lora',Helvetica] font-normal text-[#000000cc] text-sm tracking-[0] leading-normal">
                  artisy@gmail.com
                </div>
              </div>
            </div>

            {/* Company Info Section */}
            <div className="ml-[123px]">
              <div className="font-['Lora',Helvetica] font-semibold text-[#ffbb00] text-4xl tracking-[0] leading-normal">
                SNTibet
              </div>
              <div className="mt-[67px] font-['Lora',Helvetica] font-normal text-[#000000b2] text-lg tracking-[0] leading-normal">
                Handmade crafts for you.......
              </div>
              <div className="mt-[40px] font-['Lora',Helvetica] font-normal text-[#000000b2] text-sm tracking-[0] leading-normal">
                For over 25 years, we&#39;ve shared the soul of Tibet —<br />
                Hand to hand, heart to heart.
                <br />
                Now, our journey continues online,
                <br />
                Bringing sacred sound and mindful treasures
                <br />
                From our hands to your home.
              </div>
            </div>
          </div>

          {/* Copyright Bar */}
          <div className="w-full h-[69px] bg-[#ffbb00] flex items-center justify-center">
            <div className="font-['Roboto',Helvetica] font-normal text-black text-base tracking-[0] leading-[22.4px]">
              © 2025, SamphelNorbuTibetanHandicrafts.com
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
