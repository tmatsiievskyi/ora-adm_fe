import { TIconProps } from '@global/types';
import { FC } from 'react';

const ArrowLeftIcon: FC<TIconProps> = ({
  width = '24',
  height = '24',
  color = 'currentColor',
  className,
}) => {
  return (
    <svg
      className={className}
      fill={color}
      height={height}
      viewBox='0 0 16 16'
      width={width}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0'
        fillRule='evenodd'
      />
    </svg>
  );
};

export default ArrowLeftIcon;
