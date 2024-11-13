import { TIconProps } from '@global/types';
import { FC } from 'react';

const ChevronUpIcon: FC<TIconProps> = ({
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
        d='M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z'
        fillRule='evenodd'
      />
    </svg>
  );
};

export default ChevronUpIcon;
