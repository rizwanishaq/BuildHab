'use server'
import { db } from '@/lib/db'
import { auth } from '@clerk/nextjs/server'

/**
 * Fetches all users from the database in descending order by their IDs.
 *
 * @returns {Promise<Object>} - A promise that resolves to an object containing the users data if successful,
 *                              or an error message if the fetch operation fails.
 */
export const getusers = async () => {
    const { userId } = auth();

    // Ensure the user is authenticated
    if (!userId) {
        return { error: 'User not found' };
    }

    try {
        // Fetch all users from the database, ordered by ID in descending order
        const users = await db.user.findMany({
            orderBy: { id: 'desc' }
        });

        // Return the fetched users
        return { users };

    } catch (error) {
        // Log the error for debugging purposes
        console.error('Error fetching users:', error);

        // Return an error message if the fetch operation fails
        return { error: 'Failed to fetch users' };
    }
};
