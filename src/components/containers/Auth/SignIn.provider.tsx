import { FormProvider, useForm } from 'react-hook-form';
import {
  signInDefaultValues,
  signInSchema,
  TSignInSchema,
} from '@global/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignIn } from './SignIn.container';

export const SignInProvider = () => {
  const methods = useForm<TSignInSchema>({
    mode: 'all',
    resolver: zodResolver(signInSchema),
    defaultValues: signInDefaultValues,
  });

  return (
    <FormProvider {...methods}>
      <SignIn />
    </FormProvider>
  );
};
