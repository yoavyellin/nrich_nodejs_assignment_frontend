"use client";

import Stats from "./Stats";

export default function Form({ onSubmit }) {
    return (
        <div className="max-w-7xl flex justify-center items-center flex-col mx-auto ">
            <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl max-w-2xl mx-auto">
                Dependency Tree Generator <br />
                Yoav Yellin
            </h2>
            <p className="text-center text-lg leading-8 text-gray-300 max-w-xl mx-auto mt-8">
                Enter an npm package name to generate its full dependency tree.
            </p>
            <Stats />
            <form
                onSubmit={onSubmit}
                className="flex max-w-md mx-auto mt-10 gap-x-4"
            >
                <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="flex-auto min-w-0 rounded-md bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                    placeholder="Enter package name"
                />
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white flex-none"
                >
                    Generate
                </button>
            </form>
        </div>
    );
}
