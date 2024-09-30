import { FormProvider, useForm } from 'react-hook-form';
import {
  signUpDefaultValues,
  signUpSchema,
  TSignUpSchema,
} from '@global/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignUp } from './SignUp.container';

export const SignUpProvider = () => {
  const methods = useForm<TSignUpSchema>({
    mode: 'all',
    resolver: zodResolver(signUpSchema),
    defaultValues: signUpDefaultValues,
  });

  return (
    <FormProvider {...methods}>
      <SignUp />
    </FormProvider>
  );
};
