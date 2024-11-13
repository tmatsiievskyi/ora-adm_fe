import { TSelectProps } from '@global/types';
import { SelectComponent } from './Select.component';

export const WithSelect = ({
  label,
  size,
  btnCN,
  options,
  onChange,
  value,
}: TSelectProps) => (
  <SelectComponent
    btnCN={btnCN}
    label={label}
    onChange={onChange}
    options={options}
    size={size}
    value={value}
  />
);
