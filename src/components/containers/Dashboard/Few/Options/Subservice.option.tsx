import { useSubservices } from '@global/api/hooks/query/useSubservice';
import { Spinner } from 'components/Spinner/Spinner.container';
import { useTranslation } from 'react-i18next';
import { WithTable } from 'components/Table';
import { TMongoDoc, TSubservice, TTableColumn } from '@global/types';
import { DashboardHeader } from '../../Items';

export const PriceOption = () => {
  const { isPending, data } = useSubservices();
  const { t } = useTranslation();

  if (isPending) return <Spinner />;

  console.log(data);

  const columns: TTableColumn<TSubservice & TMongoDoc>[] = [
    { key: 'label', header: 'common.label' },
    { key: 'outsource', header: 'common.outsource' },
    { key: 'price', header: 'common.searchTags' },
    { key: 'price', header: 'common.price' },
  ];

  return (
    <div>
      <DashboardHeader
        buttonFn={() => {}}
        buttonText={t('CREATE')}
        titleText={t('common.price')}
      />

      <WithTable columns={columns} />
    </div>
  );
};
