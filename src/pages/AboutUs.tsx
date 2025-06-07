import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import HeroBanner from "@/assets/about-us/hero-banner.png";
import ContentImage from "@/assets/about-us/content-image.png";

export const AboutUs = (): JSX.Element => {
  return (
    <div className="bg-white w-full">
      {/* Breadcrumb */}
      <nav className="px-4 md:px-12 pt-4 font-['Lora',Helvetica] font-normal text-sm md:text-base">
        <Link
          to="/"
          className="text-[#00000080] hover:text-[#ffbb00] transition-colors"
        >
          Home
        </Link>
        <span className="text-[#00000080] mx-2">&gt;</span>
        <span className="text-[#000000b2]">About Us</span>
      </nav>

      {/* Hero Banner */}
      <div
        className="w-full h-[250px] md:h-[354px] mt-4 bg-cover bg-center flex items-center justify-center px-4"
        style={{ backgroundImage: `url(${HeroBanner})` }}
      >
        <Card className="w-full md:w-3/4 bg-[#f5f5f5b2] backdrop-blur-sm border-none rounded-none">
          <CardContent className="flex items-center justify-center p-4 md:p-8">
            <div className="font-['Lora',Helvetica] font-normal text-black text-sm md:text-xl text-center leading-relaxed md:leading-[30px]">
              "At Samphel Norbu, we are guided by a simple yet powerful
              belief: that art and tradition can heal. Each handcrafted piece
              is a bridge between cultures, a tool for inner balance, and a
              step toward global peace. Our mission is to serve the wellness
              community with authenticity, integrity, and heart."
              <br className="hidden md:block" />
              <span className="block mt-2 md:mt-4">— Founder, Samphel Norbu</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="px-4 md:px-12 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row justify-between gap-8 md:gap-12">
          <div className="lg:max-w-[60%]">
            <h1 className="font-['Lora',Helvetica] font-medium text-black text-2xl md:text-4xl mb-4 md:mb-8">
              About Us
            </h1>
            <div className="font-['Lora',Helvetica] font-normal text-black text-sm md:text-base leading-relaxed md:leading-[30px] space-y-6">
              <p>
                At Samphel Norbu Tibetan Art & Handicraft, we are honored to
                share the sacred traditions of Tibetan culture through our
                collection of authentic, handcrafted treasures. For over 25 years,
                we have specialized in handmade singing bowls, each one created
                with care and precision by skilled artisans using ancient
                techniques. These bowls are more than musical instruments—they are
                tools for healing, meditation, energy work, and spiritual
                alignment. Their deep, resonant tones are cherished by sound
                healers, yogis, and wellness seekers around the world.
              </p>
              <p>
                Our journey began with a passion for holistic living and the
                powerful healing arts rooted in Tibetan spirituality. Since our
                early days, we've been actively involved in holistic fairs,
                spiritual expos, and wellness events, offering our handcrafted
                pieces to those seeking peace, balance, and a deeper connection
                with themselves and the universe. Beyond singing bowls, our
                offerings include a diverse range of traditional crafts—from malas
                and incense holders to prayer flags and sacred art—each
                thoughtfully chosen to support mindfulness, intention, and inner
                harmony.
              </p>
              <p>
                At Samphel Norbu, we believe that every handcrafted piece holds
                energy—a vibration that can inspire healing, compassion, and
                unity. Our mission is not just to offer beautiful objects, but to
                spread peace and positive energy into the world, one piece at a
                time. We invite you to explore our collection, connect with the
                spirit behind the craftsmanship, and join us in cultivating a more
                mindful, harmonious world.
              </p>
            </div>
          </div>

          {/* Content Image */}
          <div className="lg:max-w-[40%] h-full">
            <img
              className="w-full h-auto max-h-[730px] object-cover"
              alt="Tibetan singing bowls and handicrafts"
              src={ContentImage}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
