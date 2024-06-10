"use client";
import { Card } from "@nextui-org/card";
import { Avatar } from "@nextui-org/react";
import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const ProfilePage = function () {
	const { data, status } = useSession();
	const [isLoading, setIsLoading] = useState();
	const fetchUserdata = async (id: string) => {
		const user = axios.get("/user/me");
	};
	useEffect(() => {
		fetchUserdata(data?.user?.id!);
	}, []);
	return (
		<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
			{/* <Card className="p-2  row-span-full">
				<Avatar src={session?.user!.image || undefined} className="w-40 h-40" />
			</Card>
			<Card>s</Card>
			<Card>s</Card>
			<Card className="col-start-2">s</Card>
			<Card>ss</Card> */}
		</div>
	);
};

export default ProfilePage;
