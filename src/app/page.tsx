import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Stack } from "@/components/Stack";
import { Stats } from "@/components/Stats";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top" className="mx-auto w-full max-w-[1120px] flex-1 px-6 md:px-10">
        <Hero />
        <Stats />
        <About />
        <Work />
        <Experience />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
