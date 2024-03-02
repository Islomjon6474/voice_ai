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
// import io from "socket.io-client";

export class NodesStore {
  socket = null;
  messages = [
    {
      id: "1",
      type: "user",
      text: "Some textSome textSome textSome textSome textSome textSome textSome textSome textSome text",
    },
    {
      id: "2",
      type: "operator",
      text: "Some text",
    },
    {
      id: "1",
      type: "user",
      text: "Some textSome textSome textSome textSome textSome textSome textSome textSome textSome text",
    },
    {
      id: "2",
      type: "operator",
      text: "Some text",
    },
    {
      id: "1",
      type: "user",
      text: "Some textSome textSome textSome textSome textSome textSome textSome textSome textSome text",
    },
    {
      id: "2",
      type: "operator",
      text: "Some text",
    },
    {
      id: "1",
      type: "user",
      text: "Some textSome textSome textSome textSome textSome textSome textSome textSome textSome text",
    },
    {
      id: "2",
      type: "operator",
      text: "Some text",
    },
    {
      id: "1",
      type: "user",
      text: "Some textSome textSome textSome textSome textSome textSome textSome textSome textSome text",
    },
    {
      id: "2",
      type: "operator",
      text: "Some text",
    },
    {
      id: "1",
      type: "user",
      text: "Some textSome textSome textSome textSome textSome textSome textSome textSome textSome text",
    },
    {
      id: "2",
      type: "operator",
      text: "Some text",
    },
  ];

  initializeSocketListeners() {
    this.socket.on("message", (message) => {
      console.log("message", message);
      this.messages.push(message);
    });
  }

  addMessage(message) {
    this.messages.push(message);
    this.socket.emit("message/operator", message);
  }

  constructor() {
    makeAutoObservable(this);
    this.socket = io("http://localhost:3003");
    this.initializeSocketListeners();

    this.socket.on("connect", () => {
      console.log("Connected to server");
    });
  }
}
export const ProjectStoreContext = React.createContext(null);

export const useProjectStore = () => {
  return React.useContext(ProjectStoreContext);
};
