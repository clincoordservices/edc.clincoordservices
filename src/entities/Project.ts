import IProject from "../domain/models/Project";

class Project implements IProject {
    constructor( 
        public readonly project_id: string,
        public readonly site_number: string, 
        public readonly irt_project_code: string, 
        public readonly client_sponsor_name: string, 
        public readonly participants_id: string[], 
        ){} 
    
}
export default Project;