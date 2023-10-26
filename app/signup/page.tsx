"use client"
import React, { useState } from "react";
import Link from "next/link";
// import {RiErrorWarningLine} from "react-icons/Ri";
import safeParseFunctionSignup from "../utils/form_validation/signupValidation";
import styles from "./signup.module.css";
import { verifyDataType, verifyDataValue } from "../utils/functions/function";
import fetchWithParams from "../utils/fetchData/fetch";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm   } from "react-hook-form";
import type { FieldValues  } from "react-hook-form";
import  {SignupSchema, SignupData} from "../utils/form_validation/signupValidation"

const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
        reset,
        getValues   
   } = useForm<SignupData>({
        resolver: zodResolver(SignupSchema)
   });
   const [wasSent, setWasSent] = useState(true);
   
   const submitHandler = async (data: FieldValues)=> {

       await new Promise((resolve)=> setTimeout(resolve, 1000));
       reset();
       setWasSent(prev=>!prev);
   }

    return (
    <div  className={styles.mainContainer}>
        <form  onSubmit={handleSubmit(submitHandler)} method="post" className={styles.containerFormSignup}>
                     <div className={styles.containerFormSignupHeader}>
                        <legend> <h2>Create user account </h2> </legend>
                     </div>
                     <div className={styles.containerFormSignupBody}>
                            <div className={styles.container_firstname}>
                                <label htmlFor="first_name">First name</label>
                                <input type="text" maxLength={20} name="first_name" id="first_name" />
                                <span className={styles.notificationLoginFormField}>
                                    <span className={errors.first_name ?"showListElement":"hideListElement"}> 
                                        {/* <span><RiErrorWarningLine /> </span>  */}
                                        {errors.first_name && (<span>{`${errors.first_name.message}`}</span> )}
                                    </span> 
                                </span>
                            </div>
                            <div className={styles.container_lastName}>
                                <label htmlFor="last_name">Last Name</label>
                                <input type="text" maxLength={20} name="last_name" id="last_name" />
                                <span className={styles.notificationLoginFormField}>
                                    <span className={errors.last_name ?"showListElement":"hideListElement"}> 
                                        {/* <span><RiErrorWarningLine /> </span>  */}
                                        {errors.last_name && (<span>{`${errors.last_name.message}`}</span> )}
                                    </span> 
                                </span>
                            </div>
                            <div className={styles.container_email} >
                                <label htmlFor="email">E-mail</label>
                                <input type="email" maxLength={60} name="email" id="email" />
                                <span className={styles.notificationLoginFormField}>
                                    <span className={errors.email ?"showListElement":"hideListElement"}> 
                                        {/* <span><RiErrorWarningLine /> </span>  */}
                                        {errors.email && (<span>{`${errors.email.message}`}</span> )}
                                    </span> 
                                </span>
                            </div>
                            <div className={styles.container_company}>
                                <label htmlFor="company">Company</label>
                                <input 
                                    type="text" 
                                    maxLength={20} 
                                    id="first_name" 
                                    {...register("company")}  
                                />
                                <span className={styles.notificationLoginFormField}>
                                    <span className={errors.company ?"showListElement":"hideListElement"}> 
                                        {/* <span><RiErrorWarningLine /> </span>  */}
                                        {errors.company && (<span>{`${errors.company.message}`}</span> )}
                                    </span> 
                                </span>
                            </div>
                            <div className={styles.container_password}>
                                <label htmlFor="password">Password</label>
                                <input type="password" maxLength={60} name="password" id="password" />
                                <span className={styles.notificationLoginFormField}>
                                    <span className={errors.password ?"showListElement":"hideListElement"}> 
                                        {/* <span><RiErrorWarningLine /> </span>  */}
                                        {errors.password && (<span>{`${errors.password.message}`}</span> )}
                                    </span> 
                                </span>
                            </div>
                            <div className={styles.containerButton}>
                                <button  type="submit">Create Account</button>
                            </div>
                </div>
        </form>
    </div>
    );
}
export default Signup;