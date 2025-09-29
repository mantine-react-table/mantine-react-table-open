import '@mantine/core/styles.css';
import '@mantine/dates/styles.css'; //if using mantine date picker features
import 'mantine-react-table-open/styles.css'; //make sure MRT styles were imported in your app root (once)
import { useMemo } from 'react';
import {
  MantineReactTable,
  useMantineReactTable,
  type MRT_ColumnDef,
} from 'mantine-react-table-open';
import { Menu, Divider } from '@mantine/core';

const data = [
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
];

const Example = () => {
  const columns = useMemo<MRT_ColumnDef<(typeof data)[0]>[]>(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        renderColumnActionsMenuItems: () => (
          <>
            <Menu.Item
              onClick={() => {
                console.log('Item 1 clicked');
              }}
            >
              Item 1
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                console.log('Item 2 clicked');
              }}
            >
              Item 2
            </Menu.Item>
          </>
        ),
      },
      {
        accessorKey: 'firstName',
        header: 'First Name',
        renderColumnActionsMenuItems: ({ internalColumnMenuItems }) => (
          <>
            {internalColumnMenuItems}
            <Divider />
            <Menu.Item
              onClick={() => {
                console.log('Item 1 clicked');
              }}
            >
              Item 1
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                console.log('Item 2 clicked');
              }}
            >
              Item 2
            </Menu.Item>
          </>
        ),
      },
      {
        accessorKey: 'lastName',
        header: 'Last Name',
        renderColumnActionsMenuItems: ({ internalColumnMenuItems }) => (
          <>
            <Menu.Item>Item 1</Menu.Item>
            <Menu.Item>Item 2</Menu.Item>
            <Divider />
            {internalColumnMenuItems}
          </>
        ),
      },
    ],
    [],
  );

  const table = useMantineReactTable({
    columns,
    data,
    //renderColumnActionsMenuItems //or you could define the menu items here for all columns
  });

  return <MantineReactTable table={table} />;
};

export default Example;
