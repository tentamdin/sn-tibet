import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Bowl from "@/assets/category/bowl.png";
import Gong from "@/assets/category/gong.png";
import RitualTools from "@/assets/category/ritual_tools.png";
import Drum from "@/assets/category/drum.png";

export const CallToActionSection = (): JSX.Element => {
  const categories = [
    {
      id: 1,
      name: "SINGING BOWL",
      image: Bowl,
    },
    {
      id: 2,
      name: "GONG",
      image: Gong,
    },
    {
      id: 3,
      name: "RITUAL TOOLS",
      image: RitualTools,
    },
    {
      id: 4,
      name: "TONGUE DRUM",
      image: Drum,
    },
  ];

  return (
    <section className="w-full py-8 md:py-12 bg-neutral-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-8 mb-6 md:mb-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-medium [font-family:'Lora',Helvetica] mb-2 md:mb-3">
              Category
            </h2>
            <p className="text-sm md:text-base [font-family:'Lora',Helvetica] font-normal text-[#00000080] max-w-prose">
              Explore every handcrafted piece, thoughtfully curated to reflect
              the spirit and tradition of Tibetan artistry.
            </p>
          </div>
          <Link to="/collections" className="w-full md:w-auto">
            <Button
              variant="outline"
              className="w-full md:w-auto h-[42px] border-black rounded-none bg-white [font-family:'Lora',Helvetica] font-normal text-[#000000cc] text-base md:text-lg hover:bg-black hover:text-white transition-colors"
            >
              View All Collections
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
          {categories.map((category) => (
            <Link
              to={`/collections/${category.name
                .toLowerCase()
                .replace(" ", "-")}`}
              key={category.id}
            >
              <Card className="group w-full h-[300px] md:h-[420px] border-none rounded-none overflow-hidden relative transition-transform duration-300 hover:scale-[1.02]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${category.image})`,
                  }}
                />
                <CardContent className="relative flex items-end justify-center h-full p-0 bg-gradient-to-t from-black/20 to-transparent">
                  <div className="mb-5 w-auto min-w-[160px] md:min-w-[180px] h-[50px] md:h-[69px] bg-white/90 backdrop-blur-sm rounded-[10px] flex items-center justify-center transform transition-all duration-300 group-hover:bg-black/90">
                    <span className="[font-family:'Lora',Helvetica] font-normal text-black group-hover:text-white text-lg md:text-xl transition-colors">
                      {category.name}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
