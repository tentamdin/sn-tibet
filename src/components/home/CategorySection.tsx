import { Card, CardContent } from "@/components/ui/card";

export const CategorySection = (): JSX.Element => {
  const welcomeText = {
    title: "Welcome To Samphel Norbu",
    paragraphs: [
      {
        id: "intro",
        text: "Your sanctuary for Tibetan and Himalayan handicrafts",
      },
      {
        id: "description",
        text: "For many years, Samphel Norbu has been honored to serve individuals on their journey toward mindfulness, healing, and inner peace. Specializing in authentic singing bowls, Om healing drums, meditation scarves, handmade jewelry, and more, we are proud to offer a curated selection of traditional crafts that support meditation and holistic well-being.",
      },
      {
        id: "mission",
        text: "Whether you're looking for tools to deepen your practice or meaningful gifts crafted with care, Samphel Norbu is here to share the beauty and wisdom of Tibetan artistry with you.",
      },
      {
        id: "greeting",
        text: "Thank you for visiting — we're so glad you're here.",
      },
    ],
  };

  return (
    <section className="w-full max-w-[800px] mx-auto py-8 md:py-16 px-4 md:px-6">
      <Card className="bg-[#9f9e9e99] p-4 md:p-6 backdrop-blur-sm shadow-lg">
        <h2 className="text-2xl md:text-3xl font-medium text-center mb-6 md:mb-8 [font-family:'Lora',Helvetica] [text-shadow:0px_4px_4px_#00000040]">
          {welcomeText.title}
        </h2>
        <CardContent className="p-0">
          <div className="[font-family:'Lora',Helvetica] font-normal text-black text-base md:text-xl text-center space-y-4 md:space-y-6">
            {welcomeText.paragraphs.map((paragraph) => (
              <p
                key={paragraph.id}
                className={`${
                  paragraph.id === "intro"
                    ? "font-medium text-lg md:text-2xl"
                    : "leading-relaxed"
                }`}
              >
                {paragraph.text}
              </p>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
