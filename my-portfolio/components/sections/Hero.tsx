import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="py-24">
      <div className="max-w-7xl mx-auto px-30">
        <div className="flex items-center justify-between">
          {/* Left Content */}
          <div className="flex flex-col gap-4">
            <p className="text-3xl">Hello, I'm</p>

            <h1 className="text-6xl font-bold text-blue-500">
              Amulya Prasanth
            </h1>

            <h2 className="text-2xl text-gray-600">
              Applied AI Engineer | Machine Learning Engineer
            </h2>

            <a
              href="#contact"
              className="inline-block font-bold w-fit rounded-2xl bg-blue-700/70 px-6 py-3 border border-transparent transition-all duration-300 hover:border-white hover:bg-blue-700/0">
              Contact Me
            </a>
          </div>

          {/* Right Content */}
          <div>
            <Image
              alt="profile-image"
              src="/profile.jpg"
              width={300}
              height={300}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
