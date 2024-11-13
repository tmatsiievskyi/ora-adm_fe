import { useParams } from 'react-router-dom';
import { FC } from 'react';
import { EmployeeOption, SubserviceOption } from './Options';

const fewOptions = {
  price: SubserviceOption,
  employee: EmployeeOption,
} as const satisfies Record<string, FC>;

export const WithDashboardFew = () => {
  const { entity } = useParams();
  const optionKeys = Object.keys(fewOptions);

  if (!entity || !optionKeys.includes(entity)) return null;

  const FewComponent = fewOptions[
    entity as unknown as keyof typeof fewOptions
  ] ?? <p>Not Found</p>;

  return <FewComponent />;
};
