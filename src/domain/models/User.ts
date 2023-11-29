interface IUser {    
    id: string, 
    first_name: string,
    last_name: string,
    middle_name: string,
    email: string,
    company: string,
    password: string,
    institution: string,
    project_id: string [],
    access_level: string,
    role: string
}
export default IUser;