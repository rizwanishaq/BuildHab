import Image from 'next/image';
import { FaCrosshairs } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 py-20" id="hero">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Find and Book the <span className="text-yellow-400">Best Doctors</span> near you
          </h1>
          <div className="mt-6 flex justify-center md:justify-start">
            <div className="bg-white flex items-center rounded-lg overflow-hidden shadow-lg">
              <input
                type="text"
                placeholder="Lahore"
                className="py-3 px-4 text-gray-700 focus:outline-none"
              />
              <button className="bg-gray-100 px-4 py-3 text-gray-700 flex items-center">
                <FaCrosshairs className="mr-2" /> Detect
              </button>
              <input
                type="text"
                placeholder="Doctors, Hospital, Conditions"
                className="py-3 px-4 text-gray-700 focus:outline-none flex-grow"
              />
              <button className="bg-orange-500 text-white px-6 py-3">
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="mt-10 md:mt-0">
          <Image
            src="/Hero.jpg" // Ensure the image is in the public/images directory or replace with appropriate URL
            alt="Doctor"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
