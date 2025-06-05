import { Card, CardContent } from "@/components/ui/card";
import TopLeftCorner from "@/assets/decorative/corner-top-left.png";
import BottomRightCorner from "@/assets/decorative/corner-bottom-right.png";

export const AboutUsSection = (): JSX.Element => {
  return (
    <section className="w-full">
      <Card className="border-0 shadow-none">
        <CardContent className="relative min-h-[300px] py-8 md:py-16 align-middle">
          {/* Decorative corner images */}
          <div className="absolute w-[150px] md:w-[300px] h-[150px] md:h-[300px] top-0 left-0">
            <img
              className="w-full h-full object-contain"
              alt="Decorative corner element"
              src={TopLeftCorner}
              loading="lazy"
            />
          </div>
          <div className="absolute w-[150px] md:w-[300px] h-[150px] md:h-[300px] bottom-0 right-0">
            <img
              className="w-full h-full object-contain"
              alt="Decorative corner element"
              src={BottomRightCorner}
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col items-center justify-center relative z-10">
            <h2 className="[font-family:'Lora',Helvetica] font-semibold italic text-xl md:text-3xl text-center text-black mb-4 md:mb-8 px-4">
              Come meet us in person!
            </h2>
            <div className="[font-family:'Lora',Helvetica] font-normal text-sm md:text-base text-center text-black max-w-[733px] leading-relaxed md:leading-[30px] px-4">
              <p>
                We&apos;ll be at the Tibetan Handicraft Exhibition
                <br className="hidden md:block" /> in San Francisco on June
                15-16, 2025.
              </p>
              <p className="mt-2 md:mt-4">
                We&apos;d love to share our handcrafted treasures with you — see
                you there!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
