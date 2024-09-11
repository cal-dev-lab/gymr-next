import createMongoConnection from "@/utils/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    const client = await createMongoConnection;

    // Remove exercise from workout
    if (req.method === 'POST') {
        const { exercise_id, exercise_title } = req.body;

        try {
            const addExercise = await client.db().collection('workouts').updateOne(
                { _id: new ObjectId(req.query.id) },
                { $pull: { exercises: exercise_id, exercise_title } },
                false, // Upsert
                true // Multi
            )
    
            if (!addExercise) {
                return res.status(400).json({ message: 'Failed to remove exercise!' });
            }

            return res.status(200).json({ message: "Successfully removed exercise!" });
        } catch (error) {
            res.status(500).json({ message: 'Failed to remove exercise!'})
        }
    }
}