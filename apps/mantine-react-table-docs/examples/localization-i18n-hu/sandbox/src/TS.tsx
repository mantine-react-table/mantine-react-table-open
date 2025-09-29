import '@mantine/core/styles.css';
import '@mantine/dates/styles.css'; //if using mantine date picker features
import 'mantine-react-table-open/styles.css'; //make sure MRT styles were imported in your app root (once)
//Import Mantine React Table and its Types
import { MantineReactTable, type MRT_ColumnDef } from 'mantine-react-table-open';

//Import Mantine React Table Translations
import { MRT_Localization_HU } from 'mantine-react-table-open/locales/hu';

//mock data
import { data, type Person } from './makeData';

const columns: MRT_ColumnDef<Person>[] = [
  {
    accessorKey: 'firstName',
    header: 'Keresztnév',
  },
  {
    accessorKey: 'lastName',
    header: 'Vezetéknév',
    enableClickToCopy: true,
  },
  {
    accessorKey: 'age',
    header: 'Kor',
  },
];

const Example = () => {
  return (
    <MantineReactTable
      columns={columns}
      data={data}
      enableColumnFilterModes
      enableColumnOrdering
      enableEditing
      enableColumnPinning
      enableRowActions
      enableRowSelection
      enableSelectAll={false}
      initialState={{ showColumnFilters: true, showGlobalFilter: true }}
      localization={MRT_Localization_HU}
    />
  );
};

export default Example;
