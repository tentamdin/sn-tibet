import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
// Import collection images
import SingingBowl from "@/assets/collections/singing-bowl.png";
import Gong from "@/assets/collections/gong.png";
import RitualTools from "@/assets/collections/ritual-tools.png";
import PrayerBeads from "@/assets/collections/prayer-beads.png";
import Apparel from "@/assets/collections/apparel.png";
import Incense from "@/assets/collections/incense.png";
import Statue from "@/assets/collections/statue.png";
import Jewelry from "@/assets/collections/jewelry.png";
import Yoga from "@/assets/collections/yoga.png";
import TreeOfLife from "@/assets/collections/tree-of-life.png";
import Shawls from "@/assets/collections/shawls.png";
import Tingsha from "@/assets/collections/tingsha.png";

export const Category = () => {
  const collections = [
    {
      name: "Singing Bowl",
      image: SingingBowl,
      href: "/collections/singing-bowl",
    },
    {
      name: "Gong",
      image: Gong,
      href: "/collections/gong",
    },
    {
      name: "Ritual tools",
      image: RitualTools,
      href: "/collections/ritual-tools",
    },
    {
      name: "Prayer Beads/Mala",
      image: PrayerBeads,
      href: "/collections/prayer-beads",
    },
    {
      name: "Apparel",
      image: Apparel,
      href: "/collections/apparel",
    },
    {
      name: "Incense",
      image: Incense,
      href: "/collections/incense",
    },
    {
      name: "Statue",
      image: Statue,
      href: "/collections/statue",
    },
    {
      name: "Jewelry",
      image: Jewelry,
      href: "/collections/jewelry",
    },
    {
      name: "Yoga Essentials",
      image: Yoga,
      href: "/collections/yoga",
    },
    {
      name: "Tree of lifes",
      image: TreeOfLife,
      href: "/collections/tree-of-life",
    },
    {
      name: "Woolen Shawls",
      image: Shawls,
      href: "/collections/shawls",
    },
    {
      name: "Tingsha",
      image: Tingsha,
      href: "/collections/tingsha",
    },
  ];

  return (
    <div className="bg-white flex flex-col items-center w-full min-h-screen">
      <main className="w-full max-w-[1366px] px-4 md:px-8 lg:px-12">
        {/* Breadcrumb */}
        <nav className="pt-4 [font-family:'Lora',Helvetica] font-normal text-sm md:text-base">
          <Link
            to="/"
            className="text-[#00000080] hover:text-[#ffbb00] transition-colors"
          >
            Home
          </Link>
          <span className="text-[#00000080] mx-2">&gt;</span>
          <Link
            to="/collections"
            className="text-[#00000080] hover:text-[#ffbb00] transition-colors"
          >
            Category
          </Link>
          <span className="text-[#000000b2] mx-2">&gt;</span>
          <span className="text-[#000000b2]">all collections</span>
        </nav>

        {/* Page Title */}
        <div className="pt-4 md:pt-6">
          <h1 className="[font-family:'Lora',Helvetica] font-medium text-black text-2xl md:text-[32px]">
            Explore Our Curated Collections
          </h1>
        </div>

        {/* Description */}
        <div className="max-w-[1085px] mx-auto mt-6 md:mt-10 text-center px-4">
          <p className="[font-family:'Lora',Helvetica] font-normal text-black text-base md:text-xl leading-relaxed">
            &quot;Discover handcrafted pieces thoughtfully categorized to
            reflect the essence of Tibetan culture — from sacred ritual objects
            to timeless textile traditions. Each collection represents the
            harmony of heritage, artistry, and purpose.&quot;
          </p>
        </div>

        {/* Collections Grid */}
        <div className="w-full bg-neutral-100 py-8 md:py-12 mt-8 md:mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {collections.map((collection) => (
              <Link
                to={collection.href}
                key={collection.name}
                className="group"
              >
                <Card className="w-full h-[400px] md:h-[470px] bg-[#d9d9d9] rounded-none overflow-hidden transition-transform duration-300 group-hover:shadow-lg">
                  <div className="relative h-full">
                    <img
                      className="w-full h-[350px] md:h-[412px] object-cover transition-transform duration-500 group-hover:scale-105"
                      alt={collection.name}
                      src={collection.image}
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 w-full h-[50px] md:h-[58px] bg-white transition-colors group-hover:bg-[#ffbb00]">
                      <div className="px-4 md:px-5 py-3 md:py-[15px] [font-family:'Lora',Helvetica] font-normal text-black text-lg md:text-[22px] group-hover:text-white transition-colors">
                        {collection.name}
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
