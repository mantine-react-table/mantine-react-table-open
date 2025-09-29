import '@mantine/core/styles.css';
import '@mantine/dates/styles.css'; //if using mantine date picker features
import 'mantine-react-table-open/styles.css'; //make sure MRT styles were imported in your app root (once)
import { useMemo } from 'react';
import { MantineReactTable, type MRT_ColumnDef } from 'mantine-react-table-open';

const Example = () => {
  const columns = useMemo(
    () =>
      [
        {
          accessorKey: 'id',
          enableColumnActions: false,
          header: 'ID',
        },
        {
          accessorKey: 'firstName',
          header: 'First Name',
        },
        {
          accessorKey: 'lastName',
          header: 'Last Name',
        },
      ] as MRT_ColumnDef<(typeof data)[0]>[],
    [],
  );

  const data = useMemo(
    () => [
      {
        id: 1,
        firstName: 'Dylan',
        lastName: 'Murray',
      },
      {
        id: 2,
        firstName: 'Raquel',
        lastName: 'Kohler',
      },
    ],
    [],
  );

  return <MantineReactTable columns={columns} data={data} />;
};

export default Example;
