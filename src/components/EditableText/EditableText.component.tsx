import { TEditableProps } from '@global/types';
import { cnm } from '@global/utils';
import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react';
import { Input, Text } from 'tm-ui';

export const EditableText = ({
  initialValue,
  //   onSave,
  inputCN,
  suffixText,
  typeInput = 'text',
}: TEditableProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(initialValue);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef) {
      inputRef.current?.focus();
    }
  }, [isEditing]);

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleBlur();
    } else if (e.key === 'Escape') {
      setValue(initialValue);
      setIsEditing(false);
    }
  };

  if (isEditing) {
    return (
      <Input
        compType='default'
        inputClassName={cnm(
          'text-bkg-sec-frg border-box bg-bkg-sec w-auto border-[1px] border-bkg-sec-frg/20 inputDarkModeOverride p-2 text-sm',
          inputCN,
        )}
        inputType='default'
        labelType='default'
        onBlur={handleBlur}
        onChange={(e) => handleChange(e)}
        onKeyDown={handleKeyDown}
        placeholder=''
        ref={inputRef}
        type={typeInput}
        value={value}
        wrapperClassName='min-w-[100px] w-auto'
        wrapperType='default'
      />
    );
  }

  return (
    <div onClick={() => setIsEditing(true)}>
      <Text
        className='py-1 border-[1px] border-transparent  hover:bg-primary/40 duration-300 cursor-pointer rounded-md'
        size='sm'
      >
        {value}
        {suffixText && ` ${suffixText}`}
      </Text>
    </div>
  );
};
