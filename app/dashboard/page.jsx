import UsersList from "@/components/UsersList"
import { currentUser } from "@clerk/nextjs/server";

const DashBoard = async () => {
  const user = await currentUser();
  return (
    <div>
      <h1 className="text-2xl font-bold  mb-5">Welcome, {user && user.firstName}</h1>
      <p className="mb-5">This is the demo site for the construction uber. Go ahead and explore the world</p>
      {/* <AddUserInformation /> */}
      <UsersList />
    </div>
  )
}

export default DashBoard