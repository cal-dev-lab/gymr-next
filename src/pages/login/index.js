import Box from "@/components/common/Box";
import Button from "@/components/common/Button";
import Heading from "@/components/common/Heading";
import { signIn } from "next-auth/react";

export default function Login() {
    return (
        <section className="min-h-screen w-full flex items-center justify-center">
            <Box classnames="space-y-4">
                <Heading size="xxxl">Gymr</Heading>
                <p>Sign in securely with one of our providers</p>

                <div className="flex flex-col gap-2">
                    <Button onClick={() => signIn("github")}>Sign in with GitHub</Button>
                    <Button onClick={() => signIn("twitter")}>Sign in with Twitter</Button>
                </div>
            </Box>
        </section>
    )
}