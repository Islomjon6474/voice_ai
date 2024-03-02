import React from "react";
import { Handle, Position } from "reactflow";
import { observer } from "mobx-react";

const AddButtonNode = observer(({ data, id }) => {
  return (
    <div style={{ background: "#9CA8B3", padding: 10, borderRadius: 5 }}>
      {/* You can use Handles if you want to connect nodes */}
      <Handle type="target" position={Position.Top} />
      <div
        style={{ cursor: "pointer", color: "white", textAlign: "center" }}
        onClick={() => data.onClick(id)}
      >
        {data.label}
      </div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
});

export default AddButtonNode;
