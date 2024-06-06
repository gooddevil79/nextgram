"use client"; // is needed only if you’re using React Server Components
import { Input } from "@nextui-org/input";
import { FileUploaderInline } from "@uploadcare/react-uploader";
import "@uploadcare/react-uploader/core.css";
import { useEffect, useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Button } from "@nextui-org/button";

const PostForm = function () {
	const [imageUrl, setImageUrl] = useState("");

	return (
		<section>
			<form action="" className="space-y-3">
				<FileUploaderInline
					pubkey={process.env.UPLOADCARE_PUB_KEY!}
					multiple={false}
					maxLocalFileSizeBytes={10000000}
					sourceList="local, camera, instagram"
					className="w-full border rounded-sm overflow-hidden mb-2"
				/>
				<Input label="Title" variant="underlined" />
				<SimpleMDE
					placeholder="Post description"
					options={{
						toolbar: [
							"bold",
							"italic",
							"heading",
							"|",
							"quote",
							"strikethrough",
							"code",
							"ordered-list",
							"unordered-list",
							"table",
							"|",
							"link",
							"|",
							"preview",
							"guide",
						],
					}}
				/>
				<Button variant="bordered">Upload Post</Button>
			</form>
		</section>
	);
};

export default PostForm;
