import { AboutUsSection } from "@/components/home/AboutUsSection";
import { CallToActionSection } from "@/components/home/CallToActionSection";
import { CategorySection } from "@/components/home/CategorySection";
import { HeroSection } from "@/components/home/HeroSection";
import { FooterSection } from "@/components/layout/Footer";
import { HeaderSection } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full relative">
        {/* Header Section */}
        <section className="w-full">
          <HeaderSection />
        </section>
        {/* Hero Section */}
        <section className="w-full relative">
          <HeroSection />

          {/* Hero navigation dots */}
          <div className="flex justify-center gap-3 mt-4 absolute bottom-0 left-1/2 -translate-x-1/2">
            <div className="bg-[#000000b2] w-2 h-2.5 rounded-[4px/5px]" />
            <div className="bg-white w-2 h-2.5 rounded-[4px/5px]" />
            <div className="bg-white w-2 h-2.5 rounded-[4px/5px]" />
            <div className="bg-white w-2 h-2.5 rounded-[4px/5px]" />
          </div>
        </section>

        {/* Call To Action Section */}
        <section className="w-full">
          <CallToActionSection />
        </section>
        {/* Category Section with background */}
        <section className="w-full bg-[url(https://c.animaapp.com/Z9NKuOMK/img/rectangle-19.png)] bg-cover bg-[50%_50%] relative">
          <CategorySection />

          {/* About Us Button */}
          <div className="flex justify-center pb-12">
            <Button className="w-44 h-[54px] bg-[#ffbb00] rounded-[20px] text-[#161616] text-xl [font-family:'Lora',Helvetica] font-normal">
              About Us
            </Button>
          </div>
        </section>

        {/* About Us Section */}
        <section className="w-full">
          <AboutUsSection />
        </section>

        {/* Footer Section */}
        <section className="w-full">
          <FooterSection />
        </section>
      </div>
    </div>
  );
}
