"use client";

import { UploadButton } from "@/app/utils/uploadthing";
import { NewPostSchema } from "@/app/utils/zod.validations";
import { Button, Image, Input } from "@nextui-org/react";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import SimpleMDE from "react-simplemde-editor";
import { z } from "zod";

type postFormType = z.infer<typeof NewPostSchema>;

const PostForm = function () {
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

	const onSubmitHandler = async (data: postFormType) => {
		setIsSubmitting(true);
		try {
			const res = await axios.post("/api/posts", data);
			console.log(res.data.message);
			toast.success("Created");
			router.push("/");
			router.refresh();
		} catch (error) {
			console.log(error);
			toast.error("Faild to Create Post");
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
					<Button
						type="submit"
						variant="bordered"
						className="w-full sm:w-auto"
						isLoading={isSubmitting}
						isDisabled={isSubmitting}
					>
						Upload Post
					</Button>
				</div>
			</form>
		</section>
	);
};

export default PostForm;
