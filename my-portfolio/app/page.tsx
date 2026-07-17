import Hero from "@/components/sections/Hero";
import Navbar from "@/components/layout/Navbar";
import Image from "next/image";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="relative">
        <Navbar />
        <Image
          alt="background-image"
          src="/bg.jpg"
          fill
          priority
          className="fixed inset-0 object-cover"
        />
        <main>
          <Hero />
          <About />
        </main>
      </div>
    </div>
  );
}
