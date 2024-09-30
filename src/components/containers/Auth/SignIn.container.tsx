import { FC, PropsWithChildren } from 'react';
import { useFormContext } from 'react-hook-form';
import { Text, Button } from 'tm-ui';
import { type TSignInSchema } from '@global/types';
import { RHFInput } from 'components/rhf';

export const SignIn: FC<PropsWithChildren> = () => {
  const { handleSubmit } = useFormContext<TSignInSchema>();

  const onSubmit = handleSubmit(() => {});

  return (
    <>
      <Text className='text-primary text-3xl text-center my-8' size='xl'>
        Залогінитись до аккаунту
      </Text>

      <form className='w-full flex flex-col items-stretch ' onSubmit={onSubmit}>
        <RHFInput<TSignInSchema>
          compType='anim'
          inputClassName='w-full'
          label='Логін'
          name='login'
          placeholder=' '
          wrapperClassName='max-w-full'
        />

        <RHFInput<TSignInSchema>
          compType='anim'
          inputClassName='w-full'
          label='Пароль'
          name='password'
          placeholder=' '
          wrapperClassName='max-w-full'
        />

        <Button label='Логін' />
      </form>
    </>
  );
};
