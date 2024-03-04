import Featured from "@/components/Featured";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialCards from "@/components/TestimonialCards";
import Webinars from "@/components/Webinars";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-900 antialiased bg-grid-white/[0.02]">
      {" "}
      <HeroSection />
      <Featured />
      <WhyChooseUs />
      <TestimonialCards />
      <Webinars />
      <Instructors />
      <Footer />
    </main>
  );
}
