import Box from "@/components/common/Box";
import Heading from "@/components/common/Heading";
import Navbar from "@/components/common/Navbar";
import Link from "next/link";
import { HiCog } from "react-icons/hi2";

export default function Settings() {
	return (
		<section className="space-y-2">
			<Navbar />

			<Box classnames="mt-2">
				<Heading size="xl">
					<b>Settings</b>
				</Heading>
				<p>Here you can configure different aspects of your app.</p>
			</Box>

			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
				<Link href="/settings/exercises">
					<Box colour="purple" classnames="flex flex-col items-center">
						<HiCog className="w-10 h-10" />
						<b className="text-lg">Exercises</b>
					</Box>
				</Link>

				<Link href="/settings/workouts">
					<Box colour="purple" classnames="flex flex-col items-center">
						<HiCog className="w-10 h-10" />
						<b className="text-lg">Workouts</b>
					</Box>
				</Link>
			</div>
		</section>
	)
}
