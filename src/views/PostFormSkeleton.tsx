import { Skeleton } from '@nextui-org/react';

const PostFormSkeleton = function () {
  return (
    <section>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        <div className="flex flex-col items-center justify-center gap-2 border border-dashed">
          <Skeleton className="h-40 w-40 rounded-md" />
          <Skeleton className="h-10 w-40 rounded-md" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-16 rounded-md" />
          <Skeleton className="h-72 rounded-md" />
          <Skeleton className="mt-5 h-10 w-20 rounded-md" />
        </div>
      </div>
    </section>
  );
};

export default PostFormSkeleton;
