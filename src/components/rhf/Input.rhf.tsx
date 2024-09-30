import { Input } from 'tm-ui';
import React from 'react';
import {
  UseFormRegister,
  FieldValues,
  RegisterOptions,
  Path,
  useFormContext,
  Controller,
} from 'react-hook-form';
import { ErrorMessage } from './errorMessage.rhf';

type TInputProps = React.ComponentProps<typeof Input>;

type TProps<T extends FieldValues> = {
  errorMessageClassName?: string;
  register?: UseFormRegister<T>;
  rules?: RegisterOptions<T>;
  name: Path<T>;
} & TInputProps;

export const RHFInput = <T extends Record<string, unknown>>({
  errorMessageClassName,
  name,
  ...props
}: TProps<T>) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <div className='relative mb-6'>
          <Input error={!!error} {...field} {...props} />
          {error && (
            <ErrorMessage className={errorMessageClassName}>
              {error.message}
            </ErrorMessage>
          )}
        </div>
      )}
    />
  );
};
