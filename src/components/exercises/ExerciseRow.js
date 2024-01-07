import { useState } from "react";
import { HiChevronDown, HiEye, HiPencil, HiTrash } from "react-icons/hi2";
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
                </Heading>


                <div className="flex items-center gap-2">
                    <HiEye onClick={() => setShow(!show)} />
                    <HiPencil />
                    <DeleteExerciseModal exercise={exercise} />
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
