import { CheckIcon } from "@heroicons/react/20/solid";

const stats = [
    "API developed using FastAPI and Python",
    "Caching implemented with Redis",
    "API deployed via AWS Lambda",
    "Frontend created using Next.js",
    "Styling crafted with Tailwind CSS",
];

export default function Stats() {
    return (
        <ul
            role="list"
            className="mt-8 flex justify-center flex-col w-fit space-y-3 text-sm leading-6 text-gray-300 xl:mt-10"
        >
            {stats.map((stat) => (
                <li key={stat} className="flex gap-x-3 text-white">
                    <CheckIcon
                        className="h-6 w-5 flex-none text-indigo-500"
                        aria-hidden="true"
                    />

                    {stat}
                </li>
            ))}
        </ul>
    );
}
