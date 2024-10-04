'use client';

import { PropsWithChildren } from 'react';
import { SessionProvider as NextAuthSessionProvider } from 'next-auth/react';

export const SessionProvider = function ({ children }: PropsWithChildren) {
  return <NextAuthSessionProvider>{children}</NextAuthSessionProvider>;
};
