import dynamic from "next/dynamic";
import PostFormSkeleton from "../components/PostFormSkeleton";

const PostForm = dynamic(() => import("../components/PostForm"), {
	ssr: false,
	loading: () => <PostFormSkeleton />,
});

const NewPostPage = function () {
	return <PostForm />;
};

export default NewPostPage;
