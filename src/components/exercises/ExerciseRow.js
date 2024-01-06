import { useState } from "react";
import { HiChevronDown, HiPencil, HiTrash } from "react-icons/hi2";
import Box from "../common/Box";
import Heading from "../common/Heading";
import WeightExerciseCard from "./WeightExerciseCard";
import CardioExerciseCard from "./CardioExerciseCard";
import DeleteExerciseModal from "./actions/DeleteExerciseModal";

export default function ExerciseRow({ exercise }) {
    const [show, setShow] = useState(false);

    return (
        <Box>
            <section className="flex items-center justify-between">    
                <Heading classNames="text-purple flex items-center gap-2">
                    <b>{exercise.title ?? ""}</b>
                    <HiPencil />
                    <DeleteExerciseModal exercise={exercise} />
                </Heading>

                <div
                    onClick={() => setShow(!show)}
                    className="flex items-center gap-2"
                >
                    <p className="text-xs">More info</p>
                    <HiChevronDown className={`${show && "rotate-180"}`} />
                </div>
            </section>

            {
                show && (
                    <>
                        {
                            // Change layout based on exercise type
                            exercise.type == "cardio" ? (
                                <CardioExerciseCard exercise={exercise} />
                            ) : (
                                <WeightExerciseCard exercise={exercise} />
                            )
                        }
                    </>
                )
            }
        </Box>
    )
}
