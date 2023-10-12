"use client"
import React, {useState} from "react";
import styles from "./login.module.css"
import Link from "next/link";
import {RiErrorWarningLine} from "react-icons/Ri"

const Login = () => {
    const [toggleElements, setToggleElements] = useState(true);
    const [formData, setFormData] = useState({password:"", email_username:""});
     

    
    const handlerOnclickHideListElement = () => {
        setToggleElements(!toggleElements);
    }

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) =>  {
        e.preventDefault();    
        
        const {email_username, password } = formData;

        console.log(email_username , password )
    } 
    const getDataOnForm = (e: React.FormEvent<HTMLInputElement>) => {
        const element = e.target as HTMLInputElement;

        setFormData((prevState) => ({
          ...prevState,
          [element.name]: element.value
        }));
     }
    // const handlerOnclickLogin = () => {
    //     setToggleElements(!toggleElements);
    // }
    // const handlerOnclickHideFormElemenInputPassword = () => {
    //     setToggleElements(!toggleElements);
    // }
    // const handlerOnclickHideFormElemenInputEmail= () => {
    //     setToggleElements(!toggleElements);
    // }
    return (
        <div  className={styles.main_Content}>
            <div className={styles.firstContent} ></div>
            <form onSubmit={submitHandler}   method="post" className={styles.containerFormLogin}>
                <div className={styles.containerFormLoginHeader}>
                        <legend> <h2>Welcome, please sign in</h2> </legend>
                </div>
                <div className={styles.containerFormLoginpBody}>
                    <div className={styles.notificationLoginFormFieldTop}>
                        <span> <RiErrorWarningLine /> </span>
                        <span> Authentication failed check your credencials</span> 
                    </div>
                    <div className={styles.containerEmail} >
                        <label htmlFor="email_username">Username or E-mail</label>
                        <input onChange={getDataOnForm} type="email_username" maxLength={30} name="email_username" id="email_username" required/>
                        <span className={styles.notificationLoginFormField}>
                            <span> <RiErrorWarningLine /> </span> 
                            <span>Please enter a username or e-mail </span> 
                        </span>
                    </div>
                    <div className={styles.containerPassword}>
                        <label htmlFor="password">Password</label>
                        <input  onChange={getDataOnForm} type="password" maxLength={30} name="password" id="password" required/>
                        <span className={styles.notificationLoginFormField}> 
                            <span> <RiErrorWarningLine /> </span>
                            <span>Please enter a password </span> 
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
                    <li><Link href="#">Signin with Jasen Identity</Link></li>
                    <li><Link href="#">Contact Us</Link></li>
                </ul>
            </div>              
        </form>
    </div>
    );
}
export default Login; 