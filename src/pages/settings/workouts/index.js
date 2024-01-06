import Heading from '@/components/common/Heading';
import Loader from '@/components/common/Loader';
import { useState } from 'react';
import useSWR from "swr";
import { useSWRConfig } from "swr";
import 'react-responsive-modal/styles.css';
import Box from '@/components/common/Box';
import ExerciseRow from '@/components/exercises/ExerciseRow';
import CreateExerciseSheet from '@/components/exercises/CreateExerciseSheet';
import Navbar from '@/components/common/Navbar';

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Workouts() {
    const { data: workouts, error, isLoading } = useSWR("/api/workout", fetcher);

    if (error) return <div>failed to load</div>;
    if (!workouts) return <Loader />;

    return (
        <div className="space-y-2">
            <Navbar />

            <Box classnames='mt-2'>
                <Heading size="xl">
                    <b>Manage your workouts</b>
                </Heading>
                <p>Create, update or delete your workouts.</p>
            </Box>

            <CreateExerciseSheet />

            <div className="mt-3 space-y-2">
                {
                    workouts?.length > 0 ? (
                        workouts?.map(workout => (
                            <ExerciseRow key={wokrout._id} workout={workout} />
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