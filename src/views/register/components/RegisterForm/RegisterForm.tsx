'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Avatar } from '@nextui-org/avatar';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

import { useRegisterFormSchema } from './registerFormSchema';

import { UploadButton } from '@/modules';

export const RegisterForm = function () {
  const [profileImage, setProfileImage] = useState<string | undefined>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formSchema = useRegisterFormSchema();

  type RegisterFormData = z.infer<typeof formSchema>;

  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async function (data: RegisterFormData) {
    setIsSubmitting(true);
    try {
      const res = await axios.post('/api/user/register', {
        username: data.username,
        image: data?.image || undefined,
        email: data.email,
        name: data.name,
        password: data.password,
        confirmPassword: data.confirmPassword,
      });

      toast.success(res.data.message);
      router.push('/login');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
      } else {
        console.error(error);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
      <div className="mt-10 flex flex-col items-center justify-center gap-3">
        <Avatar
          isBordered
          className="h-24 w-24 text-large md:h-40 md:w-40"
          src={profileImage}
        />

        <UploadButton
          appearance={{
            clearBtn: 'bg-red-500',
          }}
          endpoint="imageUploader"
          // @ts-expect-error: ignore any type here
          onClientUploadComplete={(res) => {
            setValue('image', res[0].url);
            setProfileImage(res[0].url);
            toast.success('Image uploaded');
          }}
          onUploadError={() => {
            toast.error(
              'Uploadthings: Failed to upload image, please try later'
            );
          }}
        />
      </div>
      <Input
        label="Name"
        type="text"
        variant="bordered"
        {...register('name', { required: true })}
      />
      {errors.name && (
        <small className="text-red-500">This field is required</small>
      )}
      <div className="flex flex-col gap-2 md:flex-row">
        <div className="flex-1">
          <Input
            label="Username"
            type="text"
            variant="bordered"
            {...register('username', { required: true })}
          />
          {errors.username && (
            <small className="text-red-500">This field is required</small>
          )}
        </div>
        <div className="flex-1">
          <Input
            label="Email"
            type="email"
            variant="bordered"
            {...register('email', { required: true })}
          />
          {errors.email && (
            <small className="text-red-500">This field is required</small>
          )}
        </div>
      </div>

      <Input
        label="Password"
        type="password"
        variant="bordered"
        {...register('password', { required: true })}
      />
      {errors.password && (
        <small className="text-red-500">{errors.password.message}</small>
      )}
      <Input
        label="Confirm Password"
        type="password"
        variant="bordered"
        {...register('confirmPassword', {
          required: true,
          validate: (val: string) => {
            if (watch('password') != val) {
              return 'Your passwords do no match';
            }
          },
        })}
      />
      {errors.confirmPassword && (
        <small className="text-red-500">{errors.confirmPassword.message}</small>
      )}
      <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
        <Button
          className="w-full md:flex-1"
          color="primary"
          disabled={isSubmitting}
          isLoading={isSubmitting}
          type="submit"
        >
          Register
        </Button>
        <span className="flex gap-1">
          Already have an account?
          <Link className="text-primary-500" href="/login">
            login.
          </Link>
        </span>
      </div>
    </form>
  );
};
