import createMongoConnection from "@/utils/mongodb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
    const client = await createMongoConnection;
    const session = await getServerSession(req, res, authOptions);

    const id = session?.user.id;

    // Get exercises by user_id
    if (req.method === 'GET') {
        try {
            const exercises = await client.db().collection('exercises').find({
                user_id: id
            }).toArray();
    
            if (!exercises) {
                return res.status(404).json({ message: 'Exercises not found!' });
            }
    
    
            return res.status(200).json(exercises);
        } catch (error) {
            res.status(500).json({ message: 'Failed to fetch workouts!'})
        }
    }
    
    // Create exercise and assign it the logged in users: user_id
    if (req.method === 'POST') {
        const { title, weight, sets, repetitions, duration, type } = req.body;
        try {
            const addExercise = await client.db().collection('exercises').insertOne({
                user_id: id,
                title: title,
                weight: weight,
                sets: sets,
                repetitions: repetitions,
                duration: duration,
                type: type
            })

            if (!title) {
                return res.status(400).json({ message: "Title is required!" });
            }

            if (type == "weight") {
                if (!weight) {
                    return res.status(400).json({ message: "Weight is required!" });
                }
            }

            if (!sets) {
                return res.status(400).json({ message: "Sets are required!" });
            }

            if (!repetitions) {
                return res.status(400).json({ message: "Repetitions are required!" });
            }

            if (type == "cardio") {
                if (!duration) {
                    return res.status(400).json({ message: "Duration is required!" });
                }
            }
    
            if (!addExercise) {
                return res.status(400).json({ message: 'Failed to create exercise!' });
            }
    
    
            return res.status(200).json({addExercise});
        } catch (error) {
            res.status(500).json({ message: 'Could not find collection!'})
        }
    }
}