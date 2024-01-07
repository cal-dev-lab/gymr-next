import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";

export default function NavbarMenu() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <HiBars3BottomRight className="text-3xl bg-white rounded p-2 h-10 w-10" />
            </DropdownMenuTrigger>

            <DropdownMenuContent className="!w-[200px] !m-2">
                <DropdownMenuLabel>Navigation</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-purple" />
                <DropdownMenuItem>
                    <Link href="/settings">Home</Link>
                    <DropdownMenuShortcut>⌘H</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href="/settings">Settings</Link>
                    <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-purple" />
                <DropdownMenuItem>
                    Profile
                    <DropdownMenuShortcut>⌘U</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-purple" />
                <DropdownMenuItem onClick={() => signOut()}>
                    Log out
                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
  