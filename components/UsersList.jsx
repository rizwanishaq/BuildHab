import { getusers } from "@/app/actions/getUsers";
import UserItem from "./UserItem";

const UsersList = async () => {
    const { users, error } = await getusers();
    
    if (error) {
        return <p className="text-red-500">{error}</p>;
    }

    return (
        <div className="container mx-auto p-4">
            <h3 className="text-2xl font-semibold mb-4">Users</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {users.map((user) => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
}

export default UsersList;
