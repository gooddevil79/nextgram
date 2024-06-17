"use client";

import { RegisterUser } from "@/app/utils/zod.validations";
import { Button, Avatar, Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { UploadButton } from "@/app/utils/uploadthing";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

type RegisterFormData = z.infer<typeof RegisterUser>;

const LoginForm = function () {
	const [profileImage, setProfileImage] = useState<string | undefined>();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const router = useRouter();
	const {
		register,
		handleSubmit,
		watch,
		reset,
		setValue,
		formState: { errors },
	} = useForm<RegisterFormData>();

	const onSubmit = async function (data: RegisterFormData) {
		setIsSubmitting(true);
		try {
			const res = await axios.post("/api/user/register", {
				username: data.username,
				image: data?.image || undefined,
				email: data.email,
				name: data.name,
				password: data.password,
				confirmPassword: data.confirmPassword,
			});
			toast.success(res.data.message);
			router.push("/login");
		} catch (error) {
			if (axios.isAxiosError(error)) {
				toast.error(error.response?.data.message);
			} else {
				console.error(error);
			}
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<>
			<form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
				<div className="flex flex-col justify-center items-center gap-3 mt-10 ">
					<Avatar
						src={profileImage}
						className="w-24 h-24 md:w-40 md:h-40 text-large"
						isBordered
					/>

					<UploadButton
						endpoint="imageUploader"
						appearance={{
							clearBtn: "bg-red-500",
						}}
						onClientUploadComplete={res => {
							setValue("image", res[0].url);
							setProfileImage(res[0].url);
							toast.success("Image uploaded");
						}}
						onUploadError={(error: Error) => {
							toast.error(
								"Uploadthings: Faild to upload image, please try later"
							);
						}}
					/>
				</div>
				<Input
					type="text"
					variant="bordered"
					label="Name"
					{...register("name", { required: true })}
				/>
				{errors.name && (
					<small className="text-red-500">This field is required</small>
				)}
				<div className="flex flex-col md:flex-row gap-2">
					<div className="flex-1">
						<Input
							type="text"
							variant="bordered"
							label="Username"
							{...register("username", { required: true })}
						/>
						{errors.username && (
							<small className="text-red-500">This field is required</small>
						)}
					</div>
					<div className="flex-1">
						<Input
							type="email"
							variant="bordered"
							label="Email"
							{...register("email", { required: true })}
						/>
						{errors.email && (
							<small className="text-red-500">This field is required</small>
						)}
					</div>
				</div>

				<Input
					type="password"
					variant="bordered"
					label="Password"
					{...register("password", { required: true })}
				/>
				{errors.password && (
					<small className="text-red-500">{errors.password.message}</small>
				)}
				<Input
					type="password"
					variant="bordered"
					label="Confirm Password"
					{...register("confirmPassword", {
						required: true,
						validate: (val: string) => {
							if (watch("password") != val) {
								return "Your passwords do no match";
							}
						},
					})}
				/>
				{errors.confirmPassword && (
					<small className="text-red-500">
						{errors.confirmPassword.message}
					</small>
				)}
				<div className="flex flex-col md:flex-row justify-between items-center gap-2">
					<Button
						type="submit"
						disabled={isSubmitting}
						isLoading={isSubmitting}
						color="primary"
						className="md:flex-1 w-full"
					>
						Register
					</Button>
					<span className="flex gap-1">
						Already have an account?
						<Link href="/login" className="text-primary-500">
							login.
						</Link>
					</span>
				</div>
			</form>
		</>
	);
};

export default LoginForm;
