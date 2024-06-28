// components/HeroSection.js
import Image from 'next/image';
import Link from 'next/link';

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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">BuildHub Pakistan</h1>
          <p className="text-lg md:text-xl text-white mb-6">
            Leading Construction Solutions
          </p>
          <p className="text-base md:text-lg text-gray-200 mb-8">
            Welcome to BuildHub Pakistan, where we bring your construction dreams to life. 
            With a commitment to excellence and a passion for innovation, we offer a 
            comprehensive range of construction services tailored to meet your unique needs. 
            Explore our services and see how we can help build your future.
          </p>
          <Link href="#contact" passHref>
            <button className="bg-yellow-500 text-white px-6 py-3 rounded-full hover:bg-yellow-600 transition duration-300">
              Get a Free Quote
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
