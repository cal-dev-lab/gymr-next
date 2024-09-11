import Loader from "../common/Loader";
import axios from "axios";
import { useSWRConfig } from "swr";
import ExerciseList from "./ExerciseList";
import toast from "react-hot-toast";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

export default function WorkoutCard({ workout, exercises }) {
    const { mutate } = useSWRConfig();

    const addExercise = async (exerciseId, exerciseTitle) => {
        try {
            const { data } = await axios.post(
                `/api/workout/${workout._id}/add-exercise`, {
                    exercise_id: exerciseId,
                    exercise_title: exerciseTitle,
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

    const removeExercise = async (exerciseId, exerciseTitle) => {
        try {
            const { data } = await axios.post(
                `/api/workout/${workout._id}/remove-exercise`, {
                    exercise_id: exerciseId,
                    exercise_title: exerciseTitle
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
            <ScrollArea key={workout._id} className="h-[300px] w-full rounded border p-4">
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
                          <div>
                              <b>No exercises found!</b>
                              <p>You can create exercises in the <Link className="text-purple" href="/settings/exercises">exercise settings</Link> page.</p>
                          </div>
                      )
                  }
              </div>
            </ScrollArea>
        </>
    )
}