import { useMemo } from 'react';
import { MantineReactTable, useMantineReactTable } from 'mantine-react-table-open';
import { data } from './makeData';

const Example = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'firstName',
        header: 'First Name',
      },
      {
        accessorKey: 'lastName',
        header: 'Last Name',
      },
      {
        accessorKey: 'email',
        header: 'Email',
      },
      {
        accessorKey: 'city',
        header: 'City',
      },
    ],
    [],
  );

  const table = useMantineReactTable({
    columns,
    data,
    enableRowPinning: true,
    enablePagination: false,
    enableStickyHeader: true,
    rowPinningDisplayMode: 'top-and-bottom',
    getRowId: (row) => row.email,
    mantinePaginationProps: {
      style: {
        maxHeight: '400px',
      },
    },
  });

  return <MantineReactTable table={table} />;
};

export default Example;
