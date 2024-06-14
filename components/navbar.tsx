"use client";
import { Logo } from "@/public/icons";
import { ThemeSwitch } from "@/components/theme-switch";
import { siteConfig } from "@/config/site";

import {
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
	Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";
import NextLink from "next/link";
import AuthStatus from "./AuthStatus";
import { Link } from "@nextui-org/link";

export const Navbar = () => {
	return (
		<NextUINavbar maxWidth="2xl" position="sticky" className="shadow-sm">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<Logo className="w-10 h-10" color="white" />
						<p className="font-bold text-inherit">{siteConfig.name}</p>
					</NextLink>
				</NavbarBrand>
				<ul className="hidden md:flex  gap-4 ">
					{siteConfig.menuItems.map(({ href, label, icon: MenuIcon }) => (
						<NavbarItem key={href}>
							<Link
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-primary data-[active=true]:font-medium gap-1  "
								)}
								href={href}
								as={NextLink}
							>
								{MenuIcon && <MenuIcon className="w-5 h-5" />}
								{label}
							</Link>
						</NavbarItem>
					))}
				</ul>
			</NavbarContent>
			<NavbarContent as="div" justify="end" className=" basis-1 pl-4">
				<div className="md:hidden">
					<NavbarMenuToggle className="text-2xl border w-8  h-8" />
				</div>
				<AuthStatus />
			</NavbarContent>
			<NavbarMenu>
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.menuItems.map(
						({ href, icon: MenuIcon, label }, index) => (
							<NavbarMenuItem key={`${href}-${index}`}>
								<NextLink href={href} className="flex gap-2">
									<MenuIcon className="w-5 h-5" />
									{label}
								</NextLink>
							</NavbarMenuItem>
						)
					)}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
