"use client";
import { useState } from "react";
import { useForm   } from "react-hook-form";
// import {CiSearch} from "react-icons/Ci";
import type { FieldValues  } from "react-hook-form";
import styles from "./users.module.css";
import UserList from "@/app/components/admin_userlist/page2";
import { IUserData, IUserSchema } from "@/app/utils/form_validation/adminAddUsers";
import { zodResolver } from "@hookform/resolvers/zod";
import fetchWithParams from "@/app/utils/fetchData/fetch";
import User from "@/src/entities/User";


const ManageUsers = () => {
     const [show, setShow] = useState<Boolean>(false);
     const [user, setUser] = useState<IUserData[]>([]);

     const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
        reset,
        getValues   
   } = useForm<IUserData>({
    resolver: zodResolver(IUserSchema)
});

//    const [wasSent, setWasSent] = useState(true);



     const submitHandler = async (data: FieldValues)=> {

        console.log(getValues())
        setUser([...user, getValues()])
        const response = await fetchWithParams('/api/create_user/', 'POST', JSON.stringify(getValues()));
        const res = await response.json();
        console.log(res)
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
                                        id="role" 
                                        {...register("role")}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="institute">Institution</label>
                                    <input 
                                        type="text" 
                                        id="institute" 
                                        {...register("institute")}
                                    /> 
                                </div>
                                <div>
                                    <label htmlFor="project">Project</label>
                                    <input 
                                        type="text" 
                                        id="user_project" 
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