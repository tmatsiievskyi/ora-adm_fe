/* eslint-disable max-len */
import { TIconProps } from '@global/types';
import { FC } from 'react';

const ComplexesIcon: FC<TIconProps> = ({
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
        d='M30 19L25 19V14H23V19L18 19V21H23V26H25V21H30V19Z'
        fill={color}
      />
      <path
        clipRule='evenodd'
        d='M9 10C9 7.23858 11.2386 5 14 5H38C38.5523 5 39 5.44772 39 6V36C39 36.5523 38.5523 37 38 37H14C12.3431 37 11 38.3431 11 40V41H38V43H10C9.44772 43 9 42.5523 9 42V10ZM14 35C12.8744 35 11.8357 35.3719 11 35.9996V10C11 8.34315 12.3431 7 14 7H37V35H14Z'
        fill={color}
        fillRule='evenodd'
      />
    </svg>
  );
};

export default ComplexesIcon;
