"use client";
import { RegisterUser } from "@/app/utils/zod.validations";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
type RegisterFormData = z.infer<typeof RegisterUser>;

const LoginForm = function () {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterFormData>();
	const onSubmit = async (data: RegisterFormData) => {
		setIsSubmitting(true);
		try {
			const res = await signIn("credentials", {
				username: data.username,
				password: data.password,
				redirect: false,
			});
			if (res?.status === 401) {
				throw new Error("Wrong username or passowr");
			}
			router.push("/");
		} catch (error) {
			setIsSubmitting(false);
			console.log(error);
		}
	};

	return (
		<>
			<form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
				<Input
					type="text"
					variant="bordered"
					label="Username or Email"
					{...register("username", { required: true })}
				/>
				{errors.username && (
					<small className="text-red-500">This field is required</small>
				)}
				<Input
					type="password"
					variant="bordered"
					label="Password"
					{...register("password", { required: true })}
				/>
				{errors.password && (
					<small className="text-red-500">{errors.password.message}</small>
				)}
				<div className=" justify-between items-center gap-2">
					<Button
						type="submit"
						className="w-full"
						isDisabled={isSubmitting}
						isLoading={isSubmitting}
						color="primary"
					>
						Login
					</Button>
					<span className="flex gap-1 mt-3">
						Don't have an account yet?
						<Link href="/register" className="text-primary-500">
							Signup.
						</Link>
					</span>
				</div>
			</form>
		</>
	);
};

export default LoginForm;
