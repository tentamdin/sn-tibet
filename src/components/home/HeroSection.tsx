import { Button } from "@/components/ui/button";
import SingingBowl from "@/assets/home/singing-bowl.png";
import Gong from "@/assets/home/gong.png";
import Bead from "@/assets/home/beads.png";
import RitualTools from "@/assets/home/tools.png";
import { useEffect, useState } from "react";

export const HeroSection = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: SingingBowl,
      title: "Singing Bowl",
      description: "Crafted to Heal",
    },
    {
      id: 2,
      image: Gong,
      title: "Gong",
      description: "Tone. Touch. Transcend.",
    },
    {
      id: 3,
      image: RitualTools,
      title: "Ritual Tools",
      description: "Symbols of Power",
    },
    {
      id: 4,
      image: Bead,
      title: "Prayer Bead/ Mala",
      description: "Mantra. Motion. Mind.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
            {slides.map((dot) => (
              <div
                key={dot.id}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  dot.id - 1 === currentSlide ? "bg-black w-4" : "bg-white/50"
                }`}
              />
            ))}
          </div>
          <div className="relative w-full max-w-xs pt-5 pl-12 top-1/2 transform -translate-y-1/4">
            <p className="font-['Lora',Helvetica] font-normal text-white text-base mb-2">
              {slide.description}
            </p>
            <h1 className="font-['Lora',Helvetica] font-medium text-white text-[46px] mb-6">
              {slide.title}
            </h1>
            <Button
              variant="outline"
              className="w-40 h-10 border-2 border-[#ffffff80] rounded-none bg-transparent hover:bg-white/10 text-white font-['Lora',Helvetica] font-normal"
            >
              Discover more
            </Button>
          </div>
        </div>
      ))}
    </section>
  );
};
