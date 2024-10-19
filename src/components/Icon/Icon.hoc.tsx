import { FC } from 'react';
import { TIconProps } from '@global/types';
import { Icon } from './Icon.comp';

export const WithIcon: FC<TIconProps> = (props) => <Icon {...props} />;
