import { FC, PropsWithChildren } from 'react';
import { useFormContext } from 'react-hook-form';
import { Text, Button } from 'tm-ui';
import { type TSignUpSchema } from '@global/types';
import { RHFInput } from 'components/rhf';

export const SignUp: FC<PropsWithChildren> = () => {
  const { handleSubmit } = useFormContext<TSignUpSchema>();

  const onSubmit = handleSubmit(() => {});

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
          wrapperClassName='max-w-full'
        />

        <RHFInput<TSignUpSchema>
          compType='anim'
          inputClassName='w-full'
          label='Повторіть пароль'
          name='passwordConfirm'
          placeholder=' '
          wrapperClassName='max-w-full'
        />

        <Button label='Зареєструватись' />
      </form>
    </>
  );
};
