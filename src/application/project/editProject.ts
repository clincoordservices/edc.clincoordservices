import ProjectRepository from "@/src/domain/repository/projectRepository";
import Project from "@/src/entities/Project";


export default class EditProject {

    constructor(private projectRepository: ProjectRepository){ }

    async perform(project: Project, project_id: string):Promise<Project | {}> {
        const res = await this.projectRepository.updateProject(project, project_id);
        
        if(res)
        return res;
    
        return {};
    }
}