import Heading from '@/components/common/Heading';
import Button from '@/components/common/Button';
import Loader from '@/components/common/Loader';
import { useState } from 'react';
import useSWR from "swr";
import { useSWRConfig } from "swr";
import { HiPlus } from 'react-icons/hi2';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import CreateExerciseModal from '@/components/workouts/CreateExerciseModal';
import Box from '@/components/common/Box';

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Exercises() {
    const { data: exercises, error, isLoading } = useSWR("/api/exercise", fetcher);
    const { mutate } = useSWRConfig();

    const [showModal, setShowModal] = useState(false);

    if (error) return <div>failed to load</div>;
    if (!exercises) return <Loader />;

    return (
        <div>
            <Button
                onClick={() => setShowModal(true)}
                classnames="gap-2 w-full"
            >
                <HiPlus />
                <span>Create exercise</span>
            </Button>

            <div className="mt-3 space-y-2">
                {
                    exercises?.length > 0 ? (
                        exercises?.map(exercise => (
                            <div key={exercise._id} className="bg-purple p-4 text-white rounded">
                                <Heading classNames='text-white'>
                                    <b>{exercise.title}</b>
                                </Heading>
                            </div>
                        ))
                    ) : (
                        <Box>
                            <p className="text-sm">You have no exercises available.</p>
                        </Box>
                    )
                }
            </div>

            <Modal
                open={showModal}
                onClose={() => setShowModal(false)}
                center
            >
                <CreateExerciseModal setShowModal={setShowModal} />
            </Modal>
        </div>
    )
}