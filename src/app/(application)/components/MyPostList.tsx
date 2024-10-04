'use client';

import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { Divider } from '@nextui-org/react';
import { Post } from '@prisma/client';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import {
  ChatCircleDotsIcon,
  DislikeIcon,
  LikeIcon,
  PencilSimpleLine,
  TrashSimple,
} from '@public/icons';

import { EmptyState } from '@/components';

const MyPostList = function () {
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const fetchUserPost = async () => {
    try {
      const res = await axios.get('/api/user/posts');

      setPosts(res.data.posts);
    } catch (error) {}
  };

  useEffect(() => {
    fetchUserPost();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const res = await axios.delete(`/api/posts/${id}`);

      toast.success(res.data.message);
      router.refresh();
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        toast.error(
          error.response?.data.message ||
            'Something went wrong! Please try later'
        );
      }
    }
  };

  return (
    <>
      {posts?.length ? (
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {posts?.map((post: Post) => (
            <Card key={post.id}>
              <CardHeader className="flex items-start justify-between">
                <Link href={`/${post.id}/edit`}>
                  <PencilSimpleLine className="h-6 w-6 hover:text-blue-500" />
                </Link>
                <TrashSimple
                  className="h-6 w-6 cursor-pointer hover:text-red-500"
                  onClick={() => handleDelete(post.id)}
                />
              </CardHeader>
              <Divider />
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
              <CardFooter className="flex items-center justify-between">
                <div className="flex">
                  <LikeIcon className="h-6 w-6" />
                  <DislikeIcon className="h-6 w-6 scale-x-[-1]" />
                </div>
                <div className="flex items-center gap-1">
                  <p className="text-small font-semibold text-default-400">
                    97.1K
                  </p>
                  <p className="text-small text-default-400">
                    <ChatCircleDotsIcon className="h-6 w-6" />
                  </p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <EmptyState name="post" />
      )}
    </>
  );
};

export default MyPostList;
