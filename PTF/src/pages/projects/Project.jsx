function Project(props) {
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-2">{props.project.name}</h2>
            <p className="mb-4">{props.project.description}</p>
            <p className="mb-4"><strong>Tech Stack:</strong> {props.project.techStack.join(', ')}</p>
            <a 
                href={props.project.links.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 hover:underline"
            >
                GitHub
            </a>
        </div>
    );
}

export default Project;