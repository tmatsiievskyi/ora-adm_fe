/* eslint-disable max-len */
import { TIconProps } from '@global/types';
import { FC } from 'react';

const SubservicesIcon: FC<TIconProps> = ({
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
        d='M14 19C14 18.4477 14.4477 18 15 18H33C33.5523 18 34 18.4477 34 19V34C34 34.5523 33.5523 35 33 35H15C14.4477 35 14 34.5523 14 34V19ZM16 25V28H20V25H16ZM16 33V30H20V33H16ZM22 33V30H26V33H22ZM28 33V30H32V33H28ZM28 25V28H32V25H28ZM22 28H26V25H22V28ZM16 23H32V20H16V23Z'
        fill={color}
        fillRule='evenodd'
      />
      <path
        clipRule='evenodd'
        d='M10 5C10 4.44772 10.4477 4 11 4H31C31.2652 4 31.5196 4.10536 31.7071 4.29289L37.7071 10.2929C37.8946 10.4804 38 10.7348 38 11V43C38 43.5523 37.5523 44 37 44H11C10.4477 44 10 43.5523 10 43V5ZM12 6V42H36V12H31C30.4477 12 30 11.5523 30 11V6H12ZM32 7.41421V10H34.5858L32 7.41421Z'
        fill={color}
        fillRule='evenodd'
      />
    </svg>
  );
};

export default SubservicesIcon;
