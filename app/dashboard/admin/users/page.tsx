"use client";
import { useEffect, useState } from "react";
import { useForm   } from "react-hook-form";
// import {CiSearch} from "react-icons/Ci";
import type { FieldValues  } from "react-hook-form";
import styles from "./users.module.css";
import { IUserData, IUserSchema } from "@/app/utils/form_validation/adminAddUsers";
import { zodResolver } from "@hookform/resolvers/zod";
import fetchWithParams from "@/app/utils/fetchData/fetch";
import User from "@/src/entities/User";
import UserList from "@/app/components/admin_userlist/page2";

type TRoleData = {
    id: number,
    name: string; 
}
const ManageUsers = () => {
     const [show, setShow] = useState<Boolean>(false);
     const [user, setUser] = useState<IUserData[]>([]);
     const [roles, setRoles] = useState<TRoleData []>([]);
     const rolesData = [
        { id: 1, name: "Project Monitoring" },
        { id: 2, name: "Project Data Manager" },
        { id: 3, name: "Project Sponsor and Management" },
        { id: 4, name: "Project Clinic Site" },
        { id: 5, name: "Principal Investigator (eCRF signature)" },
        { id: 6, name: "Project Coordinator" },
        { id: 7, name: "Data Coordinator"}
      ];


     const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
        reset,
        getValues   
            } = useForm<IUserData>({
                resolver: zodResolver(IUserSchema),
    });
    useEffect(() => {
        (async ()=> {
            const response = await fetchWithParams('/api/all_users/', 'GET');
            const res = await response.json(); 
            const {users} = res
            setUser(users);
        })();

        setRoles(rolesData);
      }, []);




     const submitHandler = async (data: FieldValues)=> {
         console.log(getValues())
        setUser([...user, getValues()])
        const response = await fetchWithParams('/api/create_user/', 'POST', JSON.stringify(getValues()));
        const res = await response.json();
        console.log(res);
        await new Promise((resolve)=> setTimeout(resolve, 1000));
        reset();
    }

    const clickHander = ()=> {
        setShow(prev=> !prev)
    }
    return (
    <>
        <main className={styles.mainBody}>
        <h4>User managment</h4>

            <section className={styles.mainContent}>
                <div className={styles.mainContent_header}>
                    <div className={styles.mainContent_header_}>
                        <span>
                                <button onClick={clickHander}> Add user</button>
                        </span>
                        <span className={styles.mainContent_header_search}>
                            <input id="search" type="search"/> 
                            <label htmlFor="search" >
                                {/* <CiSearch/> */}
                            </label>
                        </span>
                    </div>
                    <div className={` ${show ?"showListElement":"hideListElement"}`}>
                        <form className={styles.formContent} onSubmit={handleSubmit(submitHandler)}   method="post">
                            <div>
                                <legend><h4>Add user account</h4></legend>
                            </div>
                            <div className={styles.manegeUserBobyForm}>
                                <div>
                                    <label htmlFor="first_name">First name</label>
                                    <input 
                                        type="text" 
                                        id="first_name" 
                                        {...register("first_name")}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="middle_name">Middle Name</label>
                                    <input 
                                        type="text" 
                                        id="subject" 
                                        {...register("middle_name")}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="last_name">Last Name</label>
                                    <input 
                                        type="text" 
                                        id="last_name" 
                                        {...register("last_name")}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email">User email</label>
                                    <input 
                                        type="text" 
                                        id="email" 
                                        {...register("email")}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password">Tem. Password</label>
                                    <input 
                                        type="text" 
                                        id="password" 
                                        {...register("password")}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="role">User role</label>
                                    <input
                                        
                                        type="text"
                                        list="role"
                                        {...register('role')}
                                    />
                                    <datalist id="role">
                                            {roles.map((role) => (
                                            <option key={role.id} value={role.name}>{role.name}</option>
                                            ))}
                                    </datalist>
                                </div>
                                <div>
                                    <label htmlFor="institution">Institution</label>
                                    <input 
                                        type="text" 
                                        id="institution" 
                                        {...register("institution")}
                                    /> 
                                </div>
                                <div>
                                    <label htmlFor="company">Comapny</label>
                                    <input 
                                        type="text" 
                                        id="company" 
                                        {...register("company")}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="project">Project</label>
                                    <input 
                                        type="text" 
                                        id="project" 
                                        {...register("project")}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="access_level">Acess Level</label>
                                    <input 
                                        type="text" 
                                        id="access_level" 
                                        {...register("access_level")}
                                    />
                                </div>
                            <div>
                            <label className="hideListElement">Button</label>
                                <button
                                    disabled={isSubmitting} 
                                    type="submit"
                                    >Add
                                </button>
                            </div>
                            </div>            
                        </form>
                    </div>
                </div>

                <div className={styles.mainContent_body}>
                    <h5>USERS LIST</h5>
                         { !(user.length===0) ? <UserList users= {user} /> : <span>No user yet.</span> }   
                </div>

            </section>
        </main>
    </>);
}
export default ManageUsers;