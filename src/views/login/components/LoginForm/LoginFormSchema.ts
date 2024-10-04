import { useMemo } from 'react';
import { z } from 'zod';

export const useLoginFormSchema = () => {
  const schema = useMemo(
    () =>
      z.object({
        username: z.string(),
        email: z.string().email('Email is not valid'),
        password: z.string().min(5, 'Password must be at least 5 Characters'),
      }),
    []
  );

  return schema;
};
