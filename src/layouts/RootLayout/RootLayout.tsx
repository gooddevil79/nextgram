import '@/styles/globals.css';
import clsx from 'clsx';
import { Toaster } from 'react-hot-toast';

import { SessionProvider } from '@/modules/auth';
import { NextUiProvider } from '@/providers/NextUiProvider';
import { fontSans } from '@/config/fonts';

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <SessionProvider>
          <NextUiProvider
            themeProps={{ attribute: 'class', defaultTheme: 'dark' }}
          >
            {children}
            <Toaster />
          </NextUiProvider>
        </SessionProvider>
      </body>
    </html>
  );
};
