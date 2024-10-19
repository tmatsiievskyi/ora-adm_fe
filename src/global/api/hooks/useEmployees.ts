// /* eslint-disable @typescript-eslint/return-await */
import { TEmployee } from '@global/types';
import { useQuery } from '@tanstack/react-query';
import { AppError } from '../../utils/error.util';

const fetchEmployees = async (): Promise<TEmployee[]> => {
  const response = await fetch('http://localhost:3000/api/employees');

  if (!response.ok) {
    throw new AppError('Failed to fetch employees', response);
  }

  return response.json();
};

export const useEmployees = (): { data: TEmployee[] } => {
  const {
    data = [],
    isError,
    status,
    error,
    failureReason,
  } = useQuery({
    queryKey: ['employees'],
    queryFn: fetchEmployees,
  });

  console.log(isError, status, error, failureReason);

  return { data };
};
