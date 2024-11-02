import { FC, PropsWithChildren } from 'react';
import { useFormContext } from 'react-hook-form';
import { Text, Button } from 'tm-ui';
import { type TSignInSchema } from '@global/types';
import { RHFInput, RHFInputPassword } from 'components/rhf';
import { useSignIn } from '@global/api';

export const SignIn: FC<PropsWithChildren> = () => {
  const { handleSubmit } = useFormContext<TSignInSchema>();
  const { mutationFn } = useSignIn();

  const onSubmit = handleSubmit((data) => {
    mutationFn(data);
  });

  return (
    <>
      <Text className='text-primary text-3xl text-center my-8' size='xl'>
        Залогінитись до аккаунту
      </Text>

      <form className='w-full flex flex-col items-stretch ' onSubmit={onSubmit}>
        <div className='mb-6'>
          <RHFInput<TSignInSchema>
            compType='anim'
            inputClassName='w-full'
            label='Логін'
            name='login'
            placeholder=' '
            wrapperClassName='max-w-full'
          />
        </div>

        <div className='relative mb-6 text-gray-300'>
          <RHFInputPassword
            autoComplete='off'
            compType='anim'
            inputClassName='w-full'
            label='Пароль'
            name='password'
            placeholder=' '
            type='password'
            wrapperClassName='max-w-full'
          />
        </div>

        <Button label='Логін' />
      </form>
    </>
  );
};
