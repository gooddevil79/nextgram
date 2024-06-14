import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider, Skeleton } from "@nextui-org/react";

const PostListSkeleton = function () {
	const skeletonItems = [1, 2, 3, 4, 5, 6, 7, 8];
	return (
		<>
			{skeletonItems.map(itm => (
				<Card key={itm}>
					<CardHeader className=" flex-col items-start">
						<Skeleton className="h-10 w-10 rounded-full" />
					</CardHeader>
					<Divider />
					<CardBody className="overflow-visible py-2 space-y-4 ">
						<p className="text-tiny uppercase font-bold">
							<Skeleton className="h-2 w-10 rounded-md" />
						</p>
						<Skeleton className="rounded-xl w-full h-28" />
					</CardBody>
					<CardFooter className="flex items-center justify-between">
						<Skeleton className="h-5 w-full" />
					</CardFooter>
				</Card>
			))}
		</>
	);
};

export default PostListSkeleton;
