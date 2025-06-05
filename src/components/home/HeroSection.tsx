import { Button } from "@/components/ui/button";
import SingingBowl from "@/assets/home/singing-bowl.png";
import Gong from "@/assets/home/gong.png";
import Bead from "@/assets/home/beads.png";
import RitualTools from "@/assets/home/tools.png";
import { useEffect, useState } from "react";

const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve();
    img.onerror = reject;
  });
};

export const HeroSection = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    const loadImages = async () => {
      try {
        await Promise.all(slides.map((slide) => preloadImage(slide.image)));
        setIsLoading(false);
      } catch (error) {
        console.error("Error preloading images:", error);
        setIsLoading(false);
      }
    };

    loadImages();
  }, []);

  return (
    <section className="relative w-full h-[60vh] md:h-[90vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          } ${isLoading ? "blur-sm" : ""}`}
        >
          {/* Background image with overlay */}
          <div
            className="absolute inset-0 bg-black/30"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Content container */}
          <div className="relative h-full flex flex-col justify-center px-4 md:px-12 z-10">
            <div className="w-full max-w-xs md:max-w-md">
              <p className="font-['Lora',Helvetica] font-normal text-white text-sm md:text-base mb-2">
                {slide.description}
              </p>
              <h1 className="font-['Lora',Helvetica] font-medium text-white text-3xl md:text-[46px] mb-4 md:mb-6">
                {slide.title}
              </h1>
              <Button
                variant="outline"
                className="w-32 md:w-40 h-8 md:h-10 border-2 border-[#ffffff80] rounded-none bg-transparent hover:bg-white/10 text-white font-['Lora',Helvetica] font-normal text-sm md:text-base"
              >
                Discover more
              </Button>
            </div>
          </div>

          {/* Dots navigation */}
          <div className="absolute bottom-4 md:bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
            {slides.map((dot) => (
              <button
                key={dot.id}
                onClick={() => setCurrentSlide(dot.id - 1)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  dot.id - 1 === currentSlide ? "bg-white w-4" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${dot.id}`}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};
