import ProjectRepository from "@/src/domain/repository/projectRepository";


export default class DeleteProject {

    constructor(private userRepository: ProjectRepository) { }
    async perform(project_id: string) {
        const res = await this.userRepository.deleteProject(project_id);
        return res;
    }
}