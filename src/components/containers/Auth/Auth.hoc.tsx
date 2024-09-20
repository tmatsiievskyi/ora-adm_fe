import { TAuthContainers } from '@global/types/containers/auth.type';
import { FC, PropsWithChildren } from 'react';
import { SignIn } from './SignIn.auth';
import { SignUp } from './SignUp.auth';
import { SignOut } from './SignOut.auth';

type TAuthContainerProps<T = TAuthContainers> = PropsWithChildren<{ type: T }>;

const types = {
  signIn: SignIn,
  signUp: SignUp,
  signOut: SignOut,
} satisfies Record<TAuthContainers, FC>;

export const WithAuthContainer: FC<TAuthContainerProps<TAuthContainers>> = ({
  type,
  children,
}) => {
  const AuthComponent = types[type];

  return <AuthComponent>{children}</AuthComponent>;
};
