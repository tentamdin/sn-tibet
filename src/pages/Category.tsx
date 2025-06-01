import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

export const Category = () => {
  // Collection data for mapping
  const collections = [
    {
      name: "Singing Bowl",
      image:
        "https://c.animaapp.com/mbaqxkn14x97hl/img/singing-bowl-7-chakra-1.png",
    },
    {
      name: "Gong",
      image: "https://c.animaapp.com/mbaqxkn14x97hl/img/gong-3.png",
    },
    {
      name: "Ritual tools",
      image: "https://c.animaapp.com/mbaqxkn14x97hl/img/ppfd-1.png",
    },
    {
      name: "Prayer Beads/Mala",
      image:
        "https://c.animaapp.com/mbaqxkn14x97hl/img/prayer-beads-or-mala-1.png",
    },
    {
      name: "Apparel",
      image:
        "https://c.animaapp.com/mbaqxkn14x97hl/img/singing-bowl-7-chakra-2.png",
    },
    {
      name: "Incense",
      image: "https://c.animaapp.com/mbaqxkn14x97hl/img/gong-4.png",
    },
    {
      name: "Statue",
      image: "https://c.animaapp.com/mbaqxkn14x97hl/img/ppfd-2.png",
    },
    {
      name: "Jewelry",
      image:
        "https://c.animaapp.com/mbaqxkn14x97hl/img/prayer-beads-or-mala-2.png",
    },
    {
      name: "Yoga Essentials",
      image:
        "https://c.animaapp.com/mbaqxkn14x97hl/img/singing-bowl-7-chakra-3.png",
    },
    {
      name: "Tree of lifes",
      image: "https://c.animaapp.com/mbaqxkn14x97hl/img/gong-5.png",
    },
    {
      name: "Woolen Shawls",
      image: "https://c.animaapp.com/mbaqxkn14x97hl/img/ppfd-3.png",
    },
    {
      name: "Tingsha",
      image:
        "https://c.animaapp.com/mbaqxkn14x97hl/img/prayer-beads-or-mala-3.png",
    },
  ];

  return (
    <div className="bg-white flex flex-col items-center w-full">
      <main className="w-full max-w-[1366px]">
        {/* Breadcrumb */}
        <div className="px-12 pt-4 [font-family:'Lora',Helvetica] font-normal text-base">
          <Link to="/" className="text-[#00000080]">
            Home
          </Link>
          <span className="text-[#00000080]">&gt;</span>
          <Link to="/collections" className="text-[#00000080]">
            Category
          </Link>
          <span className="text-[#000000b2]"> &gt; all collections</span>
        </div>

        {/* Page Title */}
        <div className="px-12 pt-6">
          <h1 className="[font-family:'Lora',Helvetica] font-medium text-black text-[32px]">
            Explore Our Curated Collections
          </h1>
        </div>

        {/* Description */}
        <div className="max-w-[1085px] mx-auto mt-10 text-center">
          <p className="[font-family:'Lora',Helvetica] font-normal text-black text-xl">
            &quot;Discover handcrafted pieces thoughtfully categorized to
            reflect the essence of Tibetan culture — from sacred ritual objects
            to timeless textile traditions. Each collection represents the
            harmony of heritage, artistry, and purpose.&quot;
          </p>
        </div>

        {/* Collections Grid */}
        <div className="w-full bg-neutral-100 py-12 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-12">
            {collections.map((collection, index) => (
              <Card
                key={collection.name}
                className="w-full h-[470px] bg-[#d9d9d9] rounded-none overflow-hidden"
              >
                <div className="relative h-full">
                  <img
                    className="w-full h-[412px] object-cover"
                    alt={collection.name}
                    src={collection.image}
                  />
                  <div className="absolute bottom-0 w-full h-[58px] bg-white">
                    <div className="px-5 py-[15px] [font-family:'Lora',Helvetica] font-normal text-black text-[22px]">
                      {collection.name}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
