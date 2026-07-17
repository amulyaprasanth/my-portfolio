import Hero from "@/components/sections/Hero";
import Navbar from "@/components/layout/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Image
        alt="background-image"
        src="/bg.jpg"
        fill
        priority
        className="object-cover"
      />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
        </main>
      </div>
    </div>
  );
}
