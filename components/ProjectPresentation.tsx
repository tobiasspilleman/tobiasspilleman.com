import {Project} from "../interfaces/Project";

const ProjectPresentation = ({ project } : {project: Project}) => {
    return (
        <a href={project.githubLink} className={"w-full"}>
            <div className="w-full mb-10">
                <p className="text-lg font-bold">{project.name}</p>
                <p>{project.finished}</p>
                <p className="text-gray-600 mb-5">{project.description}</p>
                <div className="flex justify-center items-center bg-grey-light rounded p-10 min-h-80 max-h-80">
                    <img className="w-full h-full object-contain" src={project.images[0]}/>
                </div>
            </div>
        </a>
    )
}

export default ProjectPresentation;