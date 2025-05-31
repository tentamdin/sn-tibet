import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const CallToActionSection = (): JSX.Element => {
  // Define category data for mapping
  const categories = [
    {
      id: 1,
      name: "SINGING BOWL",
      image: "https://c.animaapp.com/Z9NKuOMK/img/rectangle-57@2x.png",
    },
    {
      id: 2,
      name: "GONG",
      image: "https://c.animaapp.com/Z9NKuOMK/img/rectangle-59@2x.png",
    },
    {
      id: 3,
      name: "RITUAL TOOLS",
      image: "https://c.animaapp.com/Z9NKuOMK/img/rectangle-57-1@2x.png",
    },
    {
      id: 4,
      name: "TONGUE DRUM",
      image: "https://c.animaapp.com/Z9NKuOMK/img/rectangle-59-1@2x.png",
    },
  ];

  return (
    <section className="w-full py-12 bg-neutral-100">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-medium [font-family:'Lora',Helvetica] mb-3">
              Category
            </h2>
            <p className="text-base [font-family:'Lora',Helvetica] font-normal text-[#00000080]">
              Explore every handcrafted piece, thoughtfully curated to reflect
              the spirit and tradition of Tibetan artistry.
            </p>
          </div>
          <Link to="/collections">
            <Button
              variant="outline"
              className="h-[42px] mt-4 md:mt-0 border-black rounded-none bg-white [font-family:'Lora',Helvetica] font-normal text-[#000000cc] text-lg"
            >
              View All Collections
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="w-full h-[420px] border-none rounded-none overflow-hidden relative"
              style={{
                backgroundImage: `url(${category.image})`,
                backgroundSize: "cover",
                backgroundPosition: "50% 50%",
              }}
            >
              <CardContent className="flex items-end justify-center h-full p-0">
                <div className="mb-5 w-auto min-w-[180px] h-[69px] bg-[#f5f5f5cc] rounded-[10px] flex items-center justify-center">
                  <span className="[font-family:'Lora',Helvetica] font-normal text-black text-xl">
                    {category.name}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
