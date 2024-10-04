import { Divider, Skeleton } from '@nextui-org/react';

import { GoBackButton } from '@/components';

const LoadingPost = function () {
  return (
    <div className="space-y-2">
      <GoBackButton />
      <Skeleton style={{ height: 1000, width: '100%' }} />
      <div className="my-2 flex items-center justify-between">
        <div>
          {/* <h1 className="text-2xl">{post?.title}</h1> */}
          <Skeleton style={{ height: 1000, width: '100%' }} />
        </div>
        <div className="flex h-full gap-2 border">
          {/* <LikeIcon /> */}
          {/* <DislikeIcon /> */}
          {/* <ChatCircleDotsIcon /> */}
        </div>
      </div>
      <Divider />
      {/* <ReactMarkdown className={"prose"}>{post?.body}</ReactMarkdown> */}
    </div>
  );
};

export default LoadingPost;
