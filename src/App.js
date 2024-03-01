import React from 'react';
import './App.css';


import { useState, useCallback } from 'react';
import ReactFlow, {
    Controls,
    Background,
    applyNodeChanges,
    applyEdgeChanges,
    addEdge,
} from 'reactflow';
import 'reactflow/dist/style.css';


const initialNodes = [
    {
        id: '1',
        data: { label: 'Davron aka ' },
        position: { x: 0, y: 0 },
    },
    {
        id: '2',
        data: { label: 'Islom' },
        position: { x: 100, y: 100 },
    },{
        id: '3',
        data: { label: 'Sardor' },
        position: { x: 200, y: 200 },
    },
    {
        id: '4',
        data: { label: 'Komiljon' },
        position: { x: 300, y: 300 },
    },{
        id: '5',
        data: { label: 'Jamshed' },
        position: { x: 400, y: 400 },
    },
    {
        id: '6',
        data: { label: 'Murod' },
        position: { x: 500, y: 500 },
    },{
        id: '7',
        data: { label: 'MuhammadAli' },
        position: { x: 600, y: 600 },
    },{
        id: '8',
        data: { label: 'Kasha' },
        position: { x: 700, y: 700 },
    },
];

const initialEdges = [];

function App() {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

    const onNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [],
    );
    const onEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [],
    );

    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge(params, eds)),
        [],
    );

    return (
    <div className="App">
        <div style={{ height: '100vh', width: '100vw' }}>
            <ReactFlow
                nodes={nodes}
                onNodesChange={onNodesChange}
                edges={edges}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                fitView
            >
                <Background />
                <Controls />
            </ReactFlow>
        </div>
    </div>
  );
}

export default App;
