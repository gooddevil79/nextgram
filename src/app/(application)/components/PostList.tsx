import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { Divider, Link } from '@nextui-org/react';
import { User } from '@nextui-org/user';
import { Post } from '@prisma/client';
import Image from 'next/image';
import NextLink from 'next/link';
import { ChatCircleDotsIcon, DislikeIcon, LikeIcon } from '@public/icons';

import prisma from '../../../../prisma/client';

const PostList = async function () {
  let posts: Post[] = [];

  try {
    posts = await prisma.post.findMany({
      include: { author: true },
    });
    console.log(posts);
  } catch (error) {}

  return (
    <>
      {posts?.map((post) => (
        <Card key={post.id} isHoverable>
          <CardHeader className="flex-col items-start">
            <User
              avatarProps={{
                src: post.author.image || undefined,
              }}
              description={
                <Link
                  isExternal
                  as={NextLink}
                  href="https://twitter.com/jrgarciadev"
                  size="sm"
                >
                  {`@${post.author.username}`}
                </Link>
              }
              name={post?.author?.name}
            />
          </CardHeader>
          <Divider />
          <NextLink href={`/${post.id}`}>
            <CardBody className="overflow-visible py-2">
              <p className="text-tiny font-bold uppercase">{post.title}</p>
              <Image
                alt="Card background"
                className="h-28 w-full rounded-xl object-cover"
                height={270}
                src={post.imageUrl || ''}
                width={270}
              />
            </CardBody>
          </NextLink>
          <CardFooter className="flex items-center justify-between">
            <div className="flex">
              <LikeIcon className="h-6 w-6" />
              <DislikeIcon className="h-6 w-6 scale-x-[-1]" />
            </div>
            <div className="flex items-center gap-1">
              <p className="text-small font-semibold text-default-400">97.1K</p>
              <p className="text-small text-default-400">
                <ChatCircleDotsIcon className="h-6 w-6" />
              </p>
            </div>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default PostList;
