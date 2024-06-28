'use server'
import { db } from '@/lib/db'

/**
 * Fetches a user by their unique ID from the database.
 *
 * @param {string} userId - The unique ID of the user to retrieve.
 * @returns {Promise<Object>} - A promise that resolves to an object containing the user data if found,
 *                              or an error message if the fetch operation fails.
 */
export const getUserById = async (userId) => {
    try {
        // Attempt to find the user in the database by their unique ID
        const user = await db.user.findUnique({
            where: { id: userId }
        });

        // Check if the user was found and return the appropriate response
        if (user) {
            return { user };
        } else {
            return { error: 'User not found' };
        }
    } catch (error) {
        // Log the error for debugging purposes
        console.error(`Error fetching user with ID ${userId}:`, error);

        // Return an error message if the fetch operation fails
        return { error: 'Failed to fetch user' };
    }
};
