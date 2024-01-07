import Loader from "../common/Loader";
import axios from "axios";
import { useSWRConfig } from "swr";
import ExerciseList from "./ExerciseList";
import toast from "react-hot-toast";

export default function WorkoutCard({ workout, exercises }) {
    const { mutate } = useSWRConfig()

    const addExercise = async (exerciseId) => {
        try {
            const { data } = await axios.post(
                `/api/workout/${workout._id}/add-exercise`, {
                    exercise_id: exerciseId
                },
              {
                headers: {
                  "Content-Type": "application/json",
                },
              },
            );

            if (data.error) {
                return toast.error(error.response.data.message);
            }



            mutate("/api/workout");
            toast.success("Added exercise successfully!");

          } catch (error) {
            toast.error(error)
          }
    }

    const removeExercise = async (exerciseId) => {
        try {
            const { data } = await axios.post(
                `/api/workout/${workout._id}/remove-exercise`, {
                    exercise_id: exerciseId
                },
              {
                headers: {
                  "Content-Type": "application/json",
                },
              },
            );

            if (data.error) {
                return toast.error(data.error);
            }



            mutate("/api/workout");
            toast.success("Removed exercise successfully!");

          } catch (error) {
            toast.error(error)
          }
    }

    return (
        <>
            <div key={workout._id}>
                    <div className="space-y-2 mt-2">
                        {
                            exercises?.length > 0 ? (
                                exercises.map(exercise => (
                                    <ExerciseList
                                        workout={workout}
                                        exercise={exercise}
                                        addExercise={addExercise}
                                        removeExercise={removeExercise}
                                    />
                                ))
                            ) : (
                                <Loader />
                            )
                        }
                    </div>
            </div>
        </>
    )
}