import { CompassIcon, HouseIcon, PlusSquareIcon } from "@/public/icons";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Nextgram",
	description: "Share what you're into with the people who get you.",
	menuItems: [
		{
			label: "Home",
			href: "/",
			icon: HouseIcon,
		},
		{
			label: "Explore",
			href: "/explore",
			icon: CompassIcon,
		},
		{
			label: "New Post",
			href: "/new-post",
			icon: PlusSquareIcon,
		},
	],
	links: {
		github: "https://github.com/gooddevil79",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
		sponsor: "https://patreon.com/jrgarciadev",
	},
};
