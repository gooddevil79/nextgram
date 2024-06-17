"use client";

import { ChatCircleDotsIcon, DislikeIcon, LikeIcon } from "@/public/icons";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider, Image } from "@nextui-org/react";
import { Post } from "@prisma/client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
	const [posts, setPosts] = useState([]);
	const fetchUserPost = async () => {
		try {
			const res = await axios.get("/api/user/posts");
			setPosts(res.data.posts);
		} catch (error) {}
	};
	useEffect(() => {
		fetchUserPost();
	}, []);

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
			<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
				{posts?.map((post: Post) => (
					<Card key={post.id}>
						<CardHeader className=" flex-col items-start">
							{/* <User
							name={post.author.name}
							description={
								<Link
									href="https://twitter.com/jrgarciadev"
									size="sm"
									isExternal
									as={NextLink}
								>
									{`@${post.author.username}`}
								</Link>
							}
							avatarProps={{
								src: post.author.image || undefined,
							}}
						/> */}
						</CardHeader>
						<Divider />
						<CardBody className="overflow-visible py-2">
							<p className="text-tiny uppercase font-bold">{post.title}</p>
							<Image
								alt="Card background"
								className="object-cover rounded-xl w-full h-28 "
								src={post.imageUrl || ""}
								width={270}
								height={270}
							/>
						</CardBody>
						<CardFooter className="flex items-center justify-between">
							<div className="flex">
								<LikeIcon className="w-6 h-6 " />
								<DislikeIcon className="w-6 h-6 scale-x-[-1]" />
							</div>
							<div className="flex items-center gap-1">
								<p className="font-semibold text-default-400 text-small">
									97.1K
								</p>
								<p className="text-default-400 text-small">
									<ChatCircleDotsIcon className="w-6 h-6 " />
								</p>
							</div>
						</CardFooter>
					</Card>
				))}
			</div>
		</div>
	);
}
