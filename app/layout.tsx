import "@/styles/globals.css";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { fontSans } from "@/config/fonts";
import AuthProvider from "./AuthProvider";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html suppressHydrationWarning lang="en">
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				<AuthProvider>
					<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
						{children}
						<Toaster />
					</Providers>
				</AuthProvider>
			</body>
		</html>
	);
}
