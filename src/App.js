import React, { useMemo } from "react";
import "./App.css";
import "reactflow/dist/style.css";
import FLow from "../src/components/Flow";
import {
  ProjectStoreContext,
  useProjectStore,
  NodesStore,
} from "./stores/nodes-store";
import { observer } from "mobx-react";

const App = observer(() => {
  const nodesStore = useMemo(() => new NodesStore(), []);

  return (
    <ProjectStoreContext.Provider value={nodesStore}>
      <div className="App">
        <FLow />
      </div>
    </ProjectStoreContext.Provider>
  );
});
export default App;
