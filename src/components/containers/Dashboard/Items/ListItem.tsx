import { useEmployees } from '@global/api';

export const ListItem = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data } = useEmployees();

  return (
    <div>
      <p>List item</p>
    </div>
  );
};
