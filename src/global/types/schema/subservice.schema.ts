import { number, object, string, z } from 'zod';

export const searchSubserviceSchema = object({
  search: string(),
});

export const updateSubservicePriceSchema = object({
  id: string(),
  price: number(),
});

export type TSearchSubserviceSchema = z.infer<typeof searchSubserviceSchema>;
export type TUpdateSubservicePriceSchema = z.infer<
  typeof updateSubservicePriceSchema
>;

export const searchSubserviceDefaultValues: TSearchSubserviceSchema = {
  search: '',
};
