export const iconList = [
  'employees',
  'services',
  'subservices',
  'arrowLeft',
  'eye',
  'eyeSlash',
] as const;

export type TIconNames = (typeof iconList)[number];
