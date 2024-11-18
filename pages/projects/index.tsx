import NavigationBar from "../../components/NavigationBar"
import {getProjects} from "../../services/getProjects";
import {Project} from "../../interfaces/Project";
import ProjectPresentation from "../../components/ProjectPresentation";

const Projects = () => {
    const projects: Project[] = getProjects()

    return (
        <>
            <NavigationBar />
            <div className="flex flex-col justify-center items-center w-full py-10">
                <div className="w-1/2 h-full">
                    <p className="text-black text-5xl font-bold mb-10">Projects</p>
                    <div className="flex flex-row flex-wrap justify-between gap-5">
                        {projects.map((project, index) => (
                            <ProjectPresentation project={project} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects;