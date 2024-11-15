import { Project } from "../interfaces/Project";

const ProjectPreviewComponent = ({ project }: { project?: Project }) => {
    if (!project) {
        return (
            <div className="border-4 border-dashed border-gray-300 rounded min-h-[150px] h-full min-w-[20px] flex items-center justify-center">
                <h3 className="text-xl font-bold text-center text-gray-400 content-center center">Coming soon</h3>
            </div>
        );
    } else {
        return (
            <a href={project.githubLink}>
                <div className="border-4 border-gray-300 rounded min-h-[150px] min-w-[20px] p-5 h-full cursor-pointer">
                    <h3 className="text-xl font-bold">{project.name}</h3>
                    <p className="text text-m text-gray-400">{project.previewText}</p>
                </div>
            </a>
        );
    }
}

export default ProjectPreviewComponent;