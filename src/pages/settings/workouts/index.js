import Heading from '@/components/common/Heading';
import Loader from '@/components/common/Loader';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import useSWR from 'swr'
import { useSWRConfig } from "swr"

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Workout() {
    const { data: session } = useSession();
    const { data, error, isLoading } = useSWR(`/api/workout/${session?.user.id}`, fetcher)
    const { mutate } = useSWRConfig()

    const [title, setTitle] = useState("");

    if (error) return <div>failed to load</div>
    if (!data) return <Loader />

    const createWorkout = async () => {
        try {
            const { data } = await axios.post(
                `/api/workout/${session?.user.id}`,
              {
                userId: session?.user.id,
                title: title
              },
              {
                headers: {
                  "Content-Type": "application/json",
                },
              },
            );

            if (data.error) {
                return console.log(data.error);
            }

            setTitle("");
            mutate(`/api/workout/${session?.user.id}`);
            console.log('Added workout successfully')

          } catch (error) {
            console.log(error)
          }
    }

    return (
        <div className="m-2">
            <Heading size="lg">
                <code className="bg-black text-white px-4 py-2 rounded">/pages/settings/workouts/index.js</code>
            </Heading>

            <input onChange={e => setTitle(e.target.value)} value={title} className="mt-5" />
            <button onClick={createWorkout}>Create</button>

            <div className="mt-3 space-y-2">
            {
                
                Object.values(data).map(workout => (
                    <div key={workout._id} className="bg-purple p-4 text-white rounded">
                        <Heading classNames='text-white'>
                            <b>Title: {workout.title}</b>
                        </Heading>
                        <h1>userId: {workout.userId}</h1>
                    </div>
                ))
                
            }
            </div>
        </div>
    )
}