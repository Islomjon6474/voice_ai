import * as r from "ramda";
import {
  action,
  comparer,
  IReactionDisposer,
  makeAutoObservable,
  reaction,
  runInAction,
  toJS,
} from "mobx";
import React from "react";
import { create as createPatcher } from "jsondiffpatch";
import { io } from "socket.io-client";
import camelcaseKeys from "camelcase-keys";
import snakecaseKeys from "snakecase-keys";
import moment from "moment";
import { v4 } from "uuid";
import { computedFn } from "mobx-utils";

export class NodesStore {
  addNode = () => {
    runInAction(() => {
      const newNode = {
        id: Math.random(),
        type: "input",
        data: { label: "Input" },
        position: { x: 250, y: 25 },
      };

      this.nodes.push(newNode);
      console.log(this.nodes, "this.initialNodes");
    });
  };

  nodes = [
    {
      id: "1",
      type: "input",
      data: { label: "Input" },
      position: { x: 250, y: 25 },
    },

    {
      id: "2",
      data: { label: "Default" },
      position: { x: 100, y: 125 },
    },
    {
      id: "3",
      type: "output",
      data: { label: "Output" },
      position: { x: 250, y: 250 },
    },
    {
      id: "5",
      type: "textUpdater",
      position: { x: 0, y: 0 },
      data: { value: 123 },
    },
    {
      id: "6",
      type: "addButton",
      position: { x: 250, y: 250 },
      data: { label: "Add Node", onClick: this.addNode },
    },
  ];
  constructor() {
    makeAutoObservable(this);
  }

  updateNodes = (changes) => {
    runInAction(() => {
      // Implement logic to apply changes to nodes here
      // This might involve finding nodes by ID and updating their position or data
    });
  };

  updateEdges = (changes) => {
    runInAction(() => {
      // Implement logic to apply changes to edges here
    });
  };

  addEdge = (newEdge) => {
    runInAction(() => {
      this.edges.push(newEdge);
    });
  };

  edges = [
    // Your initial edges
  ];
}
export const ProjectStoreContext = React.createContext(null);

export const useProjectStore = () => {
  return React.useContext(ProjectStoreContext);
};
