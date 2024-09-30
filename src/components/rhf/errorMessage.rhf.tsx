import { cnm } from '@global/utils';
import { PropsWithChildren } from 'react';

type TProps = {
  className?: string;
} & PropsWithChildren;
export const ErrorMessage = ({ children, className }: TProps) => {
  return (
    <p
      className={cnm(
        'text-xs text-left text-destructive block absolute bottom-0 translate-y-full',
        className,
      )}
    >
      {children}
    </p>
  );
};
