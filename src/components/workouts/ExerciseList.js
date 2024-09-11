import Button from "../common/Button";
import { HiPlus, HiTrash } from "react-icons/hi2";

export default function ExerciseList({ workout, exercise, addExercise, removeExercise }) {
    console.log(workout)
    return (
        <section className="flex items-center justify-between">
            <p className="truncate text-sm">{exercise.title ?? ""}</p>

            <div className="">
                {
                    workout.exercises.includes(exercise._id) ? (
                        <Button
                            classnames="gap-2"
                            onClick={() => removeExercise(exercise._id, exercise.title)}
                        >
                            <HiTrash />
                            <span className="hidden sm:flex">Remove</span>
                        </Button>
                    ) : (
                        <Button
                            onClick={() => addExercise(exercise._id, exercise.title)}
                            classnames="gap-2"
                        >
                            <HiPlus />
                            <span className="hidden sm:flex">Add</span>
                        </Button>
                    )
                }
            </div>
        </section>
    )
}