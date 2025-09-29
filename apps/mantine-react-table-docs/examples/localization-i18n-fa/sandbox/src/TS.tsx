import '@mantine/core/styles.css';
import '@mantine/dates/styles.css'; //if using mantine date picker features
import 'mantine-react-table-open/styles.css'; //make sure MRT styles were imported in your app root (once)
//Import Mantine React Table and its Types
import { MantineReactTable, type MRT_ColumnDef } from 'mantine-react-table-open';

//Import Mantine React Table Translations
import { MRT_Localization_FA } from 'mantine-react-table-open/locales/fa';

//mock data
import { data, type Person } from './makeData';
import {
  DirectionProvider,
  MantineProvider,
  useMantineTheme,
} from '@mantine/core';

const columns: MRT_ColumnDef<Person>[] = [
  {
    accessorKey: 'firstName',
    header: 'نام',
  },
  {
    accessorKey: 'lastName',
    header: 'نام خانوادگی',
    enableClickToCopy: true,
  },
  {
    accessorKey: 'age',
    header: 'سن',
  },
];

const Example = () => {
  const theme = useMantineTheme();
  return (
    <DirectionProvider detectDirection={false} initialDirection={'rtl'}>
      <MantineProvider theme={theme}>
        <div style={{ direction: 'rtl' }}>
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
            localization={MRT_Localization_FA}
          />
        </div>
      </MantineProvider>
    </DirectionProvider>
  );
};

export default Example;
