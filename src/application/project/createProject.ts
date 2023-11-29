import Project from "@/src/entities/Project";
import UserRepository from "../../domain/repository/userRepository"
import IProject from "@/src/domain/models/Project";
import ProjectRepository from "@/src/domain/repository/projectRepository";

export default class CreateUser {

    constructor(private projectRepository: ProjectRepository) { }

    async perform({project_id ,site_number, irt_project_code,  client_sponsor_name, participants_id}: IProject) {
        const project = new Project(project_id ,site_number, irt_project_code,  client_sponsor_name, participants_id);
        const res = await this.projectRepository.createProject(project);
        return res;
    }
}