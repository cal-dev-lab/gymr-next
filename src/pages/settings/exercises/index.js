import Heading from '@/components/common/Heading';
import Loader from '@/components/common/Loader';
import useSWR from "swr";
import 'react-responsive-modal/styles.css';
import Box from '@/components/common/Box';
import ExerciseRow from '@/components/exercises/ExerciseRow';
import CreateExerciseSheet from '@/components/exercises/CreateExerciseSheet';
import Navbar from '@/components/common/Navbar';

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Exercises() {
    const { data: exercises, error, isLoading } = useSWR("/api/exercise", fetcher);

    if (error) return <div>failed to load</div>;
    if (!exercises) return <Loader />;

    return (
        <div className="space-y-2">
            <Navbar />

            <Box classnames='mt-2'>
                <Heading size="xl">
                    <b>Manage your exercises</b>
                </Heading>
                <p>Create, update or delete your exercises.</p>
            </Box>

            <CreateExerciseSheet />

            <div className="mt-3 space-y-2">
                {
                    exercises?.length > 0 ? (
                        exercises?.map(exercise => (
                            <ExerciseRow key={exercise._id} exercise={exercise} />
                        ))
                    ) : (
                        <Box>
                            <p className="text-sm">You have no exercises available.</p>
                        </Box>
                    )
                }
            </div>
        </div>
    )
}