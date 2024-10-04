'use client';
// import { signIn } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input, Button } from '@nextui-org/react';

import { useLoginFormSchema } from './LoginFormSchema';

export const LoginForm = function () {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const loginFormSchema = useLoginFormSchema();

  type formDataType = z.infer<typeof loginFormSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formDataType>({
    resolver: zodResolver(loginFormSchema),
  });
  const onSubmit = async (data: formDataType) => {
    setIsSubmitting(true);
    try {
      // const res = await signIn("credentials", {
      //   username: data.username,
      //   password: data.password,
      //   redirect: false,
      // });

      // if (res?.status === 401) {
      //   throw new Error("Wrong username or password");
      // }
      // if (res?.status === 500) {
      //   throw new Error("Something goes wrong in the server");
      // }
      router.push('/');
    } catch (error) {
      setIsSubmitting(false);
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error('An unexpected error occurred');
      }
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Username or Email"
        type="text"
        variant="bordered"
        {...register('username', {
          required: { value: true, message: 'This field is required' },
        })}
      />
      {errors.username && (
        <small className="text-red-500">{errors.username.message}</small>
      )}
      <Input
        label="Password"
        type="password"
        variant="bordered"
        {...register('password', {
          required: { value: true, message: 'This field is required' },
        })}
      />
      {errors.password && (
        <small className="text-red-500">{errors.password.message}</small>
      )}
      <div className="items-center justify-between gap-2">
        <Button
          className="w-full"
          color="primary"
          isDisabled={isSubmitting}
          isLoading={isSubmitting}
          type="submit"
        >
          Login
        </Button>
      </div>
    </form>
  );
};
