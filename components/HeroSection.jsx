'use client'
import Image from 'next/image';
import { FaCrosshairs } from 'react-icons/fa';
import { useState } from 'react';

const HeroSection = () => {
  const [location, setLocation] = useState('');

  const handleDetectLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // Here you can use a reverse geocoding API to get the location name from coordinates
          // For simplicity, we'll just set the coordinates as the location
          setLocation(`Lat: ${latitude}, Lon: ${longitude}`);
        },
        (error) => {
          console.error("Error detecting location:", error);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <section className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 py-20" id="hero">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Discover and Hire the <span className="text-yellow-400">Best Construction Professionals</span> Near You
          </h1>
          <p className="mt-4 text-lg text-white">Find trusted electricians, plumbers, and more at your location.</p>
          <div className="mt-6 flex justify-center md:justify-start">
            <div className="bg-white flex items-center rounded-lg overflow-hidden shadow-lg">
              <input
                type="text"
                placeholder="Enter your location"
                className="py-3 px-4 text-gray-700 focus:outline-none"
                value={location}
                readOnly
              />
              <button
                className="bg-gray-100 px-4 py-3 text-gray-700 flex items-center"
                onClick={handleDetectLocation}
              >
                <FaCrosshairs className="mr-2" /> Detect
              </button>
              <input
                type="text"
                placeholder="Search for electricians, plumbers, etc."
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
            alt="Construction Work"
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
