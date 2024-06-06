"use client";

import { PropsWithChildren } from "react";
import { SessionProvider } from "next-auth/react";

const AuthProvider = function ({ children }: PropsWithChildren) {
	return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
