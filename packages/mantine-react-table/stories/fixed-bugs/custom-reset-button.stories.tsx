import { Button, Container } from '@mantine/core';
import {
  MantineReactTable, useMantineReactTable
} from '../../src';
import { type Meta } from '@storybook/react';

const meta: Meta = {
  title: 'Fixed Bugs/Custom Reset Button',
};

export default meta;

enum DataItemTypeEnum {
  Dog = 'Dog',
  Cat = 'Cat',
}

type DataItemType = {
  id: number;
  type: DataItemTypeEnum;
  sound: string;
};

const typeOptions = [
  { label: 'Cat', value: DataItemTypeEnum.Cat },
  { label: 'Dog', value: DataItemTypeEnum.Dog },
];

const data: DataItemType[] = [
  {
    id: 1,
    type: DataItemTypeEnum.Cat,
    sound: 'Meow',
  },
  {
    id: 2,
    type: DataItemTypeEnum.Dog,
    sound: 'Arf',
  },
];

const CustomResetButton = () => {
  const table = useMantineReactTable({
    data,
    enableRowActions: false,
    renderTopToolbar: false,
    enableBottomToolbar: false,
    enableColumnFilters: true,
    enableColumnActions: false,
    enableSorting: false,
    initialState: {
      showColumnFilters: true,
    },
    columns: [
      {
        accessorKey: 'id',
        header: 'ID',
        filterVariant: 'text',
        filterFn: 'contains',
      },
      {
        accessorKey: 'type',
        header: 'Type',
        filterVariant: 'select',
        filterFn: 'equals',
        enableColumnFilter: true,
        mantineFilterSelectProps: {
          data: typeOptions,
        },
      },
      {
        accessorKey: 'sound',
        header: 'Sound',
        filterVariant: 'text',
        filterFn: 'contains',
      },
    ],
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
