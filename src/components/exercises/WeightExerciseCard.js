export default function WeightExerciseCard({ exercise }) {
    return (
        <section className="flex items-center justify-between mt-2">
            <div>
                <p className="text-xs">Weight</p>
                <b className="text-purple">{exercise.weight ?? ""}kg</b>
            </div>

            <div>
                <p className="text-xs">Sets</p>
                <b className="text-purple">{exercise.sets ?? ""}</b>
            </div>

            <div>
                <p className="text-xs">Reps</p>
                <b className="text-purple">{exercise.repetitions ?? ""}</b>
            </div>
        </section>
    )
}