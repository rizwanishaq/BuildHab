// components/HeroSection.js
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative h-[50vh] md:h-[75vh] lg:h-screen overflow-hidden">
      <Image
        src="/Hero.jpg"
        alt="Build Hub Pakistan"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-black opacity-50 z-1"></div>
      <div className="container mx-auto flex items-center justify-center h-full relative z-10 px-4 md:px-6">
        <div className="text-center text-white relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">Build Hub Pakistan</h1>
          <p className="mt-4 text-base md:text-lg lg:text-xl">We Do Constructions</p>
          <button className="mt-8 bg-yellow-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-full">Contact Us</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
