"use client"
import React, { useState } from "react";
import Link from "next/link";
import {RiErrorWarningLine} from "react-icons/Ri"
// import fetchWithParams from "../assets/fetchData/fetch";
import styles from "./signup.module.css";

const Signup = () => {
     const [formData, setFormData] = useState({});
     const [passwordAlertToggle, setPasswordAlertToggle] = useState();
     const [first_nameAlertToggle, setFirst_nameAlertToggle ] = useState();
     const [last_nameAlertToggle, setLast_nameAlertToggle] = useState();
     const [companyAlertToggle, setCompanyAlertToggle] = useState();
     const [emailAlertToggle, setEmailAlertToggle] = useState();

     const submitHandler = async (e: React.FormEvent<HTMLFormElement>) =>  {
         e.preventDefault();  
     } 

     const getDataOnForm = (e: React.FormEvent<HTMLInputElement>) => {
        const element = e.target as HTMLInputElement;

        setFormData((prevState) => ({
          ...prevState,
          [element.name]: element.value
        }));
     }

    return (
    <div  className={styles.mainContainer}>
        <form  onSubmit={submitHandler} method="post" className={styles.containerFormSignup}>
                     <div className={styles.containerFormSignupHeader}>
                        <legend> <h2>Create user account </h2> </legend>
                        <p>Already Have An Acount? <strong> <Link href="/login"> Log In </Link></strong> </p>
                     </div>
                     <div className={styles.containerFormSignupBody}>
                            <div className={styles.container_firstname}>
                                <label htmlFor="first-name">First name</label>
                                <input type="text" maxLength={20} name="first-name" id="first-name" onChange={getDataOnForm}/>
                                <span className={styles.notificationLoginFormField}>
                                    <span className={`${first_nameAlertToggle ? styles.hideListElement :styles.showListElement}`}> 
                                        <span><RiErrorWarningLine /></span> 
                                        <span>Please enter a username or First-name</span> 
                                    </span> 
                                </span>
                            </div>
                            <div className={styles.container_lastName}>
                                <label htmlFor="last-name">Last Name</label>
                                <input type="text" maxLength={20} name="last-name" id="last-name" onChange={getDataOnForm}/>
                                <span className={styles.notificationLoginFormField}>
                                    <span className={`${last_nameAlertToggle ? styles.hideListElement :styles.showListElement}`}> 
                                        <span><RiErrorWarningLine /></span> 
                                        <span>Please enter a username Last Name</span> 
                                    </span> 
                                </span>
                            </div>
                            <div className={styles.container_email} >
                                <label htmlFor="email">E-mail</label>
                                <input type="email" maxLength={20} name="email" id="email" onChange={getDataOnForm}/>
                                <span className={styles.notificationLoginFormField}>
                                    <span className={`${emailAlertToggle ? styles.hideListElement :styles.showListElement}`}> 
                                        <span><RiErrorWarningLine /></span> 
                                        <span> Please enter a e-mail</span> 
                                    </span> 
                                </span>
                            </div>
                            <div className={styles.container_company}>
                                <label htmlFor="company">Company</label>
                                <input type="text" maxLength={20} name="company" id="company" onChange={getDataOnForm} />
                                <span className={styles.notificationLoginFormField}>
                                    <span className={`${companyAlertToggle ? styles.hideListElement :styles.showListElement}`}> 
                                        <span><RiErrorWarningLine /></span> 
                                        <span> Please enter the Company</span> 
                                    </span> 
                                </span>
                            </div>
                            <div className={styles.container_password}>
                                <label htmlFor="password">Password</label>
                                <input type="text" maxLength={20} name="password" id="password" onChange={getDataOnForm}/>
                                <span className={styles.notificationLoginFormField}>
                                    <span className={`${passwordAlertToggle ? styles.hideListElement :styles.showListElement}`}> 
                                        <span><RiErrorWarningLine /></span> 
                                        <span> Please enter a Password</span> 
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