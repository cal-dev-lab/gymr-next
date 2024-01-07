import { HiPencil } from "react-icons/hi2";
import Box from "../common/Box";
import Heading from "../common/Heading";
import DeleteExerciseModal from "./actions/DeleteWorkoutModal";
import AddExerciseToWorkout from "./actions/AddExerciseToWorkout";

export default function WorkoutRow({ exercises, workout }) {
    return (
        <Box>
            <section className="flex items-center justify-between w-full">
                <Heading classNames="text-purple">
                    <b className="truncate">{workout.title ?? ""}</b>
                </Heading>

                {/* Actions */}
                <div className="flex gap-2">
                    <AddExerciseToWorkout workout={workout} exercises={exercises} />
                    
                    <HiPencil /> {/* Edit workout title modal */}
                    
                    <DeleteExerciseModal workout={workout} />
                </div>
            </section>
        </Box>
    )
}
