import { Button, Container } from '@mantine/core';

import { MantineReactTable, useMantineReactTable } from '../../src';

import { type Meta } from '@storybook/react';

const meta: Meta = {
  title: 'Fixed Bugs/Custom Reset Button',
};

export default meta;

enum DataItemTypeEnum {
  Cat = 'Cat',
  Dog = 'Dog',
}

type DataItemType = {
  id: number;
  sound: string;
  type: DataItemTypeEnum;
};

const typeOptions = [
  { label: 'Cat', value: DataItemTypeEnum.Cat },
  { label: 'Dog', value: DataItemTypeEnum.Dog },
];

const data: DataItemType[] = [
  {
    id: 1,
    sound: 'Meow',
    type: DataItemTypeEnum.Cat,
  },
  {
    id: 2,
    sound: 'Arf',
    type: DataItemTypeEnum.Dog,
  },
];

const CustomResetButton = () => {
  const table = useMantineReactTable({
    columns: [
      {
        accessorKey: 'id',
        filterFn: 'contains',
        filterVariant: 'text',
        header: 'ID',
      },
      {
        accessorKey: 'type',
        enableColumnFilter: true,
        filterFn: 'equals',
        filterVariant: 'select',
        header: 'Type',
        mantineFilterSelectProps: {
          data: typeOptions,
        },
      },
      {
        accessorKey: 'sound',
        filterFn: 'contains',
        filterVariant: 'text',
        header: 'Sound',
      },
    ],
    data,
    enableBottomToolbar: false,
    enableColumnActions: false,
    enableColumnFilters: true,
    enableRowActions: false,
    enableSorting: false,
    initialState: {
      showColumnFilters: true,
    },
    renderTopToolbar: false,
  });

  return (
    <Container py="lg">
      <Button mb="lg" onClick={() => table.resetColumnFilters()}>
        Custom Reset Button
      </Button>
      <MantineReactTable table={table} />
    </Container>
  );
};

export { CustomResetButton };
