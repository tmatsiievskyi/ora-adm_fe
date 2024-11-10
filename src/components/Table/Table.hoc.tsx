import { ReactNode, useState } from 'react';
import { cnm } from '@global/utils';
import { TDataTableProps, TSortDirection, TTableColumn } from '@global/types';
import { Translate } from 'components/Translate';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './Table.component';

export const WithTable = <T extends { _id?: string }>({
  data = [],
  columns,
  onSort,
  renderHeader,
  renderBody,
  tableCN,
  tableHeaderCN,
  tableHeadCN,
  tableHeaderRowCN,
  tableBodyCN,
  tableRowCN,
}: TDataTableProps<T>) => {
  const [sortColumn, setSortColumn] = useState<keyof T | null>(null);
  const [sortDirection, setSortDirection] = useState<TSortDirection>(null);
  //   const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set())

  const handleSort = (column: TTableColumn<T>) => {
    if (!column.sortable) return;

    const isAsc = sortColumn === column.key && sortDirection === 'asc';
    const direction = isAsc ? 'asc' : 'desc';

    setSortColumn(column.key);
    setSortDirection(direction);
    onSort?.(column.key, direction);
  };

  const defaultRenderHeader = () => (
    <TableRow className={cnm(tableHeaderRowCN)}>
      {columns.map((column) => (
        <TableHead
          className={cnm(
            'p-2 text-left font-semibold cursor-pointer',
            tableHeadCN,
          )}
          key={column.key.toString()}
          onClick={() => handleSort(column)}
        >
          <span>
            <Translate i18nKey={column.header} />
          </span>
        </TableHead>
      ))}
    </TableRow>
  );

  const defaultRenderBody = () => (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {data.length > 0 ? (
        data.map((item) => (
          <TableRow className={cnm('border-b', tableRowCN)} key={item._id}>
            {columns.map((column) => (
              <TableCell key={column.key.toString()}>
                {column.render
                  ? column.render(item[column.key], item)
                  : (item[column.key] as ReactNode)}
              </TableCell>
            ))}
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell
            className={cnm('p-2 text-center', tableBodyCN)}
            colSpan={columns.length}
          >
            No data available
          </TableCell>
        </TableRow>
      )}
    </>
  );

  return (
    <div className=' overflow-x-auto'>
      <Table className={cnm('w-full border-collapse', tableCN)}>
        <TableHeader className={cnm('w-full border-collapse', tableHeaderCN)}>
          {renderHeader
            ? renderHeader(columns, handleSort)
            : defaultRenderHeader()}
        </TableHeader>
        <TableBody className={cnm(tableBodyCN)}>
          {renderBody ? renderBody(data, columns) : defaultRenderBody()}
        </TableBody>
      </Table>
    </div>
  );
};
