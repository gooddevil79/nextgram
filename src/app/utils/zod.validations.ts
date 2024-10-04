import { z } from 'zod';

const NewPostSchema = z.object({
  imageUrl: z.string(),
  title: z.string().min(3),
  body: z.string().optional().nullable(),
});

export { NewPostSchema };
