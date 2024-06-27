// app/components/MenuToggle.js
'use client';
import { useState } from 'react';
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";


const MenuToggle = ({userId}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-700 hover:text-yellow-500 focus:outline-none md:hidden"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
          />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 pt-2 pb-4 space-y-2 md:hidden">
          <Link href="/" className="block px-4 py-2 text-gray-700 hover:text-yellow-500">
            Home
          </Link>
          <Link href="#" className="block px-4 py-2 text-gray-700 hover:text-yellow-500">
            About
          </Link>
          <Link href="#" className="block px-4 py-2 text-gray-700 hover:text-yellow-500">
            Services
          </Link>
          <Link href="#" className="block px-4 py-2 text-gray-700 hover:text-yellow-500">
            Contact
          </Link>
          {!userId ? (
            <>
              <Link href="/sign-in" className="block px-4 py-2 text-gray-700 hover:text-yellow-500">
                Sign In
              </Link>
              <Link href="/sign-up" className="block px-4 py-2 text-gray-700 hover:text-yellow-500">
                Sign Up
              </Link>
            </>
          ) : (
            <UserButton afterSignOutUrl="/" className="block px-4 py-2 text-gray-700 hover:text-yellow-500" />
          )}
        </div>
      )}
    </>
  );
};

export default MenuToggle;
