import { useEmployees } from '@global/api';
import { ESpinnerType, WithSpinner } from 'components/Spinner';

export const ListItem = () => {
  const { data: employees, isPending, error } = useEmployees();

  if (isPending)
    return (
      <div className='h-full'>
        <WithSpinner type={ESpinnerType.BASE} />
      </div>
    );

  if (error) return null;

  return (
    <div>
      {employees?.data?.map((item) => <p key={item._id}>{item.firstName}</p>)}
    </div>
  );
};
