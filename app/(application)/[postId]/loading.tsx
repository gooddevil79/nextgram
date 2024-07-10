import { Divider, Skeleton } from "@nextui-org/react";
import GoBackButton from "../components/GoBackButton";

const LoadingPost = function () {
	return (
		<div className="space-y-2">
			<GoBackButton />
			<Skeleton style={{ height: 1000, width: "100%" }} />
			<div className="flex my-2 justify-between items-center">
				<div>
					{/* <h1 className="text-2xl">{post?.title}</h1> */}
					<Skeleton style={{ height: 1000, width: "100%" }} />
				</div>
				<div className="border flex gap-2 h-full">
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
