"use client"
import React, {useState} from "react";
import Link from "next/link";
import styles from "./login.module.css";
import {RiErrorWarningLine} from "react-icons/Ri";
import {safeParseFunction, verifyDataType, verifyDataValue} from "../utils/form_validation/loginValidation";

const Login = () => {
    const [toggleElements, setToggleElements] = useState(false);
    const [formData, setFormData] = useState({password:"", email_username:""});
    const [nameAlertToggle, setnameAlertToggle] = useState(true);
    const [passwordAlertToggle, setPasswordlAlertToggle] = useState(true);
    const [fieldAlertToggle, setFieldAlertToggle] = useState(true);
     
    
    const handlerOnclickHideListElement = () => {
        setToggleElements(!toggleElements);
    }

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) =>  {
        e.preventDefault();    
        
        const {password, email_username} = safeParseFunction(formData);


        if(!verifyDataValue(password) && !verifyDataType(password)) 
            setPasswordlAlertToggle(false);

        if(!verifyDataValue(email_username) && !verifyDataType(email_username)) 
            setnameAlertToggle(false);

        if((!verifyDataValue(password) && !verifyDataType(password)) && 
            (!verifyDataValue(email_username) && !verifyDataType(email_username)))
             setFieldAlertToggle(false); 

            //  console.log(password, email_username)
    } 
    const getDataOnForm = (e: React.FormEvent<HTMLInputElement>) => {
        const element = e.target as HTMLInputElement;
        setFormData((prevState) => ({
          ...prevState,
          [element.name]: element.value
        }));
     }

    return (
        <div  className={styles.main_Content}>
            <div className={styles.firstContent} ></div>
            <form onSubmit={submitHandler}   method="post" className={styles.containerFormLogin}>
                <div className={styles.containerFormLoginHeader}>
                        <legend> <h2>Welcome, please sign in</h2> </legend>
                </div>
                <div className={styles.containerFormLoginpBody}>
                    <div className={styles.notificationLoginFormField}>
                        <span className={`${fieldAlertToggle ? styles.hideListElement :styles.showListElement}`}>
                            <span><RiErrorWarningLine /> </span>
                            <span>Authentication failed check your credencials</span>             
                        </span>
                    </div>
                    <div className={styles.containerEmail}>
                        <label htmlFor="email_username">Username or E-mail</label>
                        <input onChange={getDataOnForm} type="email_username" maxLength={30} name="email_username" id="email_username"/>
                        <span className={styles.notificationLoginFormField}>
                            <span className={`${nameAlertToggle ? styles.hideListElement :styles.showListElement}`}> 
                                <span><RiErrorWarningLine /> </span>
                                <span>Please enter a username or e-mail</span>
                            </span> 
                        </span>
                    </div>
                    <div className={styles.containerPassword}>
                        <label htmlFor="password">Password</label>
                        <input  onChange={getDataOnForm} type="password" maxLength={30} name="password" id="password"/>
                        <span className={styles.notificationLoginFormField}>
                            <span className={`${passwordAlertToggle ? styles.hideListElement :styles.showListElement}`}>
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
                <ul className={toggleElements ? styles.showListElement : styles.hideListElement}>
                    <li><Link href="#">Password Manager</Link></li>
                    <li><Link href="#">Contact Us</Link></li>
                </ul>
            </div>              
        </form>
    </div>
    );
}
export default Login; 