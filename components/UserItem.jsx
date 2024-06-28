'use client'
import Image from "next/image";
import Link from "next/link";

const UserItem = ({ user }) => {
  return (
    <Link href={`/users/${user.id}`} className="block">
      <li className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg mb-4 hover:bg-gray-100 transition duration-300">
        <div className="flex items-center space-x-4 overflow-hidden">
          <Image
            src={user.imageUrl}
            alt={user.name}
            width={40}
            height={40}
            className="rounded-full flex-shrink-0"
          />
          <div className="overflow-hidden">
            <p className="text-lg font-medium truncate">{user.name}</p>
            <p className="text-sm text-gray-600 truncate">{user.email}</p>
          </div>
        </div>
      </li>
    </Link>
  );
};

export default UserItem;
