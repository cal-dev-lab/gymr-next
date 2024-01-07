import { useSession } from "next-auth/react";
import { HiUser } from "react-icons/hi2";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Heading from "./Heading";
import NavbarMenu from "./NavbarMenu";

export default function Navbar() {
    const { data: session } = useSession();

    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const currentDate = `${day} ${monthNames[month]}`

    return (
        <>
            <section className="h-20 flex items-center justify-between">
                <Avatar>
                    <AvatarImage src={session?.user.image} />
                    <AvatarFallback>
                        <HiUser />
                    </AvatarFallback>
                </Avatar>

                <div className="text-center">
                    <Heading size="xs">
                        <b>Hi, {session?.user.name}</b>
                    </Heading>
                    <p className="text-xs font-grotesk">Today {currentDate}</p>
                </div>

                <NavbarMenu />
            </section>
    </>
    )
}