export const iconList = [
  'employees',
  'services',
  'subservices',
  'arrowLeft',
] as const;

export type TIconNames = (typeof iconList)[number];
