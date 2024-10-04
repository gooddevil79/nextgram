'use client';

import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from '@nextui-org/navbar';
import { link as linkStyles } from '@nextui-org/theme';
import clsx from 'clsx';
import NextLink from 'next/link';
import { Link } from '@nextui-org/link';
import { usePathname } from 'next/navigation';

import AuthStatus from '../AuthStatus/AuthStatus';

import { siteConfig } from '@/config/site';
import { Logo } from '@/public/icons';

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <NextUINavbar className="shadow-sm" maxWidth="2xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="max-w-fit gap-3">
          <NextLink className="flex items-center justify-start gap-1" href="/">
            <Logo className="h-10 w-10" />
            <p className="font-bold text-inherit">{siteConfig.name}</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden gap-4 md:flex">
          {siteConfig.menuItems.map(({ href, label, icon: MenuIcon }) => (
            <NavbarItem key={href} isActive={pathname === href}>
              <Link
                as={NextLink}
                className={clsx(
                  linkStyles({ color: 'foreground' }),
                  'gap-1 data-[active=true]:font-medium data-[active=true]:text-primary'
                )}
                href={href}
                underline={pathname === href ? 'none' : 'always'}
              >
                {MenuIcon && <MenuIcon className="h-5 w-5" />}
                {label}
              </Link>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>
      <NavbarContent as="div" className="basis-1 pl-4" justify="end">
        <div className="md:hidden">
          <NavbarMenuToggle className="h-8 w-8 border text-2xl" />
        </div>
        <AuthStatus />
      </NavbarContent>
      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.menuItems.map(
            ({ href, icon: MenuIcon, label }, index) => (
              <NavbarMenuItem key={`${href}-${index}`}>
                <NextLink className="flex gap-2" href={href}>
                  <MenuIcon className="h-5 w-5" />
                  {label}
                </NextLink>
              </NavbarMenuItem>
            )
          )}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
