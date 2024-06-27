import Image from 'next/image';
import { getUserById } from "@/app/actions/getUser";

const Page = async ({ params }) => {
    const { user, error } = await getUserById(params.userId);

    if (error) {
        return <div className="text-red-500 p-6">Error: {error}</div>;
    }

    if (!user) {
        return <div className="text-gray-500 p-6">User not found</div>;
    }

    return (
        <div className="min-w-screen bg-gray-100">
            <div className="bg-white w-full p-6 shadow-lg flex flex-col items-center">
                <Image
                    src={user.imageUrl}
                    alt={user.name}
                    width={128}
                    height={128}
                    className="rounded-full mt-6"
                />
                <h2 className="text-2xl font-semibold mt-4">{user.name}</h2>
                <p className="text-gray-700 mt-2">{user.email}</p>
            </div>
        </div>
    );
};

export default Page;
