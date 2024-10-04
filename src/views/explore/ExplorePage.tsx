import { Suspense } from 'react';

import PostListSkeleton from '@/app/(application)/components/PostListSkeleton';
import PostList from '@/app/(application)/components/PostList';

export const ExplorePage = () => {
  return (
    <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <Suspense fallback={<PostListSkeleton />}>
        <PostList />
      </Suspense>
    </div>
  );
};
