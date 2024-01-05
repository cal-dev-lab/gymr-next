import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { HiPlus } from "react-icons/hi2";
import CreateExerciseForm from "./CreateExerciseForm";
import Box from "../common/Box";
  
export default function CreateExerciseSheet() {
    return (
        <Sheet>
            <SheetTrigger className="w-full">
                <Box colour="purple" classnames="flex items-center justify-center gap-2 w-full">
                    <HiPlus />
                    <span className='font-grotesk'>Create exercise</span>
                </Box>
            </SheetTrigger>
            <SheetContent>
                <CreateExerciseForm />
            </SheetContent>
        </Sheet>
    )
}