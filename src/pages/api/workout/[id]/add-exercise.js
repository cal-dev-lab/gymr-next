import createMongoConnection from "@/utils/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    const client = await createMongoConnection;

    // Add exercise to workout array
    if (req.method === 'POST') {
        const { exercise_id, exercise_title, exercise_reps } = req.body;

        try {
            const addExercise = await client.db().collection('workouts').updateOne(
                { _id: new ObjectId(req.query.id) },
                { $addToSet: { exercises: exercise_id, exercise_title, exercise_reps } }
            )
    
            if (!addExercise) {
                return res.status(400).json({ message: 'Failed to add exercise!' });
            }
    
            if (addExercise.modifiedCount == 0) {
                return res.status(409).json({ message: "This exercise already exists for this workout!" })
            }

            console.log("Success: ", exercise_title, exercise_id, exercise_reps)

            return res.status(200).json({ message: "Successfully added exercise!" });
        } catch (error) {
            res.status(500).json({ message: 'Failed to add exercise!'})
        }
    }
}