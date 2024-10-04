import dynamic from 'next/dynamic';

import PostFormSkeleton from '../PostFormSkeleton';

// #TODO
// @ts-ignore
import prisma from '../../../prisma/client';

const PostForm = dynamic(() => import('../PostForm'), {
  ssr: false,
  loading: () => <PostFormSkeleton />,
});

export const EditPostPage = async function ({ postId }: { postId: string }) {
  const post = await prisma.post.findUnique({
    where: { id: postId },
  });

  return (
    <>
      <PostForm post={post} />
    </>
  );
};
