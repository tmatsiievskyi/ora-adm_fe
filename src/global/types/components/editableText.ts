import { HTMLInputTypeAttribute } from 'react';

export type TEditableProps = {
  initialValue: string;
  onSave: () => void;
  inputCN?: string;
  suffixText?: string;
  typeInput?: HTMLInputTypeAttribute;
};
