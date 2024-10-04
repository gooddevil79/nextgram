'use client';

import { Button, Image, Input } from '@nextui-org/react';
import { Post } from '@prisma/client';
import axios from 'axios';
import 'easymde/dist/easymde.min.css';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import SimpleMDE from 'react-simplemde-editor';
import { z } from 'zod';

import { NewPostSchema } from '@/app/utils/zod.validations';
import { UploadButton } from '@/modules';

type postFormType = z.infer<typeof NewPostSchema>;

const PostForm = function ({ post }: { post?: Post }) {
  const [imageUrl, setImageUrl] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const { register, control, handleSubmit, setValue } = useForm<postFormType>();

  useEffect(() => {
    if (post) {
      setValue('body', post.body);
      setValue('title', post.title);
      setValue('imageUrl', post.imageUrl || '');
      setImageUrl(post.imageUrl || '');
    }
  }, [post, setValue]);

  const onSubmitHandler = async (data: postFormType) => {
    setIsSubmitting(true);
    try {
      const action = post
        ? axios.put(`/api/posts/${post.id}`, data)
        : axios.post('/api/posts', data);
      const res = await action;

      toast.success(res.data.message);
      router.push('/');
      router.refresh();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error?.response?.data?.message);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section>
      <form
        className="grid grid-cols-1 gap-2 md:grid-cols-2"
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <div className="flex flex-col items-center justify-center gap-2 border border-dashed">
          <Image
            alt="NextUI hero Image"
            className="h-40 w-full border"
            src={imageUrl || undefined}
            width={300}
          />
          <UploadButton
            appearance={{
              clearBtn: 'bg-red-500',
            }}
            className="justify-self-end"
            endpoint="imageUploader"
            onClientUploadComplete={(res: any) => {
              setValue('imageUrl', res[0].url);
              setImageUrl(res[0].url);
              toast.success('Image uploaded');
            }}
            onUploadError={() => {
              toast.error('Could not upload! Please try later');
            }}
          />
        </div>
        <div className="space-y-2">
          <Input
            label="Title"
            variant="bordered"
            {...register('title', { required: true })}
          />
          <Controller
            control={control}
            name="body"
            render={({ field }) => (
              <SimpleMDE
                placeholder="Description for your post. (optional)"
                {...field}
              />
            )}
          />
          <div className="flex gap-2">
            <Button
              className="w-full sm:w-auto"
              isDisabled={isSubmitting}
              isLoading={isSubmitting}
              type="submit"
              variant="bordered"
            >
              {post ? 'Update Post' : 'Upload Post'}
            </Button>
            {post && (
              <Button
                className="w-full sm:w-auto"
                color="danger"
                isDisabled={isSubmitting}
                isLoading={isSubmitting}
                type="submit"
                variant="bordered"
              >
                Delete Post
              </Button>
            )}
          </div>
        </div>
      </form>
    </section>
  );
};

export default PostForm;
