"use client";

import { useEffect, useRef, useState } from "react";
import Graph from "react-graph-vis";

export default function DepsGraph({ depsGraph }) {
    const [loaded, setLoaded] = useState(false);
    const [networkInstance, setNetworkInstance] = useState(null); // State for network instance

    console.log({
        nodes: depsGraph?.nodes.length,
        edges: depsGraph?.edges.length,
    });

    useEffect(() => {
        setLoaded(true);
    }, []);

    useEffect(() => {
        if (networkInstance && loaded) {
            networkInstance.fit({
                animation: true,
            });
        }
    }, [depsGraph, loaded, networkInstance]); // Include networkInstance in dependency array

    // Dynamically adjust layout based on the number of nodes
    const nodeCount = depsGraph.nodes.length;
    let levelSeparation = 180;
    let nodeSpacing = 150;

    if (nodeCount > 100) {
        levelSeparation *= 5;
        nodeSpacing *= 5;
    }
    if (nodeCount > 200) {
        levelSeparation *= 2; // Multiplying by 10 overall
        nodeSpacing *= 2; // Multiplying by 10 overall
    }

    const graphOptions = {
        layout: {
            hierarchical: {
                levelSeparation: levelSeparation,
                nodeSpacing: nodeSpacing,
            },
        },
        nodes: {
            color: "#4338ca",
            font: { size: 14, color: "#fff", face: "Arial" },
        },
        edges: {
            color: "#fff",
            smooth: false,
            width: 1,
        },
        physics: {
            enabled: false,
        },
        interaction: {
            hover: false,
        },
    };

    return (
        <div
            id="graphWrapper"
            className="bg-gray-900 rounded-lg border-indigo-400 border-2"
            style={{ width: "100%", height: "80vh", color: "white" }}
        >
            {loaded && (
                <Graph
                    getNetwork={(network) => {
                        setNetworkInstance(network); // Set the network instance
                    }}
                    graph={depsGraph}
                    options={graphOptions}
                />
            )}
        </div>
    );
}
