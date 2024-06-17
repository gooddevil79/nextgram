import { connectDB } from "@/app/lib/connectDB";
import { NextRequest, NextResponse } from "next/server";
import { getServerAuthSession } from "../../auth/[...nextauth]/authOptions";
import prisma from "@/prisma/client";
import { redirect } from "next/navigation";

export async function GET(request: NextRequest) {
	const session = await getServerAuthSession();
	if (!session) {
		redirect("/login");
	}
	try {
		await connectDB();
		const posts = await prisma.post.findMany({
			where: { authorId: session?.user?.id },
		});
		return NextResponse.json({ posts });
	} catch (error) {
		return NextResponse.json("Faild to connect, Please try later");
	}
}
