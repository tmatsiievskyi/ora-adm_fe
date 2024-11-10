import { cnm } from '@global/utils';
import { FC, HTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from 'react';

const Table: FC<HTMLAttributes<HTMLTableElement>> = ({
  className,
  ...props
}) => {
  return (
    <table
      className={cnm(' w-full relative border-collapse', className)}
      {...props}
    />
  );
};
Table.displayName = 'Table';

const TableHeader: FC<HTMLAttributes<HTMLTableSectionElement>> = ({
  className,
  ...props
}) => {
  return <thead className={className} {...props} />;
};
TableHeader.displayName = 'TableHeader';

const TableBody: FC<HTMLAttributes<HTMLTableSectionElement>> = ({
  className,
  ...props
}) => {
  return <tbody className={className} {...props} />;
};
TableBody.displayName = 'TableBody';

const TableFooter: FC<HTMLAttributes<HTMLTableSectionElement>> = ({
  className,
  ...props
}) => {
  return <tfoot className={className} {...props} />;
};
TableFooter.displayName = 'TableFooter';

const TableRow: FC<HTMLAttributes<HTMLTableRowElement>> = ({
  className,
  ...props
}) => {
  return <tr className={className} {...props} />;
};
TableRow.displayName = 'TableRow';

const TableCell: FC<TdHTMLAttributes<HTMLTableCellElement>> = ({
  className,
  ...props
}) => {
  return <td className={className} {...props} />;
};
TableCell.displayName = 'TableCell';

const TableHead: FC<ThHTMLAttributes<HTMLTableCellElement>> = ({
  className,
  ...props
}) => {
  return <th className={className} {...props} />;
};
TableHead.displayName = 'TableHead';

const TableCaption: FC<HTMLAttributes<HTMLTableCaptionElement>> = ({
  className,
  ...props
}) => {
  return <caption className={className} {...props} />;
};
TableCaption.displayName = 'TableCaption';

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableCell,
  TableHead,
  TableCaption,
};
