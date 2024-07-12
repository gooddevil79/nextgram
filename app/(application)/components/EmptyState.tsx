import React from "react";

const EmptyState = function ({ name }: { name?: string }) {
	return (
		<p className="text-center text-gray-300 text-xl">
			No {name || "data"} to dispaly
		</p>
	);
};

export default EmptyState;
