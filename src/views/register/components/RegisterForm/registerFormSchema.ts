import { useMemo } from 'react';
import { z } from 'zod';

export const useRegisterFormSchema = () => {
  const schema = useMemo(
    () =>
      z.object({
        username: z
          .string()
          .min(4, 'Username must be 4 letter at least')
          .max(15, "Username can't be more than 15 characters"),
        email: z.string().email('Email is not valid'),
        name: z.string().min(3),
        password: z.string().min(5, 'Password must be at least 5 Characters'),
        image: z.string().optional().nullable(),
        confirmPassword: z
          .string()
          .min(5, 'Password must be at least 5 Characters'),
      }),
    []
  );

  return schema;
};
