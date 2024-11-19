import { HTMLInputTypeAttribute } from 'react';

export type TEditableProps = {
  initialValue: string;
  onSave: (value: string) => void;
  inputCN?: string;
  suffixText?: string;
  typeInput?: HTMLInputTypeAttribute;
};
