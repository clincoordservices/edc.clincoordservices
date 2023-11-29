import ProjectRepository from "@/src/domain/repository/projectRepository";
import Project from "@/src/entities/Project";

export default class GetProject {
    constructor(private projectRepository: ProjectRepository){}
        async perform(projectId: string):Promise<Project | {}> {
            const res = await this.projectRepository.getProjectById(projectId);
            return res;
        }
}