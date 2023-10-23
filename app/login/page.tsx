"use client"
import React, {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import ImageLogo from "/public/clincoordLogo.png"
import styles from "./login.module.css";
import {RiErrorWarningLine} from "react-icons/Ri";
import safeParseFunctionLogin from "../utils/form_validation/loginValidation";
import { verifyDataType, verifyDataValue} from "../utils/functions/function";
import fetchWithParams from "../utils/fetchData/fetch";

const Login = () => {
    const [toggleElements, setToggleElements] = useState(true);
    const [formData, setFormData] = useState({password:"", email_username:""});
    const [nameAlertToggle, setnameAlertToggle] = useState(true);
    const [passwordAlertToggle, setPasswordlAlertToggle] = useState(true);
    const [fieldAlertToggle, setFieldAlertToggle] = useState(true);
     
    
    const handlerOnclickHideListElement = () => {
        setToggleElements(!toggleElements);
    }

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) =>  {
        e.preventDefault();    
        
        const {password, email_username} = safeParseFunctionLogin(formData);
        const allFieldsValid = verifyDataValue(password) && verifyDataValue(email_username);

        if(allFieldsValid){
            if(verifyDataValue(password) && verifyDataType(password)) 
                setPasswordlAlertToggle(false);

            if(verifyDataValue(email_username) && verifyDataType(email_username)) 
                setnameAlertToggle(false);

            if((verifyDataValue(password) && verifyDataType(password)) && 
                (verifyDataValue(email_username) && verifyDataType(email_username)))
                setFieldAlertToggle(false);
        } else {
                // const response = await fetchWithParams("http://localhost:3000/api/login", "POST", JSON.stringify({password, email_username}))
                // const body = await response.json();
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
        <div  className={styles.main_Content}>
            <div className={styles.firstContent} >
                <Image
                    src={ImageLogo}
                    width={250}
                    height={100}
                    
                    alt="ClinCoord EDC Logo"
                    style={{userSelect: "none"}}
                />
            </div>
            <form onSubmit={submitHandler}   method="post" className={styles.containerFormLogin}>
                <div className={styles.containerFormLoginHeader}>
                        <legend> <h2>Welcome, please sign in</h2> </legend>
                </div>
                <div className={styles.containerFormLoginpBody}>
                    <div className={styles.notificationLoginFormField}>
                        <span className={`${fieldAlertToggle ? "hideListElement" : "showListElement"}`}>
                            <span><RiErrorWarningLine /> </span>
                            <span>Authentication failed check your credencials</span>             
                        </span>
                    </div>
                    <div className={styles.containerEmail}>
                        <label htmlFor="email_username">E-mail</label>
                        <input onChange={getDataOnForm} type="email_username" maxLength={30} name="email_username" id="email_username"/>
                        <span className={styles.notificationLoginFormField}>
                            <span className={`${nameAlertToggle ? "hideListElement" : "showListElement"}`}> 
                                <span><RiErrorWarningLine /> </span>
                                <span>Please enter a username or e-mail</span>
                            </span> 
                        </span>
                    </div>
                    <div className={styles.containerPassword}>
                        <label htmlFor="password">Password</label>
                        <input  onChange={getDataOnForm} type="password" maxLength={30} name="password" id="password"/>
                        <span className={styles.notificationLoginFormField}>
                            <span className={`${passwordAlertToggle ? "hideListElement" : "showListElement"}`}>
                                 <span><RiErrorWarningLine /> </span> 
                                 <span>Please enter a password</span> 
                            </span> 
                        </span>
                    </div>
                    <div className={styles.containerButton}>
                        <button type="submit">Sign in</button>
                    </div>
                </div>
            <div className={styles.opctionsBottomOfForm}> 
                <p onClick={handlerOnclickHideListElement}>Password Manager and Addicional Options</p>
                <ul className={toggleElements ? "hideListElement" : "showListElement"}>
                    <li><Link href="/contactus">Contact Us</Link></li>
                    <li><Link href="/forgetpassword">Forgot Password</Link></li>
                    <li><Link href="/verifyaccount">Check if you have an account If you have an account</Link></li>
                </ul>
            </div>              
        </form>
    </div>
    );
}
export default Login; 