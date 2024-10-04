import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { Divider, Skeleton } from '@nextui-org/react';

const PostListSkeleton = function () {
  return (
    <>
      <Card>
        <CardHeader className="flex-col items-start">
          <Skeleton className="h-10 w-10 rounded-full" />
        </CardHeader>
        <Divider />
        <CardBody className="space-y-4 overflow-visible py-2">
          <Skeleton className="h-2 w-10 rounded-md" />
          <Skeleton className="h-28 w-full rounded-xl" />
        </CardBody>
        <CardFooter className="flex items-center justify-between">
          <Skeleton className="h-5 w-full rounded-md" />
        </CardFooter>
      </Card>
      <Card>
        <CardHeader className="flex-col items-start">
          <Skeleton className="h-10 w-10 rounded-full" />
        </CardHeader>
        <Divider />
        <CardBody className="space-y-4 overflow-visible py-2">
          <Skeleton className="h-2 w-10 rounded-md" />
          <Skeleton className="h-28 w-full rounded-xl" />
        </CardBody>
        <CardFooter className="flex items-center justify-between">
          <Skeleton className="h-5 w-full" />
        </CardFooter>
      </Card>
      <Card>
        <CardHeader className="flex-col items-start">
          <Skeleton className="h-10 w-10 rounded-full" />
        </CardHeader>
        <Divider />
        <CardBody className="space-y-4 overflow-visible py-2">
          <Skeleton className="h-2 w-10 rounded-md" />
          <Skeleton className="h-28 w-full rounded-xl" />
        </CardBody>
        <CardFooter className="flex items-center justify-between">
          <Skeleton className="h-5 w-full" />
        </CardFooter>
      </Card>
      <Card>
        <CardHeader className="flex-col items-start">
          <Skeleton className="h-10 w-10 rounded-full" />
        </CardHeader>
        <Divider />
        <CardBody className="space-y-4 overflow-visible py-2">
          <Skeleton className="h-2 w-10 rounded-md" />
          <Skeleton className="h-28 w-full rounded-xl" />
        </CardBody>
        <CardFooter className="flex items-center justify-between">
          <Skeleton className="h-5 w-full" />
        </CardFooter>
      </Card>
      <Card>
        <CardHeader className="flex-col items-start">
          <Skeleton className="h-10 w-10 rounded-full" />
        </CardHeader>
        <Divider />
        <CardBody className="space-y-4 overflow-visible py-2">
          <Skeleton className="h-2 w-10 rounded-md" />
          <Skeleton className="h-28 w-full rounded-xl" />
        </CardBody>
        <CardFooter className="flex items-center justify-between">
          <Skeleton className="h-5 w-full" />
        </CardFooter>
      </Card>
      <Card>
        <CardHeader className="flex-col items-start">
          <Skeleton className="h-10 w-10 rounded-full" />
        </CardHeader>
        <Divider />
        <CardBody className="space-y-4 overflow-visible py-2">
          <Skeleton className="h-2 w-10 rounded-md" />
          <Skeleton className="h-28 w-full rounded-xl" />
        </CardBody>
        <CardFooter className="flex items-center justify-between">
          <Skeleton className="h-5 w-full" />
        </CardFooter>
      </Card>
      <Card>
        <CardHeader className="flex-col items-start">
          <Skeleton className="h-10 w-10 rounded-full" />
        </CardHeader>
        <Divider />
        <CardBody className="space-y-4 overflow-visible py-2">
          <Skeleton className="h-2 w-10 rounded-md" />
          <Skeleton className="h-28 w-full rounded-xl" />
        </CardBody>
        <CardFooter className="flex items-center justify-between">
          <Skeleton className="h-5 w-full" />
        </CardFooter>
      </Card>
      <Card>
        <CardHeader className="flex-col items-start">
          <Skeleton className="h-10 w-10 rounded-full" />
        </CardHeader>
        <Divider />
        <CardBody className="space-y-4 overflow-visible py-2">
          <Skeleton className="h-2 w-10 rounded-md" />
          <Skeleton className="h-28 w-full rounded-xl" />
        </CardBody>
        <CardFooter className="flex items-center justify-between">
          <Skeleton className="h-5 w-full" />
        </CardFooter>
      </Card>
    </>
  );
};

export default PostListSkeleton;
