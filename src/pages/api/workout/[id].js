import createMongoConnection from "@/utils/mongodb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
    const client = await createMongoConnection;
    const session = await getServerSession(req, res, authOptions);

    const id = session?.user.id;

    // Get workouts by userId
    if (req.method === 'GET') {
        try {
            const workouts = await client.db().collection('workouts').find({
                userId: id // @TODO: Change to user_id instead
            }).toArray();
    
            if (!workouts) {
                return res.status(404).json({ message: 'Workouts not found' });
            }
    
    
            return res.status(200).json(workouts);
        } catch (error) {
            res.status(500).json({ message: 'Failed to fetch workouts'})
        }
    }
    
    // Create workout and assign it the logged in users: userId
    if (req.method === 'POST') {
        const { title } = req.body;
        try {
            const addWorkout = await client.db().collection('workouts').insertOne({
                userId: id, // @TODO: Change to user_id instead
                title: title
            })
    
            if (!addWorkout) {
                return res.status(404).json({ message: 'Failed to create workout' });
            }
    
    
            return res.status(201).json({addWorkout});
        } catch (error) {
            res.status(500).json({ message: 'Could not find collection'})
        }
    }

    if (req.method === 'DELETE') {
        // handle delete request
    }
}