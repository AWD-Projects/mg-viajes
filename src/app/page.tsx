import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Destinations from "@/components/sections/Destinations";
import HowItWorks from "@/components/sections/HowItWorks";
import Experiences from "@/components/sections/Experiences";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Destinations />
        <HowItWorks />
        <Experiences />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
