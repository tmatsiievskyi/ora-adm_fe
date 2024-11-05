import { TAuthContainers } from '@global/types';
import { FC, PropsWithChildren } from 'react';
import { Button, Text } from 'tm-ui';
import { Link } from 'react-router-dom';
import { SignInProvider } from './SignIn.provider';
import { SignOut } from './SignOut.container';
import { SignUpProvider } from './SignUp.provider';

type TAuthContainerProps<T = TAuthContainers> = PropsWithChildren<{ type: T }>;

const types = {
  signIn: SignInProvider,
  signUp: SignUpProvider,
  signOut: SignOut,
} satisfies Record<TAuthContainers, FC>;

export const WithAuthContainer: FC<TAuthContainerProps<TAuthContainers>> = ({
  type,
}) => {
  const buttonContent =
    type === 'signIn'
      ? {
          label: 'Зареєструватись',
          to: '/signUp',
          dividerText: 'Створити аккаунт',
        }
      : {
          label: 'Залогінитись',
          to: '/signIn',
          dividerText: 'Залогінитись до існуючого',
        };

  const AuthComponent = types[type];

  return (
    <div className='flex flex-col min-h-[100dvh] py-12 px-4 sm:px-6 lg:px-8 justify-center sm:mx-auto sm:w-full sm:max-w-md'>
      <AuthComponent />

      <div className='relative my-4'>
        <div className='absolute inset-0 flex items-center'>
          <div className='w-full border-t border-primary/30' />
        </div>
        <div>
          <Text
            className='max-w-fit mx-auto px-2 bg-bkg text-bkg-frg relative z-10'
            size='sm'
          >
            {buttonContent.dividerText}
          </Text>
        </div>
      </div>
      <Button
        asChild
        buttonType='base'
        className=' text-primary-frg'
        color='primary'
      >
        <Link to={buttonContent.to}>{buttonContent.label}</Link>
      </Button>
    </div>
  );
};
