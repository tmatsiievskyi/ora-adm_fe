import { object, string, z } from 'zod';

export const searchSubserviceSchema = object({
  search: string(),
});

export type TSearchSubserviceSchema = z.infer<typeof searchSubserviceSchema>;

export const searchSubserviceDefaultValues: TSearchSubserviceSchema = {
  search: '',
};
