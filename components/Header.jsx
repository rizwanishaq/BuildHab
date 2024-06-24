import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const { userId } = auth();
  return (
    <>
      <nav className="bg-gradient-to-r from-blue-500 via-gray-500 to-green-700 py-4 px-6 flex items-center justify-between mb-5">
        <div className="flex items-center">
          <Link href="/">
            <div className="flex items-center">
              <Image
                src="/logo.jpg"
                alt="Logo"
                width={48}
                height={48}
                className="mr-2 rounded-full"
              />
              <span className="text-xl font-bold text-white -mt-1">
                BuildHub Pakistan
              </span>
            </div>
          </Link>
        </div>
        <div className="text-white flex items-center">
          {!userId && (
            <>
              <Link
                href="sign-in"
                className="text-gray-200 hover:text-white mr-4"
              >
                Sign In
              </Link>
              <Link
                href="sign-up"
                className="text-gray-200 hover:text-white mr-4"
              >
                Sign Up
              </Link>
            </>
          )}
          {/* {userId && (
                        <Link href="profile" className="text-gray-200 hover:text-white mr-4">Profile</Link>
                    )} */}
          <div className="ml-auto">
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
