import { Suspense } from "react";
import PostList from "../components/PostList";
import PostListSkeleton from "../components/PostListSkeleton";

export default async function ExplorePage() {
	return (
		<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
			<Suspense fallback={<PostListSkeleton />}>
				<PostList />
			</Suspense>
		</div>
	);
}
