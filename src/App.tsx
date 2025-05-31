import { Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { HeaderSection } from "@/components/layout/Header";
import { FooterSection } from "@/components/layout/Footer";
import Home from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";

export default function App() {
  return (
    <div className="min-h-screen bg-background flex flex-col w-full max-w-[1280px] mx-auto">
      <HeaderSection />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </main>
      <FooterSection />
      <Toaster />
    </div>
  );
}
