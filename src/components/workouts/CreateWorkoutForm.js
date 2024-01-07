import { useState } from "react";
import Heading from "../common/Heading";
import Input from "../common/Input";
import axios from "axios";
import toast from "react-hot-toast";
import { mutate } from "swr";
import Link from "next/link";
import Button from "../common/Button";

export default function CreateWorkoutForm() {
    const [title, setTitle] = useState("");

    const createWorkout = async () => {
        try {
            const { data } = await axios.post(
                `/api/workout`, {
                    title
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

            mutate("/api/workout");
            setTitle("");
            toast.success('Created workout successfully!')

        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    return (
        <section className="mt-5 font-grotesk space-y-6">
            <div>
                <Heading size="xxl">
                    <b>Create workout</b>
                </Heading>
                <p>
                    You can assign exercises to workouts. Exercises can exist in multiple workouts.
                </p>
            </div>

            <div className="space-y-4">
                <div>
                    <p>Title</p>
                    <Input
                        value={title ?? ""}
                        onChange={e => setTitle(e.target.value)} 
                        placeholder="Enter title..."
                    />
                </div>
            </div>

            <div className="flex justify-end">
                <Button onClick={createWorkout} disabled={!title}>
                    Create
                </Button>
            </div>
        </section>
    )
}