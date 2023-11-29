import ProjectRepository from "@/src/domain/repository/projectRepository";
import Project from "@/src/entities/Project";


export default class GetProjectById {
    constructor(private projectRepository: ProjectRepository){}
        async perform(id: string):Promise<Project | {}> {
            const res = await this.projectRepository.getProjectById(id);
            return res;
        }
}