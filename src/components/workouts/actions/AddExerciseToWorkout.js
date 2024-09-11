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
import { HiPlus } from "react-icons/hi2";
import WorkoutCard from "../WorkoutCard";
import Heading from "@/components/common/Heading";
import Link from "next/link";


export default function AddExerciseToWorkout({ workout, exercises }) {
    return (
        <AlertDialog>
            <AlertDialogTrigger><HiPlus /></AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Add exercises to {workout?.title}
                    </AlertDialogTitle>
                </AlertDialogHeader>

                <div>
                    <Heading>
                        <b className="text-purple">
                            Exercises available
                        </b>
                    </Heading>

                    <p>Tip: Exercises can be added to more than one workout.</p>
                </div>                

                <WorkoutCard workout={workout} exercises={exercises} />

                <p className="text-sm sm:flex gap-2">
                    Can't find the right exercise?
                    <Link href="/settings/exercises" className={!exercises ? "hidden" : "flex text-purple"}>
                        Create more here.
                    </Link>
                </p>

                <AlertDialogFooter>
                    <AlertDialogCancel>Close</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}