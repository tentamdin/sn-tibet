import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to Tibetan Social Network</h1>
          <p className="text-xl mb-8">Connect with Tibetan communities worldwide. Share, learn, and grow together.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-700 hover:bg-blue-50">Join Now</Button>
            <Button variant="outline" className="text-white border-white hover:bg-blue-700">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
