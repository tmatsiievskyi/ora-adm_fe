import { useEmployees } from '@global/api';
import { WithList } from 'components/List';
import { Spinner } from 'components/Spinner/Spinner.container';

export const EmployeeOption = () => {
  const { data: reqResult, isPending, error } = useEmployees();

  if (isPending) return <Spinner />;

  if (error || !reqResult?.data) return <p>Something went wrong</p>;

  return (
    <WithList
      items={reqResult.data}
      renderItem={(employee) => (
        <li key={employee._id}>
          <span>{employee.firstName}</span>
        </li>
      )}
    />
  );
};
