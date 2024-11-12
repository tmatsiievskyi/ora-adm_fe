import { useSubservices } from '@global/api/hooks/query/useSubservice';
import { Spinner } from 'components/Spinner/Spinner.container';
import { useTranslation } from 'react-i18next';
import { WithTable } from 'components/Table';
import { TSubservice, TTableColumn } from '@global/types';
import { TableCell, TableRow } from 'components/Table/Table.component';
import { Translate } from 'components/Translate';
import { useState } from 'react';
import { Button } from 'tm-ui';
import { DashboardHeader } from '../../Items';

export const PriceOption = () => {
  const [page] = useState(1);
  const [limit] = useState(50);

  const { isPending, data: resp, isError } = useSubservices({ page, limit });
  const { t } = useTranslation();

  if (isPending) return <Spinner />;

  if (isError) return <p>No data</p>; // TODO: add localization

  console.log(resp);

  const tableColumns: TTableColumn<TSubservice>[] = [
    { key: 'label', header: 'common.label' },
    { key: 'outsource', header: 'common.outsource' },
    { key: 'searchTags', header: 'common.searchTags' },
    { key: 'price', header: 'common.price' },
  ];

  const renderTableBody = (
    data: TSubservice[] | null,
    columns: TTableColumn<TSubservice>[],
  ) => {
    console.log(columns, data);

    if (!data) return <p>Not Found</p>;

    return (
      <>
        {/* {Object.entries(data).map(([category, subservices]) => {
          return (
            <>
              <TableRow>{category}</TableRow>
              {subservices.map((subservice) => (
                <TableRow
                  className=' border-b border-bkg-frg/20 border-solid'
                  key={subservice._id}
                >
                  {columns.map((column) => (
                    <TableCell className='' key={column.key.toString()}>
                      <Translate i18nKey={subservice[column.key]?.toString()} />
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </>
          );
        })} */}
        {data.map((subservice) => (
          <TableRow
            className=' border-b border-bkg-frg/20 border-solid'
            key={subservice._id}
          >
            {columns.map((column) => (
              <TableCell className='' key={column.key.toString()}>
                <Translate i18nKey={subservice[column.key]?.toString()} />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </>
    );
  };

  return (
    <div>
      <DashboardHeader
        buttonFn={() => {}}
        buttonText={t('CREATE')}
        titleText={t('common.price')}
      />

      <WithTable
        columns={tableColumns}
        data={resp?.data}
        renderBody={renderTableBody}
        tableCN='w-full'
      />
      <div>
        <Button>Prev</Button>
        <Button>Next</Button>
      </div>
    </div>
  );
};
