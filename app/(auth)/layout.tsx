import "@/styles/globals.css";
import { Metadata } from "next";

import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - login`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/favicon.ico",
	},
};

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="  h-screen bg-auth flex justify-center items-center">
			<div className=" max-w-xl mx-auto px-3">{children}</div>
		</main>
	);
}
