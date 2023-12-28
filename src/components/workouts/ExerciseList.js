import Button from "../common/Button";

export default function ExerciseList({ workout, exercise, addExercise, removeExercise }) {
    return (
        <section className="flex items-center justify-between">
            <p>{exercise.title}</p>

            <div className="flex items-center gap-2">
                <Button
                    classnames={`${!workout.exercises.includes(exercise._id) ? "hidden" : ""}`}
                    onClick={() => removeExercise(exercise._id)}
                >
                        Remove exercise
                </Button>
                <Button
                    onClick={() => addExercise(exercise._id)}
                    disabled={workout.exercises.includes(exercise._id)}
                >
                        Add exercise
                </Button>
            </div>
            
        </section>
    )
}