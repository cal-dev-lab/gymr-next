import { useState } from "react";
import Button from "../common/Button";
import Heading from "../common/Heading";
import Input from "../common/Input";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import { mutate } from "swr";

export default function CreateExerciseModal({ setShowModal }) {
    const [fields, setFields] = useState({
        title: "",
        weight: "",
        sets: "",
        repetitions: ""
    });

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

            mutate("/api/exercise");
            setShowModal(false);
            setFields({});
            toast.success('Created workout successfully!')

        } catch (error) {
            toast.error(error.message)
        }
    }

    // Checks if all fields lengths are not empty
    const isValid = Object.values(fields).every(field => field.length > 0)

    return (
        <section className="mt-5 font-grotesk space-y-6">
            <div>
                <Heading size="xxl">
                    <b>Create exercise</b>
                </Heading>
                <p>
                    These can be assigned to workouts in the <Link href="/settings/workouts"><span className="text-purple">workouts settings</span></Link> page.
                </p>
            </div>

            <div className="space-y-4">
                <div>
                    <p>Title</p>
                    <Input
                        value={fields.title ?? ""}
                        onChange={e => setFields({...fields, title: e.target.value})} 
                        placeholder="Enter title..."
                    />
                </div>

                <div>
                    <p>Weight (kg)</p>
                    <Input
                        type="number"
                        value={fields.weight ?? ""}
                        onChange={e => setFields({...fields, weight: e.target.value})}
                        placeholder="Enter weight..."
                    />
                </div>

                <div>
                    <p>Sets</p>
                    <Input
                        type="number"
                        value={fields.sets ?? ""}
                        onChange={e => setFields({...fields, sets: e.target.value})}
                        placeholder="Enter sets..."
                    />
                </div>

                <div>
                    <p>Repetitions</p>
                    <Input
                        type="number"
                        value={fields.repetitions ?? ""}
                        onChange={e => setFields({...fields, repetitions: e.target.value})}
                        placeholder="Enter repetitions..."
                    />
                </div>
            </div>

            <div className="flex justify-end">
                <Button onClick={createExercise} disabled={!isValid}>
                    Create
                </Button>
            </div>
        </section>
    )
}