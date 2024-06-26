import { getusers } from "@/app/actions/getUsers"
import Image from 'next/image'

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
                    <li key={user.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                        <span>{user.name}</span>
                        <Image
                            src={user.imageUrl}
                            alt={user.name}
                            width={40}
                            height={40}
                            style={{ borderRadius: '50%' }}
                        />
                    </li>
                ))}
            </ul>
        </>
    );
}

export default UsersList;
