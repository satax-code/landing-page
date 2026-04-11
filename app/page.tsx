import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { MissionValues } from "@/components/sections/MissionValues";
import { Services } from "@/components/sections/Services";
import { Team } from "@/components/sections/Team";
import { Careers } from "@/components/sections/Careers";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        <About />
        <MissionValues />
        <Services />
        <Team />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
