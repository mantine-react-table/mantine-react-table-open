import { MantineReactTable, type MRT_ColumnDef } from '../../src';

import { faker } from '@faker-js/faker';
import { type Meta } from '@storybook/react';

const meta: Meta = {
  title: 'Features/Header Action Examples',
};

export default meta;

interface Row {
  address: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  state: string;
}

const columns: MRT_ColumnDef<Row>[] = [
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
    header: 'Phone Number',
  },
];

const data: Row[] = [...Array(100)].map(() => ({
  address: faker.location.streetAddress(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  phoneNumber: faker.phone.number(),
  state: faker.location.state(),
}));

export const HeaderActionsDisabledDefault = () => (
  <MantineReactTable columns={columns} data={data} />
);

export const HeaderActionsEnabled = () => (
  <MantineReactTable
    columns={columns}
    data={data}
    enableHeaderActionsHoverReveal
  />
);

export const HeaderActionsEnabledCenterAlign = () => (
  <MantineReactTable
    columns={columns}
    data={data}
    defaultColumn={{
      mantineTableHeadCellProps: {
        align: 'center',
      },
    }}
    enableHeaderActionsHoverReveal
  />
);

export const HeaderActionsEnabledRightAlign = () => (
  <MantineReactTable
    columns={columns}
    data={data}
    defaultColumn={{
      mantineTableHeadCellProps: {
        align: 'right',
      },
    }}
    enableHeaderActionsHoverReveal
  />
);

export const HeaderActionsDisabledWithFeatures = () => (
  <MantineReactTable
    columns={columns}
    data={data}
    enableColumnOrdering
    enableColumnPinning
    enableColumnResizing
    enableRowNumbers
    enableRowSelection
  />
);

export const HeaderActionsEnabledWithFeatures = () => (
  <MantineReactTable
    columns={columns}
    data={data}
    enableColumnOrdering
    enableColumnPinning
    enableColumnResizing
    enableHeaderActionsHoverReveal
    enableRowNumbers
    enableRowSelection
  />
);

export const HeaderActionsEnabledWithFeaturesCenterAlign = () => (
  <MantineReactTable
    columns={columns}
    data={data}
    defaultColumn={{
      mantineTableHeadCellProps: {
        align: 'center',
      },
    }}
    enableColumnOrdering
    enableColumnPinning
    enableColumnResizing
    enableHeaderActionsHoverReveal
    enableRowNumbers
    enableRowSelection
  />
);

export const HeaderActionsEnabledWithFeaturesRightAlign = () => (
  <MantineReactTable
    columns={columns}
    data={data}
    defaultColumn={{
      mantineTableHeadCellProps: {
        align: 'right',
      },
    }}
    enableColumnOrdering
    enableColumnPinning
    enableColumnResizing
    enableHeaderActionsHoverReveal
    enableRowNumbers
    enableRowSelection
  />
);
