// app/components/Header.js
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { checkUser } from '@/lib/checkUser';
import { FaHardHat, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import MobileMenu from './MobileMenu';
import { UserButton } from "@clerk/nextjs";

const Header = async () => {
  const user = await checkUser();
  const { userId } = auth();

  return (
    <header className="flex flex-col md:flex-row items-center justify-between p-4 shadow-md bg-white">
      <Link href="/">
      <div className="flex items-center justify-between w-full md:w-auto">
        <div className="flex items-center space-x-1 md:space-x-2">
          <FaHardHat className="text-2xl text-yellow-600" />
          <div className="text-2xl font-bold text-orange-500">CraftFlow</div>
        </div>
        <MobileMenu userId={userId} />
      </div>
      </Link>

      {/* Navigation for Desktop */}
      <div className="hidden md:flex items-center space-x-4 mt-4 md:mt-0">
        {!userId ? (
          <>
            <Link href="/sign-in">
              <button className="border border-orange-500 text-orange-500 px-4 py-2 rounded cursor-pointer hover:bg-orange-100 flex items-center focus:outline-none">
                <FaSignInAlt className="mr-1" />
                Sign In
              </button>
            </Link>
            <Link href="/sign-up">
              <button className="border border-orange-500 text-orange-500 px-4 py-2 rounded cursor-pointer hover:bg-orange-100 flex items-center focus:outline-none">
                <FaUserPlus className="mr-1" />
                Sign Up
              </button>
            </Link>
            <Link href="/">
          <button className="border border-orange-500 text-orange-500 px-4 py-2 rounded cursor-pointer hover:bg-orange-100 focus:outline-none">
            Join as Doctor
          </button>
        </Link>
          </>
        ) : (
          <UserButton afterSignOutUrl="/" className="ml-auto" />
        )}
        
      </div>
    </header>
  );
};

export default Header;
