import prisma from "@/prisma/client";
import { ChatCircleDotsIcon, DislikeIcon, LikeIcon } from "@/public/icons";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider, Link } from "@nextui-org/react";
import { User } from "@nextui-org/user";
import { Post } from "@prisma/client";
import Image from "next/image";
import NextLink from "next/link";

const PostList = async function () {
	let posts: Post[] = [];
	try {
		posts = await prisma.post.findMany({
			include: { author: true },
		});
		console.log(posts);
	} catch (error) {}

	return (
		<>
			{posts?.map(post => (
				<Card key={post.id} isHoverable>
					<CardHeader className=" flex-col items-start">
						<User
							name={post?.author?.name}
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
						/>
					</CardHeader>
					<Divider />
					<NextLink href={`/${post.id}`}>
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
					</NextLink>
					<CardFooter className="flex items-center justify-between">
						<div className="flex">
							<LikeIcon className="w-6 h-6 " />
							<DislikeIcon className="w-6 h-6 scale-x-[-1]" />
						</div>
						<div className="flex items-center gap-1">
							<p className="font-semibold text-default-400 text-small">97.1K</p>
							<p className="text-default-400 text-small">
								<ChatCircleDotsIcon className="w-6 h-6 " />
							</p>
						</div>
					</CardFooter>
				</Card>
			))}
		</>
	);
};

export default PostList;
