import { Skeleton } from "@nextui-org/react";

const PostFormSkeleton = function () {
	return (
		<section>
			<div className=" grid grid-cols-1 md:grid-cols-2 gap-2">
				<div className="border border-dashed flex justify-center items-center flex-col gap-2">
					<Skeleton className="w-40 h-40 rounded-md" />
					<Skeleton className="w-40 h-10 rounded-md" />
				</div>
				<div className="space-y-2">
					<Skeleton className="h-16 rounded-md" />
					<Skeleton className="h-72 rounded-md" />
					<Skeleton className="h-10 w-20 mt-5 rounded-md" />
				</div>
			</div>
		</section>
	);
};

export default PostFormSkeleton;
