import { useContextMenu } from 'mantine-contextmenu';
import {
  type MRT_ColumnDef,
  MRT_EditActionButtons,
  MantineReactTable,
  useMantineReactTable,
} from '../../src';
import { Center, Flex, Group, Text } from '@mantine/core';
import { type Meta } from '@storybook/react';

const meta: Meta = {
  title: 'Features/Empty Row Examples',
};

export default meta;

type Person = {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
};

const data: Person[] = [];

const columns: MRT_ColumnDef<Person>[] = [
  {
    accessorKey: 'firstName',
    header: 'First Name',
  },
  {
    accessorKey: 'lastName',
    header: 'Last Name',
  },
  {
    accessorKey: 'address',
    header: 'Address',
  },
  {
    accessorKey: 'city',
    header: 'City',
  },
];

export const DefaultEmptyRow = () => {
  const table = useMantineReactTable({ columns, data });

  return <MantineReactTable table={table} />;
};

export const CustomEmptyRow = () => {
  const table = useMantineReactTable({
    columns,
    data,
    renderEmptyRowsFallback: () => (
      <Center>
        <Text>OMG THERE ARE NO ROWS 😳</Text>
      </Center>
    ),
  });

  return <MantineReactTable table={table} />;
};

export const EmptyRowContextMenu = () => {
  //Now that empty row is an actual row, same context menu can be used, that is used on actual row data

  const { showContextMenu } = useContextMenu();
  const table = useMantineReactTable({
    columns,
    data,
    mantineTableBodyRowProps: {
      onContextMenu: showContextMenu([
        {
          key: 'add',
          title: 'Insert new row',
          onClick: () => console.log('Insert new row'),
        },
        {
          key: 'download',
          onClick: () => console.log('download'),
        },
      ]),
    },
  });

  return <MantineReactTable table={table} />;
};

export const EmptyRowExplanationPannel = () => {
  //Now that empty row is an actual row, detail pannel is available for empty row as well
  const table = useMantineReactTable({
    columns,
    data,
    renderDetailPanel: () => (
      <Center>
        There are no records to display, check if there are any active filters
        on the table, clearing them might help.
      </Center>
    ),
  });

  return <MantineReactTable table={table} />;
};

export const FormInEmptyRow = () => {
  //Now that empty row is an actual row, detail pannel is available, and can ne used as a form, maybe?
  const table = useMantineReactTable({
    columns,
    data,
    renderDetailPanel: ({ table, row, internalEditComponents }) => (
      <Center>
        <form onSubmit={(e) => e.preventDefault()}>
          <Group gap="md" pb={24} pt={16}>
            {internalEditComponents}
          </Group>
        </form>
        <Flex justify="flex-end">
          <MRT_EditActionButtons row={row} table={table} variant="text" />
        </Flex>
      </Center>
    ),
    renderEmptyRowsFallback: () => (
      <Center>
        <Text>This table is empty, click on the chevron to add a record</Text>
      </Center>
    ),
  });

  return <MantineReactTable table={table} />;
};
