"use client";

import Tree from "react-d3-tree";
import { useEffect, useState } from "react";
import "./TreeVisualization.css";

export default function TreeVisualization({ depsTree }) {
    const [translate, setTranslate] = useState({});

    useEffect(() => {
        const handleResize = () => {
            const dimensions = document
                .querySelector("#treeWrapper")
                .getBoundingClientRect();
            // Set the initial position of the tree to the top of the container
            setTranslate({ x: dimensions.width / 2, y: 20 }); // 20 is an arbitrary number for top padding
        };

        // Call the handleResize function to position the tree on initial load
        handleResize();

        // Add the event listener
        window.addEventListener("resize", handleResize);

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, [depsTree]); // This will re-position the tree when depsTree changes

    return (
        <div
            id="treeWrapper"
            className="bg-gray-900 rounded-lg border-indigo-400 border-2"
            style={{ width: "100%", height: "700px", color: "white" }} // Set text color to white
        >
            <Tree
                data={depsTree}
                orientation="vertical"
                translate={translate}
                pathFunc="straight"
                rootNodeClassName="node__root"
                branchNodeClassName="node__branch"
                leafNodeClassName="node__leaf"
                pathClassFunc={() => "custom-link"}
                textLayout={{ textAnchor: "start", x: 10, y: -10 }}
                allowForeignObjects
                nodeLabelComponent={{
                    render: <text className="node__label" />,
                    foreignObjectWrapper: {
                        y: 24,
                    },
                }}
            />
        </div>
    );
}
