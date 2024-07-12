"use client";

import { UploadButton } from "@/app/utils/uploadthing";
import { NewPostSchema } from "@/app/utils/zod.validations";
import { Button, Image, Input } from "@nextui-org/react";
import { Post } from "@prisma/client";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import SimpleMDE from "react-simplemde-editor";
import { z } from "zod";

type postFormType = z.infer<typeof NewPostSchema>;

const PostForm = function ({ post }: { post?: Post }) {
	const [imageUrl, setImageUrl] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const router = useRouter();

	const {
		register,
		control,
		reset,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm<postFormType>();

	useEffect(() => {
		if (post) {
			setValue("body", post.body);
			setValue("title", post.title);
			setValue("imageUrl", post.imageUrl || "");
			setImageUrl(post.imageUrl || "");
		}
	}, [post, setValue]);

	const onSubmitHandler = async (data: postFormType) => {
		setIsSubmitting(true);
		try {
			const action = post
				? axios.put(`/api/posts/${post.id}`, data)
				: axios.post("/api/posts", data);
			const res = await action;
			toast.success(res.data.message);
			router.push("/");
			router.refresh();
		} catch (error) {
			if (axios.isAxiosError(error)) {
				toast.error(error?.response?.data?.message);
			}
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section>
			<form
				className=" grid grid-cols-1 md:grid-cols-2 gap-2"
				onSubmit={handleSubmit(onSubmitHandler)}
			>
				<div className="border border-dashed flex justify-center items-center flex-col gap-2">
					<Image
						width={300}
						className="w-full h-40 border"
						alt="NextUI hero Image"
						src={imageUrl || undefined}
					/>
					<UploadButton
						endpoint="imageUploader"
						className="justify-self-end"
						appearance={{
							clearBtn: "bg-red-500",
						}}
						onClientUploadComplete={res => {
							setValue("imageUrl", res[0].url);
							setImageUrl(res[0].url);
							toast.success("Image uploaded");
						}}
						onUploadError={(error: Error) => {
							toast.error("Could not upload! Please try later");
						}}
					/>
				</div>
				<div className="space-y-2">
					<Input
						label="Title"
						variant="bordered"
						{...register("title", { required: true })}
					/>
					<Controller
						name="body"
						control={control}
						render={({ field }) => (
							<SimpleMDE
								placeholder="Description for your post. (optional)"
								{...field}
							/>
						)}
					/>
					<div className="flex gap-2">
						<Button
							type="submit"
							variant="bordered"
							className="w-full sm:w-auto"
							isLoading={isSubmitting}
							isDisabled={isSubmitting}
						>
							{post ? "Update Post" : "Upload Post"}
						</Button>
						{post && (
							<Button
								type="submit"
								variant="bordered"
								color="danger"
								className="w-full sm:w-auto"
								isLoading={isSubmitting}
								isDisabled={isSubmitting}
							>
								Delete Post
							</Button>
						)}
					</div>
				</div>
			</form>
		</section>
	);
};

export default PostForm;
