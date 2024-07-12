import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider, Skeleton } from "@nextui-org/react";

const PostListSkeleton = function () {
	return (
		<>
			<Card>
				<CardHeader className=" flex-col items-start">
					<Skeleton className="h-10 w-10 rounded-full" />
				</CardHeader>
				<Divider />
				<CardBody className="overflow-visible py-2 space-y-4 ">
					<Skeleton className="h-2 w-10 rounded-md" />
					<Skeleton className="rounded-xl w-full h-28" />
				</CardBody>
				<CardFooter className="flex items-center justify-between">
					<Skeleton className="h-5 w-full rounded-md" />
				</CardFooter>
			</Card>
			<Card>
				<CardHeader className=" flex-col items-start">
					<Skeleton className="h-10 w-10 rounded-full" />
				</CardHeader>
				<Divider />
				<CardBody className="overflow-visible py-2 space-y-4 ">
					<Skeleton className="h-2 w-10 rounded-md" />
					<Skeleton className="rounded-xl w-full h-28" />
				</CardBody>
				<CardFooter className="flex items-center justify-between">
					<Skeleton className="h-5 w-full" />
				</CardFooter>
			</Card>
			<Card>
				<CardHeader className=" flex-col items-start">
					<Skeleton className="h-10 w-10 rounded-full" />
				</CardHeader>
				<Divider />
				<CardBody className="overflow-visible py-2 space-y-4 ">
					<Skeleton className="h-2 w-10 rounded-md" />
					<Skeleton className="rounded-xl w-full h-28" />
				</CardBody>
				<CardFooter className="flex items-center justify-between">
					<Skeleton className="h-5 w-full" />
				</CardFooter>
			</Card>
			<Card>
				<CardHeader className=" flex-col items-start">
					<Skeleton className="h-10 w-10 rounded-full" />
				</CardHeader>
				<Divider />
				<CardBody className="overflow-visible py-2 space-y-4 ">
					<Skeleton className="h-2 w-10 rounded-md" />
					<Skeleton className="rounded-xl w-full h-28" />
				</CardBody>
				<CardFooter className="flex items-center justify-between">
					<Skeleton className="h-5 w-full" />
				</CardFooter>
			</Card>
			<Card>
				<CardHeader className=" flex-col items-start">
					<Skeleton className="h-10 w-10 rounded-full" />
				</CardHeader>
				<Divider />
				<CardBody className="overflow-visible py-2 space-y-4 ">
					<Skeleton className="h-2 w-10 rounded-md" />
					<Skeleton className="rounded-xl w-full h-28" />
				</CardBody>
				<CardFooter className="flex items-center justify-between">
					<Skeleton className="h-5 w-full" />
				</CardFooter>
			</Card>
			<Card>
				<CardHeader className=" flex-col items-start">
					<Skeleton className="h-10 w-10 rounded-full" />
				</CardHeader>
				<Divider />
				<CardBody className="overflow-visible py-2 space-y-4 ">
					<Skeleton className="h-2 w-10 rounded-md" />
					<Skeleton className="rounded-xl w-full h-28" />
				</CardBody>
				<CardFooter className="flex items-center justify-between">
					<Skeleton className="h-5 w-full" />
				</CardFooter>
			</Card>
			<Card>
				<CardHeader className=" flex-col items-start">
					<Skeleton className="h-10 w-10 rounded-full" />
				</CardHeader>
				<Divider />
				<CardBody className="overflow-visible py-2 space-y-4 ">
					<Skeleton className="h-2 w-10 rounded-md" />
					<Skeleton className="rounded-xl w-full h-28" />
				</CardBody>
				<CardFooter className="flex items-center justify-between">
					<Skeleton className="h-5 w-full" />
				</CardFooter>
			</Card>
			<Card>
				<CardHeader className=" flex-col items-start">
					<Skeleton className="h-10 w-10 rounded-full" />
				</CardHeader>
				<Divider />
				<CardBody className="overflow-visible py-2 space-y-4 ">
					<Skeleton className="h-2 w-10 rounded-md" />
					<Skeleton className="rounded-xl w-full h-28" />
				</CardBody>
				<CardFooter className="flex items-center justify-between">
					<Skeleton className="h-5 w-full" />
				</CardFooter>
			</Card>
		</>
	);
};

export default PostListSkeleton;
