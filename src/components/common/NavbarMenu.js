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
import { useRouter } from "next/router";
import { HiBars3BottomRight } from "react-icons/hi2";

export default function NavbarMenu() {
    const router = useRouter();

    const logout = () => {
        signOut();
        router.push("/");
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <HiBars3BottomRight className="text-3xl bg-white rounded p-2 h-10 w-10" />
            </DropdownMenuTrigger>

            <DropdownMenuContent className="!w-[200px] !m-2">
                <DropdownMenuLabel>Navigation</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-purple" />
                <DropdownMenuItem>
                    <Link href="/">Home</Link>
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
                <DropdownMenuItem onClick={logout}>
                    Log out
                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
  