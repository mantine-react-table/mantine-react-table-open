import { SourceCodeSnippet } from '../../components/mdx/SourceCodeSnippet';
import Example from './sandbox/src/TS';

const TS = require('!!raw-loader!./sandbox/src/TS.tsx').default;

const ExampleTable = ({ showTopRow = true }: { showTopRow?: boolean }) => {
  return (
    <SourceCodeSnippet
      Component={Example}
      typeScriptCode={TS}
      tableId="editing-crud-tree"
      showTopRow={showTopRow}
    />
  );
};

export default ExampleTable;
