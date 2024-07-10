import dynamic from "next/dynamic";
import PostFormSkeleton from "../../components/PostFormSkeleton";
import prisma from "@/prisma/client";

const PostForm = dynamic(() => import("../../components/PostForm"), {
	ssr: false,
	loading: () => <PostFormSkeleton />,
});

const EditPostPage = async function ({
	params: { postId },
}: {
	params: { postId: string };
}) {
	const post = await prisma.post.findUnique({
		where: { id: postId },
	});

	return (
		<>
			<PostForm post={post} />
		</>
	);
};

export default EditPostPage;
