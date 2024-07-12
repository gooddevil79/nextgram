import { Card, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/react";
import MyPostList from "./components/MyPostList";
import { Suspense } from "react";

export default function Home() {
	return (
		<div className="space-y-3">
			<div className="grid md:grid-cols-3 gap-2 ">
				<Card>
					<CardHeader className="flex justify-between items-center gap-2">
						<h2>Posts</h2>
						<p className="text-2xl">10</p>
					</CardHeader>
				</Card>
				<Card>
					<CardHeader className="flex justify-between items-center gap-2">
						<h2>Likes</h2>
						<p className="text-2xl">10k</p>
					</CardHeader>
				</Card>
				<Card>
					<CardHeader className="flex justify-between items-center gap-2">
						<h2>Comments</h2>
						<p className="text-2xl">10k</p>
					</CardHeader>
				</Card>
			</div>

			<h2>My Posts :</h2>
			<Divider />
			<Suspense fallback={<p>Loading</p>}>
				<MyPostList />
			</Suspense>
		</div>
	);
}
