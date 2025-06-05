import { Card, CardContent } from "@/components/ui/card";

export const AboutUsSection = (): JSX.Element => {
  return (
    <section className="w-full">
      <div className="container mx-auto">
        <Card className="border-0 shadow-none">
          <CardContent className="relative h-[300px]">
            {/* Decorative corner images */}
            <div className="absolute w-[300px] h-[300px] top-0 left-0">
              <img
                className="w-[300px] h-[300px]"
                alt="Decorative corner element"
                src="https://c.animaapp.com/Z9NKuOMK/img/-301273800@2x.png"
              />
            </div>
            <div className="absolute w-[300px] h-[300px] bottom-0 right-0">
              <img
                className="w-[300px] h-[300px]"
                alt="Decorative corner element"
                src="https://c.animaapp.com/Z9NKuOMK/img/-301273800-1@2x.png"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col items-center justify-center py-16 relative z-10">
              <h2 className="[font-family:'Lora',Helvetica] font-semibold italic text-3xl text-center text-black mb-8">
                Come meet us in person!
              </h2>
              <p className="[font-family:'Lora',Helvetica] font-normal text-base text-center text-black max-w-[733px] leading-[30px]">
                We&apos;ll be at [Event Name] in [City] on [Date].
                <br />
                We&apos;d love to share our handcrafted treasures with you — see
                you there!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
