import { connectDB } from "@/app/lib/connectDB";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
	try {
		await connectDB();
	} catch (error) {
		return NextResponse.json("Faild to connect, Please try later");
	}
}

export async function POST(request: NextRequest) {}

export async function PATCH(request: NextRequest) {}
