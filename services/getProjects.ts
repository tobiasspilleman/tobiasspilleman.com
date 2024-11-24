import {Project} from "../interfaces/Project";

export const getProjects = async (): Promise<Project[]> => {
    try {
        const response = await fetch("https://www.tobiasspilleman.com/data/projects.json");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const projectsData: Project[] = await response.json();
        return projectsData;
    } catch (error) {
        console.error("Failed to fetch projects:", error);
        return [];
    }
};