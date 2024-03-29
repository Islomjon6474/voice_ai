import { Node } from "reactflow";

const initialNodes = [
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

export default initialNodes;
