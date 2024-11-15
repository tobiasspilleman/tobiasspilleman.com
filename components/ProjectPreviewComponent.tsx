import { Project } from "../interfaces/Project";

/**
 * Component to preview a project.
 *
 * @param {Object} props - The component props.
 * @param {Project} props.project - The project to preview.
 * @returns {JSX.Element} The rendered component.
 */
const ProjectPreviewComponent = ({ project }: { project?: Project }) => {
    if (!project) {
        return (
            <div className="border-4 border-dashed border-gray-300 rounded min-h-[50px] min-w-[20px]">
            </div>
        );
    } else {
        return (
            <div className="border-4 border-dashed border-gray-300 rounded min-h-[50px] min-w-[20px]">
                <h3 className="text-center text-2xl font-bold">{project.name}</h3>
                <p className="text-center text-lg">{project.description}</p>
            </div>
        );
    }
}

export default ProjectPreviewComponent;