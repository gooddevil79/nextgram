'use client';

import * as React from 'react';
import { NextUIProvider as NUProvider } from '@nextui-org/system';
import { useRouter } from 'next/navigation';
import { ThemeProvider } from 'next-themes';
import { ThemeProviderProps } from 'next-themes/dist/types';

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}
export const NextUiProvider = ({ children, themeProps }: ProvidersProps) => {
  const router = useRouter();

  return (
    <NUProvider navigate={router.push}>
      <ThemeProvider {...themeProps}>{children}</ThemeProvider>
    </NUProvider>
  );
};
