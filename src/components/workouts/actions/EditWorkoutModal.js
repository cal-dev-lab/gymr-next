import { useState } from "react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { HiPencil } from "react-icons/hi2";
import Heading from "@/components/common/Heading";
import Input from "@/components/common/Input";
import toast from "react-hot-toast";
import { mutate } from "swr";
import axios from "axios";

export default function EditWorkoutModal({ workout }) {
    const [workoutTitle, setWorkoutTitle] = useState("");

    const updateWorkoutTitle = async () => {
        try {
            const { data } = await axios.put(
                `/api/workout/`, {
                    workoutTitle
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
            setWorkoutTitle("");
            toast.success('Created workout successfully!')

        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger><HiPencil /></AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Edit workout
                    </AlertDialogTitle>
                </AlertDialogHeader>

                <div>
                    <Heading>
                        <b className="text-purple">
                            Specify a new title for this workout
                        </b>
                    </Heading>

                    <Input
                        value={workoutTitle ?? null}
                        onChange={e => setWorkoutTitle(e.target.value)}
                        maxLength={30}
                    />
                </div>                

                <AlertDialogFooter>
                    <AlertDialogCancel>Close</AlertDialogCancel>
                    <AlertDialogAction
                        onClick={updateWorkoutTitle}
                        className="bg-purple text-white"
                    >
                        Save
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}