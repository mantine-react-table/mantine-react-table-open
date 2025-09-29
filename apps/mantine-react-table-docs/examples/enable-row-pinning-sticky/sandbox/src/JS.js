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
    getRowId: (row) => row.email,
    initialState: {
      rowPinning: {
        top: ['rkholer33@yopmail.com', 'egarcia@yopmail.com'],
        bottom: [],
      },
    },
    mantineTableContainerProps: {
      style: {
        maxHeight: '400px',
      },
    },
    mantineTableBodyRowProps: ({ row, table }) => {
      const { density } = table.getState();
      return {
        style: {
          //Set a fixed height for pinned rows
          height: row.getIsPinned()
            ? `${
                //Default mrt row height estimates. Adjust as needed.
                density === 'xs' ? 37 : density === 'md' ? 53 : 69
              }px`
            : undefined,
        },
      };
    },
  });

  return <MantineReactTable table={table} />;
};

export default Example;
