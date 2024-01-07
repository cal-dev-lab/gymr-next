import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import axios from "axios";
import toast from "react-hot-toast";
import { HiTrash } from "react-icons/hi2";
import { mutate } from "swr";

export default function DeleteWorkoutModal({ workout }) {
    const deleteWorkout = async () => {
        try {
            const { data } = await axios.delete(
                `/api/workout/${workout._id}`,
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
            toast.success('Deleted exercise successfully!')

        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger><HiTrash /></AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Are you absolutely sure?
                    </AlertDialogTitle>

                    <AlertDialogDescription>
                        <b className="text-purple">You are about to delete {workout.title}</b> 
                        <br />
                        This action cannot be undone. This will permanently delete your workout and remove your data from our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                        onClick={deleteWorkout}
                        className="bg-purple text-white"
                    >
                        Yes, I'm sure
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}