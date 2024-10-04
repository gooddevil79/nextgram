import bcrypt from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';

import { connectDB } from '@/app/lib/connectDB';
import { RegisterUser } from '@/app/utils/zod.validations';
import prisma from '../../../../../prisma/client';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = RegisterUser.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(
      { message: 'Validation faild', errors: validation.error.format() },
      { status: 400 }
    );
  }

  try {
    await connectDB();
    const user = await prisma.user.findUnique({
      where: { email: body.email },
    });

    if (user) {
      return NextResponse.json(
        { message: 'Username Or Email Already exist' },
        { status: 400 }
      );
    }

    const { email, password, name, image, username } = body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: { name, email, image, username, password: hashedPassword },
    });

    return NextResponse.json(
      { message: 'Registerd', user: newUser },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Something went wrong! Please try later', error },
      { status: 500 }
    );
  }
}
