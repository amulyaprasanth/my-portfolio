import Image from "next/image";
import ScrollIndicator from "../ui/ScrollIndication";

export default function Hero() {
  return (
    <section id="hero" className="relative">
      <div className="max-w-7xl mx-auto px-30">
        <div className="h-screen flex items-center justify-between">
          {/* Left Content */}
          <div className="flex flex-col gap-4">
            <p className="text-3xl">Hello, I'm</p>

            <h1 className="text-6xl font-bold text-sky-500">
              Amulya Prasanth
            </h1>

            <h2 className="text-2xl text-gray-600">
              AI Engineer | Machine Learning Engineer
            </h2>

            <a
              href="#contact"
              className="inline-block font-bold w-fit rounded-2xl bg-blue-700/70 px-6 py-3 border border-transparent transition-all duration-300 hover:border-white hover:bg-blue-700/0">
              Contact Me
            </a>
          </div>

          {/* Right Content */}
          <div className="relative w-[300px] h-[400px] overflow-hidden rounded-full">
            <Image
              src="/profile.jpg"
              alt="Profile"
              fill
              sizes="auto"
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-50">
        <ScrollIndicator />
      </div>
    </section>
  );
}
