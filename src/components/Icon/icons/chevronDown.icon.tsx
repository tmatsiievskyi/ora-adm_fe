import { TIconProps } from '@global/types';
import { FC } from 'react';

const ChevronDownIcon: FC<TIconProps> = ({
  width = '16',
  height = '16',
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
        d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708'
        fillRule='evenodd'
      />
    </svg>
  );
};

export default ChevronDownIcon;
