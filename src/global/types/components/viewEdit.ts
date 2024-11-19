export enum EViewEditField {
  TEXT = 'text',
  NUMBER = 'number',
  ARRAY = 'array',
}

export type TViewEditField = {
  key: string;
  label: string;
  type: EViewEditField;
};

export type TViewEditProps<T> = {
  data: T;
  fields: TViewEditField[];
  wrapperCN?: string;
};
