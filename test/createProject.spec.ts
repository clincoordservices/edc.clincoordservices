// import CreateProject from "@/src/application/project/createProject";
// import ProjectRepositoryDatabase from "@/src/infrastructure/repository/database/projectRepositoryDatabase";
// import MongoDBAdapter from "@/src/infrastructure/database/mongodb/MongoDBAdapter";
// import Project from "@/src/entities/Project";
// import ListProject from "@/src/application/project/listProjects";
// import DeleteProject from "@/src/application/project/deleteProject"; 
// import GetProjectById from "@/src/application/project/getProjectById";
// import EditProject from "@/src/application/project/editProject";



// const mongoUri = process.env.NEXT_PUBLIC_MONGODB_URI as string;
// const dbName = 'clicncoordservices';
// const mongoAdapter = new MongoDBAdapter(mongoUri, dbName);
// const projectRepository = new ProjectRepositoryDatabase(mongoAdapter, 'project');
// const createProject = new CreateProject(projectRepository);
// const listProject = new ListProject(projectRepository);
// const deleteProject = new DeleteProject(projectRepository);
// const getProjectById = new GetProjectById(projectRepository);
// const editedProject = new EditProject(projectRepository);


// describe('Integration Test - Database Connection', () => {

//     beforeAll(async () => {
//         await mongoAdapter.connect();
//     })
//     afterAll(async () => {
//         await mongoAdapter.close();
//     })

//     const newProject =  {
//          project_id:"ProjectIdTest" ,
//          site_number: "SiteNmer101", 
//          irt_project_code:"IdGeneratedBySystemTest", 
//          client_sponsor_name :"NameTesteSponsor" , 
//          participants_id: ["IdTeste", "IdTeste"], 
//     }
//     const newProject1 =  {
//          project_id:"newProjectProjectIdTest" ,
//          site_number: "newProjectSiteNmer101", 
//          irt_project_code:"IdGeneratedBySystemTest", 
//          client_sponsor_name :"NameTesteSponsor" , 
//          participants_id: ["IdT11este", "IdTe11ste"], 
//     }

//     // it('should connect and create a Project  to the database', async () => {
//     //     const isCreated =  await createProject.perform(newProject);
//     //     expect(isCreated).toBe(true);
//     // })

//     it('should list  Project  from  the database', async () => {
//         const allProject =  await listProject.perform();
//         expect(allProject.length > 0).toBe(true);
//     })
    
//     it('should delete  Project  from  the database', async () => {
//         const isDeleted =  await deleteProject.perform("656739154cc4fe61d5fb527d");
//         expect(isDeleted).toBe(true);
//     })
//     it('should get  Project  from  the database', async () => {
//         const getUser =  await getProjectById.perform("656734e635f244d05253a69c");
//         expect(getUser).toBe(true);
//     })
//     it('should edit   Project  from  the database', async () => {
//         const isEdited =  await editedProject.perform(newProject1,"656739d57b9980689a005120");
//         expect(isEdited).toBe(true);
//     })
// })