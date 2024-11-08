import { object, string, z } from 'zod';

export const generateQRSchema = object({
  url: string().min(1, { message: 'URL is required' }),
});

export type TGenerateQRSchema = z.infer<typeof generateQRSchema>;

export const generateQRDefaultValues: TGenerateQRSchema = {
  url: '',
};
