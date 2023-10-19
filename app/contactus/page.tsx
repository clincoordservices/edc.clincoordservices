"use client"
import React, { useState } from "react";
import Link from "next/link";
import {RiErrorWarningLine} from "react-icons/Ri";
import {BsFillTelephoneFill} from "react-icons/bs";
import {MdLocationOn} from "react-icons/md";
import {SiMinutemailer} from "react-icons/si";
import safeParseFunctionSignup from "../utils/form_validation/signupValidation";
import styles from "./contactus.module.css";
import { verifyDataType, verifyDataValue } from "../utils/functions/function";
import fetchWithParams from "../utils/fetchData/fetch";

const ContactUs = () => {
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

    } 

    const getDataOnForm = (e: React.FormEvent<HTMLInputElement>) => {
       const element = e.target as HTMLInputElement;

       setFormData((prevState) => ({
         ...prevState,
         [element.name]: element.value+"".trim()
       }));
    }
  
    return (
    <main className={styles.mainContent}> 
        <header>
                <span>
                    <Link href="/login">Login</Link>
                </span>    
        </header>
    <section className={styles.mainBody}>
        <article className={styles.contactInfo}>
            <div>
                <span><BsFillTelephoneFill/> </span>
                <span> Main Line: +1 (916) 844 2959</span> 
            </div>
            <div>
                <span><MdLocationOn/> </span>
                <span> <p>California, USA 3400 Cottage Way, STE G2 <br/>Sacramento, CA 95825</p></span> 
            </div>
            <div>
                <span><SiMinutemailer/> </span>
                <span> Send us E-mail</span>
            </div>
        </article>
        <form  onSubmit={submitHandler} method="post" className={styles.containerFormContactUs}>
            <div className={styles.containerFormContactUsHeader}>
                <legend> <h2>Get in touch </h2> </legend>
            </div>       
            <div className={styles.containerFormContactUsBody}>
                <div className={styles.container_firstname}>
                    <label htmlFor="first_name">First name</label>
                    <input type="text" maxLength={20} name="first_name" id="first_name" onChange={getDataOnForm}/>
                    <span className={styles.notificationContactUsFormField}>
                        <span className={`${first_nameAlertToggle ? "hideListElement" : "showListElement"}`}> 
                            <span><RiErrorWarningLine /> </span> 
                            <span>Please enter a First-name</span> 
                        </span> 
                    </span>
                </div>
                <div className={styles.container_lastName}>
                    <label htmlFor="last_name">Last Name</label>
                    <input type="text" maxLength={20} name="last_name" id="last_name" onChange={getDataOnForm}/>
                    <span className={styles.notificationContactUsFormField}>
                        <span className={`${last_nameAlertToggle ? "hideListElement" : "showListElement"}`}> 
                            <span><RiErrorWarningLine /> </span> 
                            <span>Please enter your Last Name</span> 
                        </span> 
                    </span>
                </div>
                <div className={styles.container_email} >
                    <label htmlFor="subject">Subject</label>
                    <input type="subject" maxLength={60} name="subject" id="subject" onChange={getDataOnForm}/>
                    <span className={styles.notificationContactUsFormField}>
                        <span className={`${emailAlertToggle ? "hideListElement" : "showListElement"}`}> 
                            <span><RiErrorWarningLine /> </span> 
                            <span> Please enter your Subject</span> 
                        </span> 
                    </span>
                </div>
                <div className={styles.container_company}>
                    <label htmlFor="message">Message</label>
                    <textarea rows={8} name="message" id="message">
                    </textarea>
                    <span className={styles.notificationContactUsFormField}>
                        <span className={`${companyAlertToggle ? "hideListElement" : "showListElement"}`}> 
                            <span><RiErrorWarningLine /> </span> 
                            <span> Please enter your Company</span> 
                        </span> 
                    </span>
                </div>
                <div className={styles.containerButton}>
                    <button  type="submit"> SEND </button>
                </div>
            </div>
        </form>
        </section>
    </main> 
    );

}
export default ContactUs;