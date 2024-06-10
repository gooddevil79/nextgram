"use client";

import { useState } from "react";
import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import { UploadButton } from "@/app/utils/uploadthing";
import { NewPostSchema } from "@/app/utils/zod.validations";
import { Button, Input } from "@nextui-org/react";
import "easymde/dist/easymde.min.css";
import SimpleMDE from "react-simplemde-editor";
import { z } from "zod";

type postFormType = z.infer<typeof NewPostSchema>;

const PostForm = function () {
	const [imageUrl, setImageUrl] = useState("");

	const {
		register,
		control,
		reset,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm<postFormType>();

	const onSubmitHandler = (data: postFormType) => {
		axios.post("/api/posts", data);
	};

	return (
		<section>
			<form className="space-y-3" onSubmit={handleSubmit(onSubmitHandler)}>
				<UploadButton
					endpoint="imageUploader"
					appearance={{
						clearBtn: "bg-red-500",
					}}
					onClientUploadComplete={res => {
						// Do something with the response
						console.log("Files: ", res);
						setValue("imageUrl", res[0].url);
						setImageUrl(res[0].url);
					}}
					onUploadError={(error: Error) => {
						// Do something with the error.
						alert(`ERROR! ${error.message}`);
					}}
				/>
				<Input
					label="Title"
					variant="underlined"
					{...register("title", { required: true })}
				/>
				<Controller
					name="body"
					control={control}
					render={({ field }) => (
						<SimpleMDE {...field} placeholder="Post description" />
					)}
				/>
				<Button type="submit" variant="bordered">
					Upload Post
				</Button>
			</form>
		</section>
	);
};

export default PostForm;
