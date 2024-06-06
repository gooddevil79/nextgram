import { title } from "@/components/primitives";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import Image from "next/image";
export default async function ExplorePage() {
	const posts = [1, 2, 3, 4, 5, 6, 7, 8, 10];
	return (
		<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
			{posts?.map(p => (
				<Card className="py-4">
					<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
						<p className="text-tiny uppercase font-bold">Daily Mix</p>
						<small className="text-default-500">12 Tracks</small>
						<h4 className="font-bold text-large">Frontend Radio</h4>
					</CardHeader>
					<CardBody className="overflow-visible py-2">
						<Image
							alt="Card background"
							className="object-cover rounded-xl"
							src="https://nextui.org/images/hero-card-complete.jpeg"
							width={270}
							height={270}
						/>
					</CardBody>
				</Card>
			))}
		</div>
	);
}
