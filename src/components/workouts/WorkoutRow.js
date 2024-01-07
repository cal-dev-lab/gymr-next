import { useState } from "react";
import { HiChevronDown, HiPencil, HiPlus } from "react-icons/hi2";
import Box from "../common/Box";
import Heading from "../common/Heading";
import DeleteExerciseModal from "./actions/DeleteWorkoutModal";
import WorkoutCard from "./WorkoutCard";

export default function WorkoutRow({ exercises, workout }) {
    const [show, setShow] = useState(false);

    return (
        <Box>
            <section className="flex flex-col items-center justify-between gap-2">
                <div>
                    <Heading classNames="text-purple">
                        <b className="truncate">{workout.title ?? ""}</b>
                    </Heading>
                </div>

                <div className="flex items-center gap-2 w-full justify-between">
                        <div className="flex items-center gap-2">
                            <HiPencil />
                            <DeleteExerciseModal workout={workout} />
                        </div>

                        <div
                            onClick={() => setShow(!show)}
                            className="flex items-center gap-2 w-1/3"
                        >
                            <p className="text-xs">Exercises</p>
                            <HiChevronDown className={`${show && "rotate-180"}`} />
                        </div>
                </div>

                
            </section>

            {
                show && (
                    <WorkoutCard workout={workout} exercises={exercises} />
                )
            }
        </Box>
    )
}
