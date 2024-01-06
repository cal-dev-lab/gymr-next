import { useState } from "react";
import Box from "../common/Box";
import Heading from "../common/Heading";
import Loader from "../common/Loader";
import axios from "axios";
import { useSWRConfig } from "swr";
import ExerciseList from "./ExerciseList";
import toast from "react-hot-toast";

export default function WorkoutCard({ workout, exercises }) {
    const [show, setShow] = useState(false);
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
            <Box colour="purple" key={workout._id}>
                <div className="flex items-center justify-between">
                    <Heading classNames="text-white">
                        <b>{workout.title}</b>
                    </Heading>

                    <button onClick={() => setShow(!show)}>Click me</button>
                </div>

                

                {
                show && (
                    <Box classnames="space-y-2 mt-2">
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
                    </Box>
                )
            }
            </Box>

            
        </>
    )
}