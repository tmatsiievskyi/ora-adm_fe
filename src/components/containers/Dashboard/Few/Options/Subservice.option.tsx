import { useSubservices } from '@global/api/hooks/query/useSubservice';
import { Spinner } from 'components/Spinner/Spinner.container';

export const PriceOption = () => {
  const { isPending, data } = useSubservices();

  if (isPending) return <Spinner />;

  console.log(data);

  return <p>Subservices</p>;
};
