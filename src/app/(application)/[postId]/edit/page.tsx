import { EditPostPage } from '@/views/edit-post';

export const Page = ({
  params: { postId },
}: {
  params: { postId: string };
}) => {
  return <EditPostPage postId={postId} />;
};
