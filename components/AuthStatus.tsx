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
const AuthStatus = function () {
	const { data, status } = useSession();

	return (
		<Dropdown placement="bottom-end">
			<DropdownTrigger>
				<User
					name={<p className="hidden md:block">{data?.user?.name}</p>}
					description={<p className="hidden md:block">{data?.user?.email}</p>}
					avatarProps={{
						src: data?.user?.image!,
					}}
					className="cursor-pointer hover:scale-95 transition-transform"
				/>
			</DropdownTrigger>

			{status === "authenticated" ? (
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
					>
						Register
					</DropdownItem>
				</DropdownMenu>
			)}
		</Dropdown>
	);
};

export default AuthStatus;
