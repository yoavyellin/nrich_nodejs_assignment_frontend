"use client";

import { useState } from "react";
import Form from "./components/Form";
import toast from "react-hot-toast";
import TreeVisualization from "./components/TreeVisualization";
import { useRouter } from "next/navigation";

export default function Home() {
    const [depsTree, setDepsTree] = useState(null);

    const router = useRouter();

    async function onSubmit(e) {
        e.preventDefault();
        const packageName = e.target.name.value;

        const promise = getDepsTree(packageName);

        toast.promise(
            promise,
            {
                loading: "Loading...",
                success: () => {
                    router.push("#treeWrapper");
                    return "Got the data!";
                },
                error: (err) => err.toString(),
            },
            {
                success: {
                    duration: 3000,
                },
                error: {
                    duration: 6000,
                },
            }
        );
    }

    async function getDepsTree(name) {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_ENDPOINT}/${name}`
        );

        const data = await res.json();

        if (res.ok) {
            setDepsTree(data.data);
        } else {
            throw new Error(`Response status: ${res.status}. ${data.error}`);
        }
    }

    return (
        <main className="min-h-full flex flex-col gap-y-12 pt-24 pb-12 px-16">
            <Form onSubmit={onSubmit} />

            {depsTree && <TreeVisualization depsTree={depsTree} />}
        </main>
    );
}
