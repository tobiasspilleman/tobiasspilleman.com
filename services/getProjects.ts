// services/getProjects.ts
import { Project } from "../interfaces/Project";
import projectsData from "../assets/res/projects.json";

export const getProjects = (): Project[] => {
    return projectsData as Project[];
};