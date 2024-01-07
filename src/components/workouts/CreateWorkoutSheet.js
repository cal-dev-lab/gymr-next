import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { HiPlus } from "react-icons/hi2";
import CreateWorkoutForm from "./CreateWorkoutForm";
import Box from "../common/Box";
  
export default function CreateWorkoutSheet() {
    return (
        <Sheet>
            <SheetTrigger className="w-full">
                <Box colour="purple" classnames="flex items-center justify-center gap-2 w-full">
                    <HiPlus />
                    <span className='font-grotesk'>Create workout</span>
                </Box>
            </SheetTrigger>
            <SheetContent>
                <CreateWorkoutForm />
            </SheetContent>
        </Sheet>
    )
}