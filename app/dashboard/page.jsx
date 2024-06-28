import UsersList from "@/components/UsersList"
import { currentUser } from "@clerk/nextjs/server";

const DashBoard = async () => {
  const user = await currentUser();
  return (
    <div>
      <h1 className="text-2xl font-bold  mb-5">Welcome, {user && user.firstName}</h1>
      <UsersList />
    </div>
  )
}

export default DashBoard