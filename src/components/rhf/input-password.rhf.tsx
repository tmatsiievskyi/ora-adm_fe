import { WithIcon } from 'components/Icon';
import { cnm } from '@global/utils';
import { useState } from 'react';
import { RHFInput, type TProps as TInputBaseProps } from './Input.rhf';

type TProps<T extends Record<keyof T, unknown>> = {
  onIconClick?: () => void;
  iconHeight?: number;
  iconWidth?: number;
  iconClassName?: string;
} & TInputBaseProps<T>;

export const RHFInputPassword = <T extends Record<keyof T, unknown>>({
  name,
  label,
  compType,
  type,
  inputClassName,
  placeholder,
  wrapperClassName,
  onIconClick,
  iconClassName,
  iconHeight = 24,
  iconWidth = 24,
  ...props
}: TProps<T>) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <RHFInput<T>
        compType={compType}
        inputClassName={inputClassName}
        label={label}
        name={name}
        placeholder={placeholder}
        type={showPassword ? 'text' : 'password'}
        wrapperClassName={wrapperClassName}
        {...props}
      />
      <WithIcon
        className={cnm(
          'absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer',
          iconClassName,
        )}
        height={iconHeight}
        name={showPassword ? 'eyeSlash' : 'eye'}
        onClick={() => setShowPassword((prev) => !prev)}
        width={iconWidth}
      />
    </div>
  );
};
