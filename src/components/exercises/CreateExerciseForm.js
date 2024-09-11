import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CreateWeightExercise from "./CreateWeightExercise";
import CreateCardioExercise from "./CreateCardioExercise";

export default function CreateExerciseForm() {
    const tabSelectorClass = "w-full data-[state=active]:bg-purple data-[state=active]:text-white data-[state=active]:rounded";
    
    return (
        <Tabs defaultValue="weight" className="w-full font-grotesk mt-2">
            <TabsList className="border-b-2 rounded-none border-b-purple w-full">
                <TabsTrigger className={tabSelectorClass} value="weight">Weights</TabsTrigger>
                <TabsTrigger className={tabSelectorClass} value="cardio">Cardio</TabsTrigger>
            </TabsList>

            <TabsContent value="weight">
                <CreateWeightExercise />
            </TabsContent>

            <TabsContent value="cardio">
                <CreateCardioExercise />
            </TabsContent>
        </Tabs>
    )
}