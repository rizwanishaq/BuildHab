// components/HeroSection.js
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto flex items-center justify-center h-full relative z-10">
        <div className="text-center text-white">
          <Image
            src="/Hero.jpg"
            alt="Build Hub Pakistan"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10">
            <h1 className="text-5xl font-extrabold">Build Hub Pakistan</h1>
            <p className="mt-4 text-xl">We Do Constructions</p>
            <button className="mt-8 bg-yellow-500 text-white px-6 py-3 rounded-full">Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
