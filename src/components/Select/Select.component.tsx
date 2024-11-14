import { TSelectOption, TSelectProps } from '@global/types';
import { cnm } from '@global/utils';
import { WithIcon } from 'components/Icon';
import { useEffect, useRef, useState } from 'react';
import { Button } from 'tm-ui';

export const SelectComponent = ({
  label,
  size = 'small',
  btnCN,
  value,
  options,
  onChange,
}: TSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSelect = (option: TSelectOption) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className='relative' ref={selectRef}>
      <Button
        buttonType='base'
        className={cnm(
          'bg-bkg text-bkg-frg border-[1px] border-bkg-sec-frg/20 relative px-4 h-full',
          btnCN,
        )}
        label={label}
        onClick={handleToggle}
        rightIcon={
          <WithIcon
            className={cnm(`${isOpen && 'rotate-180'} duration-500`)}
            height={15}
            name='chevronDown'
            width={15}
          />
        }
        size={size}
      />
      {isOpen && (
        <ul
          className={`absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-bkg-sec 
            rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm`}
          role='listbox'
          tabIndex={-1}
        >
          {options.map((option) => (
            <li
              aria-selected={value?.value === option.value}
              className={`${
                value?.value === option.value
                  ? 'text-white bg-primary hover:bg-primary'
                  : 'text-bkg-sec-frg'
              } cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-primary/40`}
              key={option.value}
              onClick={() => handleSelect(option)}
              role='option'
            >
              <span
                className={`block truncate ${value?.value === option.value ? 'font-semibold' : 'font-normal'}`}
              >
                {option.label}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
