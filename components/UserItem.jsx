'use client'
import Image from "next/image";
import Link from "next/link";

const UserItem = ({ user }) => {
  return (
    <Link  href={`/users/${user.id}`} style={{ textDecoration: "none" }}>

    <li
      key={user.id}
      style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
          }}
          >
      <span>{user.name}</span>
      <Image
        src={user.imageUrl}
        alt={user.name}
        width={40}
        height={40}
        style={{ borderRadius: "50%" }}
        />
    </li>
    </Link>
  );
};

export default UserItem;
