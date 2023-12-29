import Heading from '@/components/common/Heading';
import Loader from '@/components/common/Loader';
import WorkoutCard from '@/components/workouts/WorkoutCard';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import useSWR from 'swr'
import { useSWRConfig } from "swr"

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Workout() {
    const { data: workouts } = useSWR("/api/workout", fetcher)
    const { data: exercises } = useSWR("/api/exercise", fetcher)
    const { mutate } = useSWRConfig()

    const [title, setTitle] = useState("");

    if (!workouts) return <Loader />

    const createWorkout = async () => {
        try {
            const { data } = await axios.post(
                `/api/workout`, {title: title},
              {
                headers: {
                  "Content-Type": "application/json",
                },
              },
            );

            if (data.error) {
                return toast.error(data.error);
            }

            setTitle("");
            mutate("/api/workout");
            toast.success('Added workout successfully!')

          } catch (error) {
            toast.error(error)
          }
    }

    return (
        <div>
            <input onChange={e => setTitle(e.target.value)} value={title} />
            <button onClick={createWorkout}>Create</button>

            <section className="space-y-2">
              {
                workouts?.length > 0 ? (
                  workouts.map(workout => (
                    <WorkoutCard workout={workout} exercises={exercises} />
                  ))
                ) : (
                  <Loader />
                )
              }
            </section>
        </div>
    )
}