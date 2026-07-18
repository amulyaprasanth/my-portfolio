import Hero from "@/components/sections/Hero";
import Navbar from "@/components/layout/Navbar";
import Image from "next/image";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
      <div className="relative min-h-screen">
        {/* Background */}
        <Image
            src="/bg.jpg"
            alt="Background"
            fill
            priority
            className="-z-10 fixed inset-0 object-cover"
        />

        {/* Foreground */}
        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills/>
        </main>
      </div>
  );
}
