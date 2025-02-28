import { useState } from "react";
import data from "./data.json";
import Project from "./Project";

function ProjectsPage() {
    console.log(data);

    const [count, setCount] = useState(0);

    const add = () => {
        if (count === data.projects.length - 1) {
            setCount(0);
        } else {
            setCount(prevCount => prevCount + 1);
        }
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-6">Projects</h1>
            <p className="mb-8 text-lg">Here are some of my projects:</p>
            <ul className="space-y-6 w-full max-w-4xl">
                <li className="bg-white p-6 rounded-lg shadow-md">
                    <Project project={data.projects[count]} />
                </li>
            </ul>
            <button 
                onClick={add} 
                className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300"
            >
                Next Project
            </button>
        </div>
    );
}

export default ProjectsPage;