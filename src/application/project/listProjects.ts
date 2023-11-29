import ProjectRepository from "@/src/domain/repository/projectRepository";
import Project from "@/src/entities/Project";

export default class ListProject {
    constructor(private projectRepository: ProjectRepository){ }
    async perform():Promise<Project[]> {
        const res = await this.projectRepository.getAllProjects();
        return res;
    }
}