// app/components/Header.js
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import Image from "next/image";
import { checkUser } from '@/lib/checkUser';
import MenuToggle from './MenuToggle';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';

const Header = async () => {
  const user = await checkUser();
  const { userId } = auth();

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <Image
              src="/logo.jpg"
              alt="Logo"
              width={48}
              height={48}
              className="mr-2 rounded-full"
            />
            <span className="text-xl font-bold text-gray-700 -mt-1">
              BuildHub Pakistan
            </span>
          </div>
        </Link>
        <div className="hidden md:flex space-x-4 items-center text-gray-700">
          <Link href="/" className="px-4 py-2 hover:text-yellow-500">
            Home
          </Link>
          <Link href="#about" className="px-4 py-2 hover:text-yellow-500">
            About
          </Link>
          <Link href="#services" className="px-4 py-2 hover:text-yellow-500">
            Services
          </Link>
          <Link href="#contact" className="px-4 py-2 hover:text-yellow-500">
            Contact
          </Link>
          {!userId ? (
            <>
              <Link href="/sign-in" className="px-4 py-2 text-gray-700 hover:text-yellow-500 flex items-center">
                <FaSignInAlt className="mr-1" />
                Sign In
              </Link>
              <Link href="/sign-up" className="px-4 py-2 text-gray-700 hover:text-yellow-500 flex items-center">
                <FaUserPlus className="mr-1" />
                Sign Up
              </Link>
            </>
          ) : (
            <UserButton afterSignOutUrl="/" className="ml-auto" />
          )}
        </div>
        <div className="md:hidden">
          <MenuToggle userId={userId} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
