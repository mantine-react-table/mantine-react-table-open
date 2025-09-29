import { MantineReactTable } from '../../src';

import { type Meta } from '@storybook/react';

const meta: Meta = {
  title: 'Fixed Bugs/Filtering',
};

export default meta;

export const SwitchFromEmptyToEqualsArray = () => (
  <MantineReactTable
    columns={[
      {
        accessorKey: 'id',
        enableColumnFilterModes: false,
        header: 'ID',
      },
      {
        accessorKey: 'state',
        columnFilterModeOptions: ['equals', 'empty', 'notEmpty'],
        filterVariant: 'multi-select',
        header: 'State',
        mantineFilterMultiSelectProps: {
          data: [
            'Wyoming',
            'Delaware',
            'South Dakota',
            'Vermont',
            'Rhode Island',
          ],
        },
      },
    ]}
    data={[
      { id: 1, state: '' },
      { id: 2, state: 'Wyoming' },
    ]}
    enableColumnFilterModes
    initialState={{ showColumnFilters: true }}
  />
);
