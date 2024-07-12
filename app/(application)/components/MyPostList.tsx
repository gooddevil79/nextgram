"use client";

import {
	ChatCircleDotsIcon,
	DislikeIcon,
	LikeIcon,
	PencilSimpleLine,
	TrashSimple,
} from "@/public/icons";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/react";
import { Post } from "@prisma/client";
import axios, { AxiosError } from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import EmptyState from "./EmptyState";
import Image from "next/image";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const MyPostList = function () {
	const router = useRouter();
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

	const handleDelete = async (id: string) => {
		try {
			const res = await axios.delete(`/api/posts/${id}`);
			toast.success(res.data.message);
			router.refresh();
		} catch (error) {
			console.log(error);
			if (axios.isAxiosError(error)) {
				toast.error(
					error.response?.data.message ||
						"Something went wrong! Please try later"
				);
			}
		}
	};
	return (
		<>
			{posts?.length ? (
				<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
					{posts?.map((post: Post) => (
						<Card key={post.id}>
							<CardHeader className=" flex justify-between items-start">
								<Link href={`/${post.id}/edit`}>
									<PencilSimpleLine className="w-6 h-6 hover:text-blue-500" />
								</Link>
								<TrashSimple
									className="w-6 h-6 hover:text-red-500 cursor-pointer"
									onClick={() => handleDelete(post.id)}
								/>
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
			) : (
				<EmptyState name="post" />
			)}
		</>
	);
};

export default MyPostList;
