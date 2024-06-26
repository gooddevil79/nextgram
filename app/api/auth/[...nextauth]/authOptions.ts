import bcrypt from "bcryptjs";
import { connectDB } from "@/app/lib/connectDB";
import prisma from "@/prisma/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { getServerSession, NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		CredentialsProvider({
			name: "credentials",
			credentials: {},
			async authorize(credentials) {
				const { username, password } = credentials;

				try {
					await connectDB();
					const user = await prisma.user.findUnique({ where: { username } });

					if (!user) {
						return null;
					}

					const passwordsMatch = await bcrypt.compare(password, user.password);

					if (!passwordsMatch) {
						return null;
					}

					return user;
				} catch (error) {
					return null;
				}
			},
		}),
	],
	callbacks: {
		session: async ({ session, token }) => {
			if (session?.user) {
				session.user.id = token.sub;
			}
			return session;
		},
		jwt: async ({ user, token }) => {
			if (user) {
				token.uid = user.id;
			}

			return token;
		},
	},

	session: { strategy: "jwt" },
	secret: process.env.NEXTAUTH_SECRET,
	pages: {
		signIn: "/login",
	},
};

export const getServerAuthSession = () => getServerSession(authOptions);

export default authOptions;
