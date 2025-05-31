import { Button } from "@/components/ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-screen bg-[url(https://c.animaapp.com/Z9NKuOMK/img/bowl1-1.png)] bg-cover bg-center">
      <div className="relative w-full max-w-xs pt-5 pl-12 top-1/2 transform -translate-y-1/4">
        <p className="font-['Lora',Helvetica] font-normal text-white text-base mb-2">
          Crafted to Heal
        </p>
        <h1 className="font-['Lora',Helvetica] font-medium text-white text-[46px] mb-6">
          Singing Bowl
        </h1>
        <Button
          variant="outline"
          className="w-40 h-10 border-2 border-[#ffffff80] rounded-none bg-transparent hover:bg-white/10 text-white font-['Lora',Helvetica] font-normal"
        >
          Discover more
        </Button>
      </div>
    </section>
  );
};
