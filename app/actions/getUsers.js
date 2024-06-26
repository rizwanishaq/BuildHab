'use server'
import { db } from '@/lib/db'
import {auth} from '@clerk/nextjs/server'


export const getusers = async () => {
    const {userId} = auth();
    
    if(!userId) {
        return {error: 'User not found'}
    }

    try {
        const users = await db.user.findMany({
            orderBy: {id: 'desc'}
        })
        return {users}
        
    } catch (error) {
        console.log(error)
        return {error: 'Failed to fetch users'}
    }
}