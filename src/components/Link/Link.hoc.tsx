import { FC } from 'react';
import { LinkProps } from 'react-router-dom';
import { LinkLocal } from './LinkLocal.container';

type TProps = {
  href?: string;
} & LinkProps;

export const WithLink: FC<TProps> = ({ href, children, to, ...props }) => {
  if (to.toString().startsWith('http')) {
    return (
      <a href={to.toString()} {...props}>
        {children}
      </a>
    );
  }

  return (
    <LinkLocal to={to} {...props}>
      {children}
    </LinkLocal>
  );
};
