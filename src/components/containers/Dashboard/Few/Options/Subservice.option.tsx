import { useSubservices } from '@global/api/hooks/query/useSubservice';
import { Spinner } from 'components/Spinner/Spinner.container';
import { useTranslation } from 'react-i18next';
import { WithTable } from 'components/Table';
import { TSortDirection, TSubservice, TTableColumn } from '@global/types';
import {
  TableCell,
  TableHead,
  TableRow,
} from 'components/Table/Table.component';
import { Translate } from 'components/Translate';
import { Fragment, useCallback, useState } from 'react';
import { Button, Input } from 'tm-ui';
import { cnm } from '@global/utils';
import { WithIcon } from 'components/Icon';
import { useDebounce } from '@global/hooks';
import { WithSelect } from 'components/Select';
import { WithEditableText } from 'components/EditableText';
import { useEditSubservicePrice } from '@global/api/hooks/mutation';
import { DashboardHeader } from '../../Items';

const tableColumns: TTableColumn<TSubservice>[] = [
  { key: 'label', header: 'common.table.service', sortable: false },
  { key: 'price', header: 'common.table.price', sortable: true },
] as const;

const limitOptions = [
  { value: '25', label: '25' },
  { value: '50', label: '50' },
  { value: '100', label: '100' },
];

// TODO: setPAge(1) on search, sort, changeSize

export const SubserviceOption = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState<{ value: string; label: string }>(
    limitOptions[0],
  );
  const [sortCol, setSortCol] = useState<keyof TSubservice | null>(null);
  const [sortDir, setSortDir] = useState<TSortDirection>(null);
  const [searchValue, setSearchValue] = useState<string>('');
  const debouncedSearchValue = useDebounce(searchValue, 300);
  const {
    mutationFn: updatePriceFn,
    // data: updatePriceData, //TODO: handle error
    // isPending: updatepriceIsPernding,
  } = useEditSubservicePrice();

  const {
    isPending,
    data: resp,
    isError,
    isPlaceholderData,
  } = useSubservices({
    search: debouncedSearchValue,
    page,
    limit: Number(limit.value),
    sortField: sortCol,
    sortOrder: sortDir,
  });
  const prevBtnDisabled = resp?.meta?.currentPage
    ? resp?.meta?.currentPage <= 1
    : true;
  const nextBtnDisabled =
    resp?.meta?.currentPage && resp?.meta?.totalPages
      ? resp?.meta?.currentPage === resp.meta.totalPages
      : true;
  const { t } = useTranslation();

  const handleSort = (
    key: keyof TSubservice | null,
    direction: TSortDirection | null,
  ) => {
    setSortCol(key);
    setSortDir(direction);
  };

  const onSearch = (e: string) => {
    setSearchValue(e);
  };

  const getSortIcon = useCallback(
    (column: TTableColumn<TSubservice>) => {
      if (!column.sortable) return null;

      return (
        <span>
          <WithIcon
            className={cnm(
              `ml-2 duration-300 ${sortDir === 'desc' && 'opacity-20'}`,
            )}
            height={12}
            name='chevronUp'
            width={12}
          />
          <WithIcon
            className={cnm(
              `ml-2 mt-[-4px] duration-300 ${sortDir === 'asc' && 'opacity-20'}`,
            )}
            height={12}
            name='chevronDown'
            width={12}
          />
        </span>
      );
    },
    [sortDir],
  );

  const renderTableHeader = useCallback(
    (
      columns: TTableColumn<TSubservice>[],
      onSort: (column: TTableColumn<TSubservice>) => void,
    ) => {
      return (
        <TableRow className={cnm('')}>
          {columns.map((column) => (
            <TableHead
              className={cnm('p-2 text-left font-semibold cursor-pointer')}
              key={column.key.toString()}
              onClick={() => onSort(column)}
            >
              <span className='flex items-center'>
                <Translate className=' text-md' i18nKey={column.header} />
                {getSortIcon(column)}
                <span />
              </span>
            </TableHead>
          ))}
        </TableRow>
      );
    },
    [getSortIcon],
  );

  const handleUpdatePrice = useCallback(
    (id: string, price: string) => {
      updatePriceFn({ id, price: Number(price) });
    },
    [updatePriceFn],
  );

  const renderTableBody = useCallback(
    (
      data: TSubservice[] | Record<string, TSubservice[]> | null | undefined,
      columns: TTableColumn<TSubservice>[],
    ) => {
      if (!data) return <p>Not Found</p>;

      if (Array.isArray(data)) {
        return (
          <>
            {data.map((subservice) => (
              <TableRow
                className=' border-b border-bkg-frg/20 border-solid'
                key={subservice._id}
              >
                {columns.map((column) => {
                  if (column.key === 'price') {
                    return (
                      <TableCell className='' key={column.key.toString()}>
                        <p>{column.key}</p>
                      </TableCell>
                    );
                  }

                  return (
                    <TableCell className='' key={column.key.toString()}>
                      <Translate i18nKey={subservice[column.key]?.toString()} />
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </>
        );
      }

      return (
        <>
          {Object.entries(data).map(([category, subservices]) => {
            return (
              <Fragment key={category}>
                <TableRow className=' text-center font-bold text-lg'>
                  <Translate as='td' i18nKey={`services.title.${category}`} />
                </TableRow>
                {subservices.map((subservice) => (
                  <TableRow
                    className=' border-b border-bkg-frg/20 border-solid'
                    key={subservice._id}
                  >
                    {columns.map((column) => {
                      if (column.key === 'price') {
                        return (
                          <TableCell
                            className='min-w-[120px]'
                            key={column.key.toString()}
                          >
                            <WithEditableText
                              initialValue={String(subservice[column.key])}
                              inputCN=' max-w-[100px] py-1'
                              onSave={(value: string) =>
                                handleUpdatePrice(subservice._id, value)
                              }
                              suffixText={t('common.currency.grn')}
                              typeInput='number'
                            />
                          </TableCell>
                        );
                      }

                      return (
                        <TableCell className='' key={column.key.toString()}>
                          <Translate
                            i18nKey={subservice[column.key]?.toString()}
                          />
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
              </Fragment>
            );
          })}
        </>
      );
    },
    [t, handleUpdatePrice],
  );

  if (isPending) return <Spinner />;

  if (isError) return <p>No data</p>;

  return (
    <div>
      <DashboardHeader
        buttonFn={() => {}}
        buttonText={t('CREATE')} // TODO: local
        titleText={t('common.price')}
      />
      <div className='mb-4 flex'>
        <div className='flex'>
          <Input
            compType='default'
            inputClassName='text-bkg-sec-frg bg-bkg-sec border-[1px] border-bkg-sec-frg/20 inputDarkModeOverride p-2 text-md w-60 shrink-0'
            inputType='default'
            labelType='default'
            onChange={(e) => onSearch(e.target.value)}
            placeholder='Search'
            value={searchValue}
            wrapperClassName=''
            wrapperType='default'
          />
          <WithSelect
            btnCN='py-2 ml-2'
            label='Size'
            onChange={setLimit}
            options={limitOptions}
            value={limit}
          />
        </div>

        <Button
          buttonType='base'
          className='bg-bkg text-bkg-frg border-[1px] border-bkg-sec-frg/20 ml-auto px-6 disabled:opacity-50'
          disabled={prevBtnDisabled}
          label='Prev'
          onClick={() => setPage((old) => old - 1)}
          size='small'
        >
          Prev
        </Button>
        <Button
          buttonType='base'
          className='bg-bkg text-bkg-frg border-[1px] border-bkg-sec-frg/20 ml-2 px-6 disabled:opacity-50'
          disabled={nextBtnDisabled || isPlaceholderData}
          label='Next'
          onClick={() => {
            if (!isPlaceholderData) {
              setPage((old) => old + 1);
            }
          }}
          size='small'
        >
          Next
        </Button>
      </div>
      <WithTable
        columns={tableColumns}
        data={resp?.data}
        onSort={handleSort}
        renderBody={renderTableBody}
        renderHeader={renderTableHeader}
        tableCN='w-full'
      />
    </div>
  );
};
