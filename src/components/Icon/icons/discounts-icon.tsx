/* eslint-disable max-len */
import { TIconProps } from '@global/types';
import { FC } from 'react';

const DiscountsIcon: FC<TIconProps> = ({
  width = '48',
  height = '48',
  color = 'currentColor',
  className,
}) => {
  return (
    <svg
      className={className}
      fill='none'
      height={height}
      viewBox='0 0 48 48'
      width={width}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        clipRule='evenodd'
        d='M7 38C5.34315 38 4 36.6569 4 35V13C4 11.3431 5.34315 10 7 10H41C42.6569 10 44 11.3431 44 13V35C44 36.6569 42.6569 38 41 38H7ZM6 13C6 12.4477 6.44772 12 7 12H41C41.5523 12 42 12.4477 42 13V16H6V13ZM7 36C6.44772 36 6 35.5523 6 35V24H42V35C42 35.5523 41.5523 36 41 36H7Z'
        fill={color}
        fillRule='evenodd'
      />
    </svg>
  );
};

export default DiscountsIcon;
