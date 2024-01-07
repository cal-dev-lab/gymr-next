import createMongoConnection from "@/utils/mongodb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]";
import { ObjectId } from "bson";

export default async function handler(req, res) {
    const client = await createMongoConnection;
    const session = await getServerSession(req, res, authOptions);

    const id = req.query;

    // Delete workout by its id
    if (req.method === 'DELETE') {
        try {
            const deleteWorkout = await client.db().collection('workouts').deleteOne({
                _id: new ObjectId(id)
            })
    
            if (!deleteWorkout) {
                return res.status(400).json({ message: 'Failed to delete workout!' });
            }
    
    
            return res.status(200).json({deleteWorkout});
        } catch (error) {
            res.status(500).json({ message: error.message || 'Internal server error!'})
        }
    }
}