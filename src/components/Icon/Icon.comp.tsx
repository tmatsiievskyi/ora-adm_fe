import { FC } from 'react';
import { TIconProps } from '@global/types';

const tryRequire = (name: string) => {
  try {
    // eslint-disable-next-line
    return require(`./icons/${name}.icon.tsx`).default;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    console.log(`Wrong icon name: ${name}`);

    return null;
  }
};

export const Icon: FC<TIconProps> = ({ name, ...restProps }) => {
  const Component = tryRequire(name);

  if (!Component) {
    return null;
  }

  return <Component name={name} {...restProps} />;
};
