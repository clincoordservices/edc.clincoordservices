"use client"
import React, { useState } from "react";
import Link from "next/link";
import fetchWithParams from "../assets/fetchData/fetch";
import styles from "./signup.module.css";

const Signup = () => {
     const [formData, setFormData] = useState({});

     const submitHandler = async (e: React.FormEvent<HTMLFormElement>) =>  {
         e.preventDefault();

         const data = {id:20}
         if(!!formData){
            const response = await fetchWithParams("http://localhost:3000/api/signup",  "POST", {
                "Content-Type": "application/json",
              })
            
             console.log(response);
         }
        
     } 

     const getDataOnForm = (e: React.FormEvent<HTMLInputElement>) => {
        const element = e.target as HTMLInputElement;

        setFormData((prevState) => ({
          ...prevState,
          [element.name]: element.value
        }));
     }

    return (
    <div  className={styles.main_container}>
        <form  onSubmit={submitHandler} method="post" className={styles.containerFormSignup}>
                     <div className={styles.containerFormSignup_header}>
                        <legend> <h2>Create your account </h2> </legend>
                        <p>Already Have An Acount? <strong> <Link href="/login"> Log In </Link></strong> </p>
                     </div>
                     <div className={styles.containerFormSignup_body}>
                            <div className={styles.container_email} >
                                <label htmlFor="email">E-mail</label>
                                <input type="email" maxLength={20} name="email" id="email" onChange={getDataOnForm} required/>
                            </div>
                            <div className={styles.container_firstname}>
                                <label htmlFor="first-name">First name</label>
                                <input type="text" maxLength={20} name="first-name" id="first-name" onChange={getDataOnForm}  required/>
                            </div>
                            <div className={styles.container_lastName}>
                                <label htmlFor="last-name">Last Name</label>
                                <input type="text" maxLength={20} name="last-name" id="last-name" onChange={getDataOnForm}  required/>
                            </div>
                            <div className={styles.container_company}>
                                <label htmlFor="company">Company:</label>
                                <input type="text" maxLength={20} name="company" id="company" onChange={getDataOnForm}  required/>
                            </div>
                            <div className={styles.container_password}>
                                <label htmlFor="password">Password</label>
                                <input type="text" maxLength={20} name="password" id="password" onChange={getDataOnForm}  required/>
                            </div>
                            <div className={styles.container_password}>
                                <label htmlFor="confirm-password">Confirm Password</label>
                                <input type="text" maxLength={20} name="confirm-password" id="confirm-password" onChange={getDataOnForm}  required/>
                            </div>
                            <div className={styles.container_button}>
                                <button  type="submit">Create Account</button>
                            </div>
                </div>
        </form>
        {/* <div className={styles.container_second}>
                 SECOND 
        </div> */}
    </div>
    );
}
export default Signup;