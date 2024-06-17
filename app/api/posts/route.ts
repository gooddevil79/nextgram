import { connectDB } from "@/app/lib/connectDB";
import prisma from "@/prisma/client";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import { getServerAuthSession } from "../auth/[...nextauth]/authOptions";

export async function GET(request: NextRequest) {
	try {
		await connectDB();
	} catch (error) {
		return NextResponse.json("Faild to connect, Please try later");
	}
}

export async function POST(request: NextRequest) {
	const bodyReq = await request.json();
	const session = await getServerAuthSession();
	if (!session) {
		redirect("/login");
	}
	const { title, body, imageUrl } = bodyReq;
	try {
		await connectDB();
		const newPost = await prisma.post.create({
			data: { body, title, imageUrl, authorId: session.user?.id! },
		});
		return NextResponse.json(
			{ message: "Post Created", newPost },
			{ status: 201 }
		);
	} catch (error) {
		return NextResponse.json(
			{
				message: "Something went wrong! please try later",
			},
			{ status: 500 }
		);
	}
}

export async function PATCH(request: NextRequest) {}
