import { getusers } from "@/app/actions/getUsers"
import UserItem from "./UserItem";


const UsersList = async () => {
    const { users, error } = await getusers();
    if (error) {
        return <p>{error}</p>;
    }
    return (
        <>
            <h3>Users</h3>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {users.map((user) => (
                    <UserItem key={user.id} user={user} />
                ))}
            </ul>
        </>
    );
}

export default UsersList;
