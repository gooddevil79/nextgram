"use client";
import {
	UserIcon,
	SettingIcon,
	QuestionMarkIcon,
	SignOutIcon,
	SignInIcon,
	UserPlusIcon,
} from "@/public/icons";
import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
} from "@nextui-org/dropdown";
import { User } from "@nextui-org/user";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Skeleton } from "@nextui-org/react";
const AuthStatus = function () {
	const { data, status } = useSession();

	const isLoading = status === "loading";
	const isAuthed = status === "authenticated";
	return (
		<>
			{isLoading ? (
				<div className="flex items-center md:w-52 gap-2 ">
					<Skeleton className="w-10 h-10 rounded-full" />
					<div className="hidden md:flex flex-col  space-y-1 flex-1">
						<Skeleton className="h-3" />
						<Skeleton className="w-20 h-2" />
					</div>
				</div>
			) : (
				<Dropdown placement="bottom-end">
					<DropdownTrigger>
						<User
							name={<p className="hidden md:block">{data?.user?.name}</p>}
							description={
								<p className="hidden md:block">{data?.user?.email}</p>
							}
							avatarProps={{
								src: data?.user?.image!,
							}}
							className="cursor-pointer hover:scale-95 transition-transform"
						/>
					</DropdownTrigger>

					{isAuthed ? (
						<DropdownMenu aria-label="Profile Actions" variant="flat">
							<DropdownItem
								key="profile"
								startContent={<UserIcon className="w-5 h-5" />}
								href="/profile"
								as={Link}
							>
								Profile
							</DropdownItem>
							<DropdownItem
								key="setting"
								startContent={<SettingIcon className="w-5 h-5" />}
								href="/setting"
								as={Link}
							>
								Setting
							</DropdownItem>
							<DropdownItem
								key="help_and_feedback"
								showDivider
								startContent={<QuestionMarkIcon className="w-5 h-5" />}
								as={Link}
								href="/help-and-feedback"
							>
								Help & Feedback
							</DropdownItem>

							<DropdownItem
								key="logout"
								color="danger"
								startContent={<SignOutIcon className="w-5 h-5" />}
								onClick={() => signOut()}
							>
								Log Out
							</DropdownItem>
						</DropdownMenu>
					) : (
						<DropdownMenu aria-label="Profile Actions" variant="flat">
							<DropdownItem
								key="login"
								startContent={<SignInIcon className="w-5 h-5" />}
								href="/login"
								as={Link}
							>
								Login
							</DropdownItem>
							<DropdownItem
								key="register"
								startContent={<UserPlusIcon className="w-5 h-5" />}
								href="/register"
								as={Link}
								showDivider
							>
								Register
							</DropdownItem>
							<DropdownItem
								key="help_and_feedback"
								startContent={<QuestionMarkIcon className="w-5 h-5" />}
								as={Link}
								href="/help-and-feedback"
							>
								Help & Feedback
							</DropdownItem>
						</DropdownMenu>
					)}
				</Dropdown>
			)}
		</>
	);
};

export default AuthStatus;
