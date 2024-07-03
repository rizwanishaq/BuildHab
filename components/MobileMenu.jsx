"use client"; // Ensures this component runs on the client side

import { useState } from "react";
import Link from "next/link";
import { FaSignInAlt, FaUserPlus, FaBars, FaTimes } from 'react-icons/fa';
import { UserButton } from "@clerk/nextjs";

const MobileMenu = ({ userId }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      <button
        className="text-2xl focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
      {menuOpen && (
        <div className="absolute right-0 top-12 bg-white shadow-lg rounded-lg p-4 w-48 z-50">
          <div className="flex flex-col items-start space-y-2">
            {!userId ? (
              <>
                <Link href="/sign-in">
                  <button className="border border-orange-500 text-orange-500 px-4 py-2 rounded cursor-pointer hover:bg-orange-100 flex items-center focus:outline-none w-full text-left">
                    <FaSignInAlt className="mr-1" />
                    Sign In
                  </button>
                </Link>
                <Link href="/sign-up">
                  <button className="border border-orange-500 text-orange-500 px-4 py-2 rounded cursor-pointer hover:bg-orange-100 flex items-center focus:outline-none w-full text-left">
                    <FaUserPlus className="mr-1" />
                    Sign Up
                  </button>
                </Link>
              </>
            ) : (
              <UserButton afterSignOutUrl="/" className="ml-auto w-full text-left" />
            )}
            <Link href="/">
              <button className="border border-orange-500 text-orange-500 px-4 py-2 rounded cursor-pointer hover:bg-orange-100 focus:outline-none w-full text-left">
                Join as Doctor
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
