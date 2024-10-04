'use client';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@nextui-org/dropdown';
import { User } from '@nextui-org/user';
import React from 'react';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { Skeleton } from '@nextui-org/react';

import {
  UserIcon,
  SettingIcon,
  QuestionMarkIcon,
  SignOutIcon,
  SignInIcon,
  UserPlusIcon,
} from '@/public/icons';
export const AuthStatus = function () {
  const { data, status } = useSession();

  const isLoading = status === 'loading';
  const isAuthed = status === 'authenticated';

  return (
    <>
      {isLoading ? (
        <div className="flex items-center gap-2 md:w-52">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="hidden flex-1 flex-col space-y-1 md:flex">
            <Skeleton className="h-3" />
            <Skeleton className="h-2 w-20" />
          </div>
        </div>
      ) : (
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <User
              avatarProps={{
                src: data?.user?.image!,
              }}
              className="cursor-pointer transition-transform hover:scale-95"
              description={
                <p className="hidden dark:text-gray-300 md:block">
                  {data?.user?.email}
                </p>
              }
              name={<p className="hidden md:block">{data?.user?.name}</p>}
            />
          </DropdownTrigger>

          {isAuthed ? (
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem
                key="profile"
                as={Link}
                href="/profile"
                startContent={<UserIcon className="h-5 w-5" />}
              >
                Profile
              </DropdownItem>
              <DropdownItem
                key="setting"
                as={Link}
                href="/setting"
                startContent={<SettingIcon className="h-5 w-5" />}
              >
                Setting
              </DropdownItem>
              <DropdownItem
                key="help_and_feedback"
                showDivider
                as={Link}
                href="/help-and-feedback"
                startContent={<QuestionMarkIcon className="h-5 w-5" />}
              >
                Help & Feedback
              </DropdownItem>

              <DropdownItem
                key="logout"
                color="danger"
                startContent={<SignOutIcon className="h-5 w-5" />}
                onClick={() => signOut()}
              >
                Log Out
              </DropdownItem>
            </DropdownMenu>
          ) : (
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem
                key="login"
                as={Link}
                href="/login"
                startContent={<SignInIcon className="h-5 w-5" />}
              >
                Login
              </DropdownItem>
              <DropdownItem
                key="register"
                showDivider
                as={Link}
                href="/register"
                startContent={<UserPlusIcon className="h-5 w-5" />}
              >
                Register
              </DropdownItem>
              <DropdownItem
                key="help_and_feedback"
                as={Link}
                href="/help-and-feedback"
                startContent={<QuestionMarkIcon className="h-5 w-5" />}
              >
                Help & Feedback
              </DropdownItem>
            </DropdownMenu>
          )}
        </Dropdown>
      )}
    </>
  );
};
