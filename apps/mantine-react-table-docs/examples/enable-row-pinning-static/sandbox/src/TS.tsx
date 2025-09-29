import { useMemo } from 'react';
import {
  MantineReactTable,
  MRT_ColumnDef,
  useMantineReactTable,
} from 'mantine-react-table-open';
import { data, Person } from './makeData';

const Example = () => {
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
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
