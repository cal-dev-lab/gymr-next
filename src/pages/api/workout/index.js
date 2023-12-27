import createMongoConnection from "@/utils/mongodb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
    const client = await createMongoConnection;
    const session = await getServerSession(req, res, authOptions);

    const id = session?.user.id;

    try {
        const foundWorkouts = await client.db().collection('workouts').find({
            userId: id
        }).toArray();

        if (!foundWorkouts) {
            return res.status(404).json({ message: 'Data not found' });
        }


        return res.status(200).json(foundWorkouts);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch workouts'})
    }

    // Mongoose??

    // Update styles with tailwind and tailwind config
    // Add components to components folder

    if (req.method === 'POST') {
        // handle post request
    }

    if (req.method === 'DELETE') {
        // handle delete request
    }
    const accounts = await client.db().collection('workouts').find({}).toArray();
    
    return res.status(200).json(accounts);
}