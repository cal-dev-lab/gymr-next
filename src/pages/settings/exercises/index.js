import Heading from '@/components/common/Heading';
import Loader from '@/components/common/Loader';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import useSWR from 'swr'
import { useSWRConfig } from "swr"

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Exercises() {
    const { data: session } = useSession();
    const { data, error, isLoading } = useSWR("/api/exercise", fetcher)
    const { mutate } = useSWRConfig()

    const [fields, setFields] = useState({
        title: "",
        weight: 0,
        sets: 0,
        repetitions: 0
    });

    if (error) return <div>failed to load</div>
    if (!data) return <Loader />

    console.log(data)

    const createExercise = async () => {
        try {
            const { data } = await axios.post(
                `/api/exercise`, fields,
              {
                headers: {
                  "Content-Type": "application/json",
                },
              },
            );

            if (data.error) {
                return console.log(data.error);
            }

            setFields({...fields, title: ""});
            mutate("/api/exercise");
            console.log('Added workout successfully')

          } catch (error) {
            console.log(error)
          }
    }

    return (
        <div className="m-2">
            <Heading size="lg">
                <code className="bg-black text-white px-4 py-2 rounded">/pages/settings/exercises/index.js</code>
            </Heading>

            <input onChange={e => setFields({...fields, title: e.target.value})} value={fields.title} className="mt-5" />
            <button onClick={createExercise}>Create</button>

            <div className="mt-3 space-y-2">
                {
                    data?.map(exercise => (
                        <div key={exercise._id} className="bg-purple p-4 text-white rounded">
                            <Heading classNames='text-white'>
                                <b>Title: {exercise.title}</b>
                            </Heading>
                            <h1>userId: {exercise.user_id}</h1>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}