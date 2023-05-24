//components
import Mouse from "../CodeEditor/Mouse";
import DataProvider from "../CodeEditor/context/DataProvider";

function All() {
  return (
    <DataProvider>
      <Mouse />
    </DataProvider>
  );
}

export default All;
