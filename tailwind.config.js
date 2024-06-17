import { nextui } from "@nextui-org/theme";
import { withUt } from "uploadthing/tw";

/** @type {import('tailwindcss').Config} */

export default withUt({
	content: [
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-sans)"],
				mono: ["var(--font-geist-mono)"],
			},
			backgroundImage: {
				wallpaper1: "url(/images/wallpaper1.jpg)",
				wallpaper2: "url(/images/wallpaper2.jpg)",
				auth: "url(/images/auth-layout-bg.svg)",
			},
		},
	},
	darkMode: "class",
	plugins: [nextui(), require("@tailwindcss/typography")],
});
