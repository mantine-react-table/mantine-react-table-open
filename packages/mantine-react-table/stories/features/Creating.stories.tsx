import { useState } from 'react';

import { ActionIcon, Button, Select } from '@mantine/core';

import {
  createRow,
  MantineReactTable,
  type MRT_Row,
  type MRT_TableOptions,
  useMantineReactTable,
} from '../../src';

import { faker } from '@faker-js/faker';
import { type Meta } from '@storybook/react';
import { IconPlus } from '@tabler/icons-react';

const meta: Meta = {
  title: 'Features/Creating Examples',
};

export default meta;

type Person = {
  address: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  state: string;
};

const data: Person[] = [...Array(100)].map(() => ({
  address: faker.location.streetAddress(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  phoneNumber: faker.phone.number(),
  state: faker.location.state(),
}));

const expandingData = [...Array(5)].map(() => ({
  address: faker.location.streetAddress(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  phoneNumber: faker.phone.number(),
  subRows: [...Array(faker.number.int(4))].map(() => ({
    address: faker.location.streetAddress(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    phoneNumber: faker.phone.number(),
    subRows: [...Array(3)].map(() => ({
      address: faker.location.streetAddress(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      phoneNumber: faker.phone.number(),
      subRows: [...Array(2)].map(() => ({
        address: faker.location.streetAddress(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        phoneNumber: faker.phone.number(),
      })),
    })),
  })),
}));

export const CreateRowIndexTop = () => {
  const [tableData, setTableData] = useState(data);

  const handleSaveRow: MRT_TableOptions<Person>['onEditingRowSave'] = ({
    exitEditingMode,
    row,
    values,
  }) => {
    tableData[row.index] = values;
    setTableData([...tableData]);
    exitEditingMode();
  };

  const table = useMantineReactTable({
    columns: [
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
        accessorKey: 'state',
        header: 'State',
      },
      {
        accessorKey: 'phoneNumber',
        enableEditing: false,
        header: 'Phone Number',
      },
    ],
    createDisplayMode: 'row',
    data: tableData,
    editDisplayMode: 'row',
    enableEditing: true,
    onCreatingRowSave: () => {},
    onEditingRowSave: handleSaveRow,
    positionCreatingRow: 'top',
    renderTopToolbarCustomActions: ({ table }) => (
      <Button onClick={() => table.setCreatingRow(true)}>Add</Button>
    ),
  });

  return <MantineReactTable table={table} />;
};

export const CreateRowIndexBottom = () => {
  const [tableData, setTableData] = useState(data);

  const handleSaveRow: MRT_TableOptions<Person>['onEditingRowSave'] = ({
    exitEditingMode,
    row,
    values,
  }) => {
    tableData[row.index] = values;
    setTableData([...tableData]);
    exitEditingMode();
  };

  const table = useMantineReactTable({
    columns: [
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
        accessorKey: 'state',
        header: 'State',
      },
      {
        accessorKey: 'phoneNumber',
        enableEditing: false,
        header: 'Phone Number',
      },
    ],
    createDisplayMode: 'row',
    data: tableData,
    editDisplayMode: 'row',
    enableEditing: true,
    onCreatingRowSave: () => {},
    onEditingRowSave: handleSaveRow,
    positionCreatingRow: 'bottom',
    renderTopToolbarCustomActions: ({ table }) => (
      <Button onClick={() => table.setCreatingRow(true)}>Add</Button>
    ),
  });

  return <MantineReactTable table={table} />;
};

export const CreateRowIndexIndex = () => {
  const [tableData, setTableData] = useState(data);

  const handleSaveRow: MRT_TableOptions<Person>['onEditingRowSave'] = ({
    exitEditingMode,
    row,
    values,
  }) => {
    tableData[row.index] = values;
    setTableData([...tableData]);
    exitEditingMode();
  };

  const table = useMantineReactTable({
    columns: [
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
        accessorKey: 'state',
        header: 'State',
      },
      {
        accessorKey: 'phoneNumber',
        enableEditing: false,
        header: 'Phone Number',
      },
    ],
    createDisplayMode: 'row',
    data: tableData,
    editDisplayMode: 'row',
    enableEditing: true,
    onCreatingRowSave: () => {},
    onEditingRowSave: handleSaveRow,
    positionCreatingRow: 5,
    renderTopToolbarCustomActions: ({ table }) => (
      <Button onClick={() => table.setCreatingRow(true)}>Add</Button>
    ),
  });

  return <MantineReactTable table={table} />;
};

export const CreateRowIndexIndexVirtualized = () => {
  const [tableData, setTableData] = useState(data);

  const handleSaveRow: MRT_TableOptions<Person>['onEditingRowSave'] = ({
    exitEditingMode,
    row,
    values,
  }) => {
    tableData[row.index] = values;
    setTableData([...tableData]);
    exitEditingMode();
  };

  const table = useMantineReactTable({
    columns: [
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
        accessorKey: 'state',
        header: 'State',
      },
      {
        accessorKey: 'phoneNumber',
        enableEditing: false,
        header: 'Phone Number',
      },
    ],
    createDisplayMode: 'row',
    data: tableData,
    editDisplayMode: 'row',
    enableEditing: true,
    enableRowVirtualization: true,
    onCreatingRowSave: () => {},
    onEditingRowSave: handleSaveRow,
    positionCreatingRow: 5,
    renderTopToolbarCustomActions: ({ table }) => (
      <Button onClick={() => table.setCreatingRow(true)}>Add</Button>
    ),
  });

  return <MantineReactTable table={table} />;
};

export const CreateRowIndexIndexExpanding = () => {
  const [creatingRowIndex, setCreatingRowIndex] = useState<
    number | undefined
  >();

  const table = useMantineReactTable({
    columns: [
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
        accessorKey: 'phoneNumber',
        enableEditing: false,
        header: 'Phone Number',
      },
    ],
    createDisplayMode: 'row',
    data: expandingData,
    editDisplayMode: 'row',
    enableEditing: true,
    enableExpanding: true,
    initialState: { expanded: true },
    onCreatingRowSave: () => {},
    positionCreatingRow: creatingRowIndex,
    renderRowActions: ({ renderedRowIndex, row, table }) => {
      return (
        <ActionIcon
          onClick={() => {
            setCreatingRowIndex((renderedRowIndex || 0) + 1);
            table.setCreatingRow(
              createRow(
                table,
                {
                  address: '',
                  firstName: '',
                  lastName: '',
                  phoneNumber: '',
                  subRows: [],
                },
                -1,
                row.depth + 1,
              ),
            );
          }}
        >
          <IconPlus size="1rem" />
        </ActionIcon>
      );
    },
    renderTopToolbarCustomActions: ({ table }) => (
      <Button
        onClick={() => {
          setCreatingRowIndex(0);
          table.setCreatingRow(true);
        }}
      >
        Add
      </Button>
    ),
  });

  return <MantineReactTable table={table} />;
};

export const CreateWithCustomEditCell = () => {
  const [tableData, setTableData] = useState(data);
  const [creatingRow, setCreatingRow] = useState<MRT_Row<Person> | null>(null);

  const handleSaveRow: MRT_TableOptions<Person>['onEditingRowSave'] = ({
    exitEditingMode,
    row,
    values,
  }) => {
    tableData[row.index] = values;
    setTableData([...tableData]);
    exitEditingMode();
  };

  const table = useMantineReactTable({
    columns: [
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
        accessorKey: 'state',
        Edit: ({ cell }) => (
          <Select
            data={[
              { label: 'Alabama', value: 'Alabama' },
              { label: 'Alaska', value: 'Alaska' },
            ]}
            value={cell.getValue<string>()}
          />
        ),
        header: 'State',
      },
      {
        accessorKey: 'phoneNumber',
        enableEditing: false,
        header: 'Phone Number',
      },
    ],
    createDisplayMode: 'row',
    data: tableData,
    editDisplayMode: 'row',
    enableEditing: (row) => row.id === creatingRow?.id,
    onCreatingRowChange: setCreatingRow,
    onCreatingRowSave: () => {},
    onEditingRowSave: handleSaveRow,
    positionCreatingRow: 'top',
    renderTopToolbarCustomActions: ({ table }) => (
      <Button onClick={() => table.setCreatingRow(true)}>Add</Button>
    ),
    state: { creatingRow },
  });

  return <MantineReactTable table={table} />;
};
