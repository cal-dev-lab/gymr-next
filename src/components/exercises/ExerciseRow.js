import Box from "../common/Box";
import Heading from "../common/Heading";

export default function ExerciseRow({ exercise }) {
    return (
        <Box colour="purple">
            <Heading>
                <b className="text-white">{exercise.title}</b>
            </Heading>

            <Box>
                Reps: <br /> {exercise.repetitions}
            	Sets: <br /> {exercise.sets}
	    </Box>
        </Box>
    )
}
