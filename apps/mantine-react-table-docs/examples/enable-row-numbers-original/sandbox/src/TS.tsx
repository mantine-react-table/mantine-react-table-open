import '@mantine/core/styles.css';
import '@mantine/dates/styles.css'; //if using mantine date picker features
import 'mantine-react-table-open/styles.css'; //make sure MRT styles were imported in your app root (once)
import { MantineReactTable, useMantineReactTable } from 'mantine-react-table-open';
import { columns, data } from './makeData';

const Example = () => {
  const table = useMantineReactTable({
    columns,
    data,
    enableRowNumbers: true,
    rowNumberDisplayMode: 'original',
  });

  return <MantineReactTable table={table} />;
};

export default Example;
