import { object, string, z } from 'zod';

export const signInSchema = object({
  login: string()
    .max(64, {
      message: 'Can not be longer than 64 characters',
    })
    .min(1, { message: 'Login is required' }),

  password: string()
    .min(1, { message: 'Password is required' })
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
});

export const signUpSchema = object({
  login: string()
    .max(64, {
      message: 'Can not be longer than 64 characters',
    })
    .min(1, { message: 'Login is required' }),

  password: string()
    .min(1, { message: 'Password is required' })
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),

  passwordConfirm: string().min(1, 'Please confirm your password'),
}).refine((data) => data.password === data.passwordConfirm, {
  path: ['passwordConfirm'],
  message: 'Passwords do not match',
});

export type TSignInSchema = z.infer<typeof signInSchema>;

export type TSignUpSchema = z.infer<typeof signUpSchema>;

export const signInDefaultValues: TSignInSchema = {
  login: '',
  password: '',
};

export const signUpDefaultValues: TSignUpSchema = {
  login: '',
  password: '',
  passwordConfirm: '',
};
