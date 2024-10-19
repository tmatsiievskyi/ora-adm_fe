import { TIconNames } from 'components/Icon/Icons.list';

export type TIconProps = {
  name: TIconNames;
  color?: string;
  height?: number;
  width?: number;
  className?: string;
  opacity?: number;
  onClick?: () => void;
};
