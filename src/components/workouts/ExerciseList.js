import Button from "../common/Button";
import { HiPlus, HiTrash } from "react-icons/hi2";

export default function ExerciseList({ workout, exercise, addExercise, removeExercise }) {
    console.log(workout)
    return (
        <section className="flex items-center justify-between">
            <p className="truncate">{exercise.title}</p>

            <div className="flex items-center gap-2">
                <Button
                    classnames={`${!workout?.exercises.includes(exercise._id) ? "hidden" : ""} gap-2`}
                    onClick={() => removeExercise(exercise._id)}
                >
                    <HiTrash />
                    <span className="hidden sm:flex">Remove exercise</span>
                </Button>
                <Button
                    onClick={() => addExercise(exercise._id)}
                    classnames="gap-2"
                    disabled={workout.exercises.includes(exercise._id)}
                >
                    <HiPlus />
                    <span className="hidden sm:flex">Add exercise</span>
                </Button>
            </div>
        </section>
    )
}