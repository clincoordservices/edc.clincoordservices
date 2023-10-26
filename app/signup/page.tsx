"use client"
import React, { useState } from "react";
import Link from "next/link";
// import {RiErrorWarningLine} from "react-icons/Ri";
import safeParseFunctionSignup from "../utils/form_validation/signupValidation";
import styles from "./signup.module.css";
import { verifyDataType, verifyDataValue } from "../utils/functions/function";
import fetchWithParams from "../utils/fetchData/fetch";

const Signup = () => {
     const [formData, setFormData] = useState({first_name: '', last_name: '', company: '', email: '', password: ''});
     const [passwordAlertToggle, setPasswordAlertToggle] = useState(true);
     const [first_nameAlertToggle, setFirst_nameAlertToggle ] = useState(true);
     const [last_nameAlertToggle, setLast_nameAlertToggle] = useState(true);
     const [companyAlertToggle, setCompanyAlertToggle] = useState(true);
     const [emailAlertToggle, setEmailAlertToggle] = useState(true);

     const submitHandler = async (e: React.FormEvent<HTMLFormElement>) =>  {
         e.preventDefault();  

         const {first_name, last_name, company, email, password} = safeParseFunctionSignup(formData);
         const allFieldsValid = verifyDataValue(first_name,) || verifyDataValue(last_name) 
                                || verifyDataValue(company) || verifyDataValue(email) || verifyDataValue(password);

             if(allFieldsValid){
                 if(verifyDataValue(first_name) && verifyDataType(first_name)) 
                     setFirst_nameAlertToggle(false);
         
                 if(verifyDataValue(last_name) && verifyDataType(last_name)) 
                     setLast_nameAlertToggle(false);
         
                 if(verifyDataValue(email) && verifyDataType(email)) 
                     setEmailAlertToggle(false);
         
                 if(verifyDataValue(company) && verifyDataType(company)) 
                     setCompanyAlertToggle(false);
         
                 if(verifyDataValue(password) && verifyDataType(password)) 
                     setPasswordAlertToggle(false);   
             } 
    
            const response = await fetchWithParams("http://localhost:3000/api/signup", "POST", JSON.stringify({first_name, last_name, company, email, password}))
            const body = await response.json();
    

 
     } 

     const getDataOnForm = (e: React.FormEvent<HTMLInputElement>) => {
        const element = e.target as HTMLInputElement;

        setFormData((prevState) => ({
          ...prevState,
          [element.name]: element.value+"".trim()
        }));
     }

    return (
    <div  className={styles.mainContainer}>
        <form  onSubmit={submitHandler} method="post" className={styles.containerFormSignup}>
                     <div className={styles.containerFormSignupHeader}>
                        <legend> <h2>Create user account </h2> </legend>
                     </div>
                     <div className={styles.containerFormSignupBody}>
                            <div className={styles.container_firstname}>
                                <label htmlFor="first_name">First name</label>
                                <input type="text" maxLength={20} name="first_name" id="first_name" onChange={getDataOnForm}/>
                                <span className={styles.notificationLoginFormField}>
                                    <span className={`${first_nameAlertToggle ? "hideListElement" : "showListElement"}`}> 
                                        {/* <span><RiErrorWarningLine /> </span>  */}
                                        <span>Please enter a username or First-name</span> 
                                    </span> 
                                </span>
                            </div>
                            <div className={styles.container_lastName}>
                                <label htmlFor="last_name">Last Name</label>
                                <input type="text" maxLength={20} name="last_name" id="last_name" onChange={getDataOnForm}/>
                                <span className={styles.notificationLoginFormField}>
                                    <span className={`${last_nameAlertToggle ? "hideListElement" : "showListElement"}`}> 
                                        {/* <span><RiErrorWarningLine /> </span>  */}
                                        <span>Please enter a username Last Name</span> 
                                    </span> 
                                </span>
                            </div>
                            <div className={styles.container_email} >
                                <label htmlFor="email">E-mail</label>
                                <input type="email" maxLength={60} name="email" id="email" onChange={getDataOnForm}/>
                                <span className={styles.notificationLoginFormField}>
                                    <span className={`${emailAlertToggle ? "hideListElement" : "showListElement"}`}> 
                                        {/* <span><RiErrorWarningLine /> </span>  */}
                                        <span> Please enter a e-mail</span> 
                                    </span> 
                                </span>
                            </div>
                            <div className={styles.container_company}>
                                <label htmlFor="company">Company</label>
                                <input type="text" maxLength={25} name="company" id="company" onChange={getDataOnForm} />
                                <span className={styles.notificationLoginFormField}>
                                    <span className={`${companyAlertToggle ? "hideListElement" : "showListElement"}`}> 
                                        {/* <span><RiErrorWarningLine /> </span>  */}
                                        <span> Please enter the Company</span> 
                                    </span> 
                                </span>
                            </div>
                            <div className={styles.container_password}>
                                <label htmlFor="password">Password</label>
                                <input type="password" maxLength={60} name="password" id="password" onChange={getDataOnForm}/>
                                <span className={styles.notificationLoginFormField}>
                                    <span className={`${passwordAlertToggle ? "hideListElement" : "showListElement"}`}> 
                                        {/* <span><RiErrorWarningLine /> </span>  */}
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