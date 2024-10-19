import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';

export const LinkLocal: FC<LinkProps> = ({ children, to, ...props }) => {
  return (
    <Link to={to} {...props}>
      {children}
    </Link>
  );
};
