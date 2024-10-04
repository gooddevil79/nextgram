import { Divider, Card, CardHeader } from '@nextui-org/react';
import { Suspense } from 'react';

import MyPostList from '@/app/(application)/components/MyPostList';

export const HomePage = () => {
  return (
    <div className="space-y-3">
      <div className="grid gap-2 md:grid-cols-3">
        <Card>
          <CardHeader className="flex items-center justify-between gap-2">
            <h2>Posts</h2>
            <p className="text-2xl">10</p>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="flex items-center justify-between gap-2">
            <h2>Likes</h2>
            <p className="text-2xl">10k</p>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="flex items-center justify-between gap-2">
            <h2>Comments</h2>
            <p className="text-2xl">10k</p>
          </CardHeader>
        </Card>
      </div>

      <h2>My Posts :</h2>
      <Divider />
      <Suspense fallback={<p>Loading</p>}>
        <MyPostList />
      </Suspense>
    </div>
  );
};
