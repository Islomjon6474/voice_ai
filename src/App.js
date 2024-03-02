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
import Chat from "./components/Chat";

const App = observer(() => {
  const nodesStore = useMemo(() => new NodesStore(), []);

  return (
    <ProjectStoreContext.Provider value={nodesStore}>
      <div className="App">
        <div className={`w-full h-full flex justify-end items-end`}>
          <Chat />
        </div>
      </div>
    </ProjectStoreContext.Provider>
  );
});
export default App;
