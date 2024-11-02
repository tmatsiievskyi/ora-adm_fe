import { useSignOut } from '@global/api';
import { FC, PropsWithChildren, useEffect } from 'react';

export const SignOut: FC<PropsWithChildren> = () => {
  const { mutationFn } = useSignOut();

  useEffect(() => {
    mutationFn({});
  }, [mutationFn]);

  return null;
};
