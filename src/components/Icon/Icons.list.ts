export const iconList = [
  'employees',
  'services',
  'subservices',
  'arrowLeft',
  'eye',
  'eyeSlash',
  'chevronUp',
  'chevronDown',
  'chevronUpDown',
] as const;

export type TIconNames = (typeof iconList)[number];
