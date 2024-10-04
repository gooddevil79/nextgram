import { Metadata } from 'next';

import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - login`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
  },
};

export { AuthLayout as default } from '@/layouts/AuthLayout';
