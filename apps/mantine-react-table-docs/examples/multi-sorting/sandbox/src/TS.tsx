import '@mantine/core/styles.css';
import '@mantine/dates/styles.css'; //if using mantine date picker features
import 'mantine-react-table-open/styles.css'; //make sure MRT styles were imported in your app root (once)
import { MantineReactTable, type MRT_ColumnDef } from 'mantine-react-table-open';
import { data, type Person } from './makeData';
import { Button } from '@mantine/core';

const columns: MRT_ColumnDef<Person>[] = [
  {
    accessorKey: 'firstName',
    header: 'First Name',
    sortDescFirst: false, //sort first name in ascending order by default on first sort click (default for non-numeric columns)
  },

  {
    accessorKey: 'lastName',
    header: 'Last Name',
  },
  {
    accessorKey: 'city',
    header: 'City',
  },
  {
    accessorKey: 'state',
    header: 'State',
  },

  {
    accessorKey: 'salary',
    header: 'Salary',
    sortDescFirst: true, //sort salary in descending order by default on first sort click (default for numeric columns)
  },
];

const Example = () => {
  return (
    <MantineReactTable
      columns={columns}
      data={data}
      isMultiSortEvent={() => true} //now no need to hold `shift` key to multi-sort
      maxMultiSortColCount={3} //prevent more than 3 columns from being sorted at once
      initialState={{
        sorting: [
          { id: 'state', desc: false }, //sort by state in ascending order by default
          { id: 'city', desc: true }, //then sort by city in descending order by default
        ],
      }}
      renderTopToolbarCustomActions={({ table }) => (
        <Button onClick={() => table.resetSorting(true)}>
          Clear All Sorting
        </Button>
      )}
    />
  );
};

export default Example;
