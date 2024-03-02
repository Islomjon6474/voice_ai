import React, { useState, useCallback, useEffect, useMemo } from "react";
// import { MagicWand } from "@radix-ui/react-icons";
import "reactflow/dist/style.css";
import { observer } from "mobx-react";
import {
  NodesStore,
  ProjectStoreContext,
  useProjectStore,
} from "../stores/nodes-store";
import TextUpdaterNode from "./TextUpdaterNode";
import AddButtonNode from "./AddButtonNode";
import { action, toJS } from "mobx";
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  ControlButton,
} from "reactflow";

const initialEdges = [];

const Flow = observer(() => {
  const projectEditorStore = useProjectStore();

  return (
    <div className="App">
      <div
        // style={{ height: "100vh", width: "100vw", justifyContent: "center" }}
        className="flex flex-col items-center justify-center gap-20 w-full h-full"
      >
        <div className={`w-full flex justify-around items-center`}>
          <div className="w-[100px] h-[100px]  border-2 rounded-full shadow-2xl border-amber-400 flex items-center justify-center">
            Main
          </div>
          <div className="w-[100px] h-[100px]  border-2 rounded-full shadow-2xl border-amber-400 flex items-center justify-center">
            Main
          </div>
          <div className="w-[100px] h-[100px]  border-2 rounded-full shadow-2xl border-amber-400 flex items-center justify-center">
            Main
          </div>
        </div>
        <div className="w-[100px] h-[100px]  border-2 rounded-full shadow-2xl border-amber-400 flex items-center justify-center">
          Main
        </div>
        <div className={`w-full flex justify-around items-center`}>
          <div className="w-[100px] h-[100px]  border-2 rounded-full shadow-2xl border-amber-400 flex items-center justify-center">
            Main
          </div>
          <div className="w-[100px] h-[100px]  border-2 rounded-full shadow-2xl border-amber-400 flex items-center justify-center">
            Main
          </div>
          <div className="w-[100px] h-[100px]  border-2 rounded-full shadow-2xl border-amber-400 flex items-center justify-center">
            Main
          </div>
        </div>
      </div>
    </div>
  );
});

export default Flow;
