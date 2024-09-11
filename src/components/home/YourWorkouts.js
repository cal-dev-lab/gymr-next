import { HiArrowRight } from "react-icons/hi2";
import Box from "../common/Box";
import Link from "next/link";

export default function YourWorkouts() {
    return (
        <Link href="/log-workout">
            <Box colour="purple_outline" classnames="flex items-center justify-between">
                <b className="text-purple">Your workouts</b>
                <HiArrowRight className="text-purple" />
            </Box>
        </Link>
    )
}