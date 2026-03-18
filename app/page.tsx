import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SponsorsSection from "@/components/sections/SponsorsSection";
import ScheduleSection from "@/components/sections/ScheduleSection";
import FaqSection from "@/components/sections/FaqSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SponsorsSection />
        <ScheduleSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
