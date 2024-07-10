"use client";

import { ArrowUUpLeftIcon } from "@/public/icons";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";

const GoBackButton = function () {
	const router = useRouter();

	return (
		<Button
			variant="bordered"
			isIconOnly
			className="mb-2"
			onClick={() => router.back()}
		>
			<ArrowUUpLeftIcon className="w-7 h-7" />
		</Button>
	);
};

export default GoBackButton;
