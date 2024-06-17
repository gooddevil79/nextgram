import prisma from "@/prisma/client";
import {
	ArrowUUpLeftIcon,
	ChatCircleDotsIcon,
	DislikeIcon,
	LikeIcon,
} from "@/public/icons";

import { Button, Divider, Image, User } from "@nextui-org/react";
import ReactMarkdown from "react-markdown";

const PostDetailsPage = async function ({
	params: { postId },
}: {
	params: { postId: string };
}) {
	const post = await prisma.post.findUnique({
		where: { id: postId },
		include: { author: true, comments: true },
	});

	return (
		<div className="space-y-2">
			<Button variant="bordered" isIconOnly className="mb-2">
				<ArrowUUpLeftIcon className="w-7 h-7" />
			</Button>
			<Image
				src={post?.imageUrl!}
				width={1920}
				height={1080}
				alt={post?.title!}
				className=" object-cover border max-h-[500px] "
			/>
			<div className="flex my-2 justify-between items-center">
				<div>
					<h1 className="text-2xl">{post?.title}</h1>
					<User
						name={<p className="hidden md:block">{post?.author?.name}</p>}
						description={
							<p className="hidden md:block dark:text-gray-300">
								{post?.author.username}
							</p>
						}
						avatarProps={{
							src: post?.author?.image!,
						}}
						className="cursor-pointer hover:scale-95 transition-transform"
					/>
				</div>
				<div className="border flex gap-2 h-full">
					<LikeIcon />
					<DislikeIcon />
					<ChatCircleDotsIcon />
				</div>
			</div>
			<Divider />
			<ReactMarkdown className={"prose"}>{post?.body}</ReactMarkdown>
		</div>
	);
};

export default PostDetailsPage;
