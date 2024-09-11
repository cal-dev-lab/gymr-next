import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Loader from "../common/Loader";
import useSWR from "swr";
import Box from "../common/Box";

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function LogWorkoutLayout() {
    const { data: workouts, error, isLoading } = useSWR("/api/workout", fetcher);

    const tabSelectorClass = "data-[state=active]:bg-purple w-full data-[state=active]:text-white data-[state=active]:rounded";
    const workoutsAvailable = workouts?.length > 0;

    if (isLoading) {
        return <Loader />;
    }

    return (
        <Tabs defaultValue={workouts[0]?.title} className="font-grotesk mt-2">
            <TabsList className="overflow-x-scroll w-full">
                {
                    workoutsAvailable ? (
                        workouts.map(workout => (
                            <TabsTrigger className={tabSelectorClass} value={workout.title}>
                                {workout.title}
                            </TabsTrigger>
                        ))
                    ) : (
                        <p>No workouts</p>
                    )
                }
            </TabsList>

            {
                workoutsAvailable && (
                    workouts.map(workout => (
                        <TabsContent value={workout.title} className="w-full space-y-2">
                            {
                                workout?.exercise_title?.map(exercise => (
                                    <Box>
                                        <p>{exercise}</p>
                                    </Box>
                                ))
                            }
                        </TabsContent>
                    ))
                )
            }
        </Tabs>
    )
}