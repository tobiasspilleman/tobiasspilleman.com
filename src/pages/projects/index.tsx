import NavigationBar from "../../components/NavigationBar"
import {getProjects} from "../../services/getProjects";
import {Project} from "../../interfaces/Project";
import ProjectPresentation from "../../components/ProjectPresentation";
import React from "react";
import Head from "next/head";

const Projects = () => {
    const [projects, setProjects] = React.useState<Project[]>([]);

    React.useEffect(() => {
        getProjects().then((data) => setProjects(data));
    }, []);

    return (
        <>
            <Head>
                <title>Tobias Spilleman - Projects</title>
                <link rel="icon" type="image/x-icon" href="/assets/logo-image.png"/>
            </Head>
            <NavigationBar/>
            <div className="flex flex-col justify-center items-center w-full py-10">
                <div className="p-[5vw] sm:p-0 w-full sm:w-3/4 md:w-1/2 h-full">
                        <p className="text-black text-5xl font-bold mb-10">Projects</p>
                        <div className="flex flex-row flex-wrap justify-between gap-5">
                            {projects.map((project, index) => (
                                <ProjectPresentation key={index} project={project}/>
                            ))}
                        </div>
                </div>
            </div>
        </>
    );
}

export default Projects;
