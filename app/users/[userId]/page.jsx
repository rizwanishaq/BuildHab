import Image from 'next/image';
import { getUserById } from "@/app/actions/getUser";
import services from "@/lib/servicesData"; // Import services data

const Page = async ({ params }) => {
    const { user, error } = await getUserById(params.userId);

    if (error) {
        return <div className="text-red-500 p-6">Error: {error}</div>;
    }

    if (!user) {
        return <div className="text-gray-500 p-6">User not found</div>;
    }

    return (
        <div className="min-w-screen bg-gray-100 flex justify-center items-center py-10">
            <div className="bg-white w-full max-w-4xl p-6 shadow-lg flex flex-col md:flex-row items-center md:items-start">
                <div className="flex flex-col items-center md:items-start md:w-1/2 md:pr-8">
                    <Image
                        src={user.imageUrl}
                        alt={user.name}
                        width={128}
                        height={128}
                        className="rounded-full mt-6 md:mt-0"
                    />
                    <h2 className="text-2xl font-semibold mt-4">{user.name}</h2>
                    <p className="text-gray-700 mt-2">{user.email}</p>
                </div>
                <div className="md:w-1/2 w-full mt-8 md:mt-0">
                    <form className="bg-gray-50 p-6 rounded-lg shadow-md">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dob">
                                Date of Birth
                            </label>
                            <input
                                type="date"
                                id="dob"
                                name="dob"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
                                Gender
                            </label>
                            <select
                                id="gender"
                                name="gender"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                                Address
                            </label>
                            <textarea
                                id="address"
                                name="address"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                rows="3"
                            ></textarea>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Select Skills
                            </label>
                            {services.map((service, index) => (
                                <div key={index} className="flex items-center mb-2">
                                    <input
                                        type="checkbox"
                                        id={`service-${index}`}
                                        name="services"
                                        value={service.title}
                                        className="mr-2"
                                    />
                                    <label htmlFor={`service-${index}`} className="flex items-center">
                                        <service.icon className="mr-2 text-blue-500" />
                                        {service.title}
                                    </label>
                                </div>
                            ))}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Role
                            </label>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="provider"
                                    name="role"
                                    value="provider"
                                    className="mr-2"
                                />
                                <label htmlFor="provider" className="mr-4">Provider</label>
                                <input
                                    type="radio"
                                    id="enduser"
                                    name="role"
                                    value="enduser"
                                    className="mr-2"
                                />
                                <label htmlFor="enduser">End User</label>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Page;
