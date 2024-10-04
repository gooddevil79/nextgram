import { PostPage } from '@/views/post';

export const Page = ({
  params: { postId },
}: {
  params: { postId: string };
}) => {
  return <PostPage postId={postId} />;
};
