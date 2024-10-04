import dynamic from 'next/dynamic';

import PostFormSkeleton from '../../../views/PostFormSkeleton';

const PostForm = dynamic(() => import('../../../views/PostForm'), {
  ssr: false,
  loading: () => <PostFormSkeleton />,
});

const NewPostPage = function () {
  return <PostForm />;
};

export default NewPostPage;
