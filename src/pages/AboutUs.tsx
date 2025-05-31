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
      <div className="bg-white w-full relative">
        {/* Breadcrumb */}
        <div className="ml-12 mt-4 font-['Lora',Helvetica] font-normal text-sm tracking-[0] leading-normal">
          <Link to="/" className="text-[#00000080]">
            Home
          </Link>
          <span className="text-[#00000080]">&gt; </span>
          <span className="text-[#000000b2]">About Us</span>
        </div>

        {/* Hero Banner */}
        <div className="w-full h-[354px] mt-4 bg-[url(https://c.animaapp.com/mbar9udjzmmtyZ/img/rectangle-50.png)] bg-cover bg-[50%_50%] flex items-center justify-center">
          <Card className="w-3/4 h-[120px] bg-[#f5f5f5b2] border-none rounded-none">
            <CardContent className="h-full flex items-center justify-center p-0">
              <div className="font-['Lora',Helvetica] font-normal text-black text-xl text-center tracking-[0] leading-[30px] px-4">
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
        <div className="flex flex-row justify-center mt-8 mx-12">
          <div>
            <div className="mb-8  font-['Lora',Helvetica] font-medium text-black text-4xl tracking-[0] leading-normal">
              About Us
            </div>
            <div className="font-['Lora',Helvetica] font-normal text-black text-base tracking-[0] leading-[30px]">
              At Samphel Norbu Tibetan Art &amp; Handicraft, we are honored to
              share the sacred traditions of Tibetan culture through our
              collection of authentic, handcrafted treasures. For over 25 years,
              we have specialized in handmade singing bowls, each one created
              with care and precision by skilled artisans using ancient
              techniques. These bowls are more than musical instruments—they are
              tools for healing, meditation, energy work, and spiritual
              alignment. Their deep, resonant tones are cherished by sound
              healers, yogis, and wellness seekers around the world.
              <br />
              <br />
              Our journey began with a passion for holistic living and the
              powerful healing arts rooted in Tibetan spirituality. Since our
              early days, we&apos;ve been actively involved in holistic fairs,
              spiritual expos, and wellness events, offering our handcrafted
              pieces to those seeking peace, balance, and a deeper connection
              with themselves and the universe. Beyond singing bowls, our
              offerings include a diverse range of traditional crafts—from malas
              and incense holders to prayer flags and sacred art—each
              thoughtfully chosen to support mindfulness, intention, and inner
              harmony.
              <br />
              <br />
              At Samphel Norbu, we believe that every handcrafted piece holds
              energy—a vibration that can inspire healing, compassion, and
              unity. Our mission is not just to offer beautiful objects, but to
              spread peace and positive energy into the world, one piece at a
              time. We invite you to explore our collection, connect with the
              spirit behind the craftsmanship, and join us in cultivating a more
              mindful, harmonious world.
            </div>
          </div>
          <img
            className="w-[500px] h-[730px] ml-[66px] object-cover"
            alt="Tibetan singing bowls and handicrafts"
            src="https://c.animaapp.com/mbar9udjzmmtyZ/img/rectangle-51.png"
          />
        </div>
      </div>
    </div>
  );
};
