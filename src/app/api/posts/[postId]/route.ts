import { NextRequest, NextResponse } from 'next/server';
import { redirect } from 'next/navigation';

import { getServerAuthSession } from '../../auth/[...nextauth]/authOptions';

import prisma from '../../../../../prisma/client';
import { connectDB } from '@/app/lib/connectDB';

export async function PUT(
  request: NextRequest,
  { params: { postId } }: { params: { postId: string } }
) {
  const bodyReq = await request.json();

  const session = getServerAuthSession();

  if (!session) {
    redirect('/login');
  }
  const { title, body, imageUrl } = bodyReq;

  try {
    await connectDB();
    const existingPost = await prisma.post.findUnique({
      where: { id: postId },
    });

    if (!existingPost) {
      return NextResponse.json({ message: 'Post not found' }, { status: 404 });
    }

    const updatedPost = await prisma.post.update({
      where: { id: postId },
      data: { body, imageUrl, title },
    });

    return NextResponse.json(
      { message: 'Post updated succesfully', post: updatedPost },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: 'Something went wrong! please try later',
      },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params: { postId } }: { params: { postId: string } }
) {
  const session = await getServerAuthSession();

  if (!session) {
    redirect('/login');
  }
  try {
    await connectDB();
    const post = await prisma.post.findUnique({ where: { id: postId } });

    if (!post) {
      return NextResponse.json({ message: 'Post not found' }, { status: 404 });
    }
    const deletedPost = await prisma.post.delete({
      where: { id: postId },
    });

    return NextResponse.json({ message: 'Post Deleted' }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      {
        message: 'Something went wrong! please try later',
      },
      { status: 500 }
    );
  }
}
