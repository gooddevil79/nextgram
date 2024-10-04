import { Divider, Image, User } from '@nextui-org/react';
import ReactMarkdown from 'react-markdown';

import {
  ChatCircleDotsIcon,
  DislikeIcon,
  LikeIcon,
} from '../../../public/icons';
import prisma from '../../../prisma/client';

import { GoBackButton } from '@/components';

export const PostPage = async function ({ postId }: { postId: string }) {
  const post = await prisma.post.findUnique({
    where: { id: postId },
    include: { author: true, comments: true },
  });

  return (
    <div className="space-y-2">
      <GoBackButton />
      <Image
        alt={post?.title!}
        className="max-h-[500px] border object-cover"
        height={1080}
        src={post?.imageUrl!}
        width={1920}
      />
      <div className="my-2 flex items-center justify-between">
        <div>
          <h1 className="text-2xl">{post?.title}</h1>
          <User
            avatarProps={{
              src: post?.author?.image!,
            }}
            className="cursor-pointer transition-transform hover:scale-95"
            description={
              <p className="hidden dark:text-gray-300 md:block">
                {post?.author.username}
              </p>
            }
            name={<p className="hidden md:block">{post?.author?.name}</p>}
          />
        </div>
        <div className="flex h-full gap-2 border">
          <LikeIcon />
          <DislikeIcon />
          <ChatCircleDotsIcon />
        </div>
      </div>
      <Divider />
      <ReactMarkdown className={'prose'}>{post?.body}</ReactMarkdown>
    </div>
  );
};
