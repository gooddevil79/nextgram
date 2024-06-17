"use client";

import { Button } from "@nextui-org/button";

const ExploreErrorPage = function ({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<div>
			<h1>Faild to load data</h1>
			<Button onClick={() => reset()}>Try again</Button>
		</div>
	);
};

export default ExploreErrorPage;
