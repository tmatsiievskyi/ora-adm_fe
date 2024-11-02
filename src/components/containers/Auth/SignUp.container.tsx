import { FC, PropsWithChildren } from 'react';
import { useFormContext } from 'react-hook-form';
import { Text, Button } from 'tm-ui';
import { type TSignUpSchema } from '@global/types';
import { RHFInput } from 'components/rhf';
import { useSignUp } from '@global/api';

export const SignUp: FC<PropsWithChildren> = () => {
  const { handleSubmit } = useFormContext<TSignUpSchema>();
  const { mutationFn } = useSignUp();

  const onSubmit = handleSubmit((data) => {
    mutationFn(data);
  });

  return (
    <>
      <Text className='text-primary text-3xl text-center my-8' size='xl'>
        Зареєструвати аккаунт
      </Text>

      <form className='w-full flex flex-col items-stretch ' onSubmit={onSubmit}>
        <RHFInput<TSignUpSchema>
          compType='anim'
          inputClassName='w-full'
          label='Логін'
          name='login'
          placeholder=' '
          wrapperClassName='max-w-full'
        />

        <RHFInput<TSignUpSchema>
          compType='anim'
          inputClassName='w-full'
          label='Пароль'
          name='password'
          placeholder=' '
          type='password'
          wrapperClassName='max-w-full'
        />

        <RHFInput<TSignUpSchema>
          compType='anim'
          inputClassName='w-full'
          label='Повторіть пароль'
          name='passwordConfirm'
          placeholder=' '
          type='password'
          wrapperClassName='max-w-full'
        />

        <Button label='Зареєструватись' />
      </form>
    </>
  );
};
