"use client";
import { useState } from "react";
import { useForm   } from "react-hook-form";
import type { FieldValues  } from "react-hook-form";
import styles from "./users.module.css";

type IUser =  {
    first_name: string,
    last_name: string,
    middle_name: string
    temp_pswd:string
    user_email:string
    user_institute: string
    user_role:string
}

const ManageUsers = () => {
     const [show, setShow] = useState<Boolean>(true);
     const [user, setUser] = useState<IUser[]>([]);

     const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
        reset,
        getValues   
   } = useForm();
   const [wasSent, setWasSent] = useState(true);

     const submitHandler = async (data: FieldValues)=> {
        
        console.log(getValues())

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
                        <span>
                            <input type="search"/>
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
                                    <label htmlFor="user_email">User email</label>
                                    <input 
                                        type="text" 
                                        id="user_email" 
                                        {...register("user_email")}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="temp_pswd">Tem. password</label>
                                    <input 
                                        type="text" 
                                        id="temp_pswd" 
                                        {...register("temp_pswd")}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="user_role">User role</label>
                                    <input 
                                        type="text" 
                                        id="user_role" 
                                        {...register("user_role")}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="user_institute">User Institution</label>
                                    <input 
                                        type="text" 
                                        id="user_institute" 
                                        {...register("user_institute")}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="user_project">User project</label>
                                    <input 
                                        type="text" 
                                        id="user_institute" 
                                        {...register("user_institute")}
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
                    <h4>USERS LIST</h4>
                    <ul> 
                         {
                          
                             }

                    </ul>
                </div>

            </section>
        </main>
    </>);
}
export default ManageUsers;