import { MRT_SelectCheckbox } from '../../components/inputs/MRT_SelectCheckbox';
import {
  type MRT_ColumnDef,
  type MRT_RowData,
  type MRT_StatefulTableOptions,
} from '../../types';
import { defaultDisplayColumnProps } from '../../utils/displayColumn.utils';

export const getMRT_RowSelectColumnDef = <TData extends MRT_RowData>(
  tableOptions: MRT_StatefulTableOptions<TData>,
): MRT_ColumnDef<TData> | null => {
  const { enableMultiRowSelection, enableSelectAll } = tableOptions;

  return {
    Cell: ({ renderedRowIndex, row, table }) => (
      <MRT_SelectCheckbox
        renderedRowIndex={renderedRowIndex}
        row={row}
        table={table}
      />
    ),
    grow: false,
    Header:
      enableSelectAll && enableMultiRowSelection
        ? ({ table }) => <MRT_SelectCheckbox table={table} />
        : undefined,
    ...defaultDisplayColumnProps({
      header: 'select',
      id: 'mrt-row-select',
      size: enableSelectAll ? 60 : 70,
      tableOptions,
    }),
  };
};
