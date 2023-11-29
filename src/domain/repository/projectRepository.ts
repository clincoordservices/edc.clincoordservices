import Project from "@/src/entities/Project";

export default interface ProjectRepository {
	getProjectById(project_id: string): Promise<Project | {}>;
	getAllProjects(): Promise<Project[]>;
	createProject(project: Project): Promise<Boolean>;
	updateProject(project: Project, projectEmail: string): Promise<Project| {}>;
	deleteProject(project_id: string): Promise<boolean>; 
}