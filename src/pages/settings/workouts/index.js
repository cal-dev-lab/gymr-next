import Heading from '@/components/common/Heading';
import Loader from '@/components/common/Loader';
import useSWR from "swr";
import Box from '@/components/common/Box';
import Navbar from '@/components/common/Navbar';
import CreateWorkoutSheet from '@/components/workouts/CreateWorkoutSheet';
import WorkoutRow from '@/components/workouts/WorkoutRow';

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Workouts() {
    const { data: workouts, error, isLoading } = useSWR("/api/workout", fetcher);
    const { data: exercises } = useSWR("/api/exercise", fetcher);

    if (error) return <div>failed to load</div>;
    if (isLoading) return <Loader />;

    return (
        <div className="space-y-2">
            <Navbar />

            <Box classnames='mt-2'>
                <Heading size="xl">
                    <b>Manage your workouts</b>
                </Heading>
                <p>Create, update or delete your workouts.</p>
            </Box>

            <CreateWorkoutSheet />

            <div className="mt-3 space-y-2">
                {
                    workouts?.length > 0 ? (
                        workouts?.map(workout => (
                            <WorkoutRow key={workout._id} exercises={exercises} workout={workout} />
                        ))
                    ) : (
                        <Box>
                            <p className="text-sm">You have no workouts available.</p>
                        </Box>
                    )
                }
            </div>
        </div>
    )
}