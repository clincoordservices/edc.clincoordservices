import React from "react";
import styles from "./login.module.css"
import Link from "next/link";
import {RiErrorWarningLine} from "react-icons/Ri"

const Login = () => {
    return (
        <div  className={styles.main_Content}>
            <div className={styles.firstContent} ></div>
            <form  method="post" className={styles.containerFormLogin}>
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
                        <input type="email_username" maxLength={20} name="email_username" id="email_username" required/>
                        <span className={styles.notificationLoginFormField}>
                            <span> <RiErrorWarningLine /> </span> 
                            <span>Please enter a username or e-mail </span> 
                        </span>
                    </div>
                    <div className={styles.containerPassword}>
                        <label htmlFor="password">Password</label>
                        <input  type="text" maxLength={20} name="password" id="password" required/>
                        <span className={styles.notificationLoginFormField}> 
                            <span> <RiErrorWarningLine /> </span>
                            <span>Please enter a password </span> 
                        </span>
                    </div>
                    <div className={styles.containerButton}>
                        <button  type="submit">Sign in</button>
                    </div>
                </div>
            <div className={styles.opctionsBottomOfForm}> 
                <p>Password Manager and Addicional Options</p>
                <ul>
                    <li>Password Manager</li>
                    <li>Signin with Jasen Identity</li>
                    <li>Contact Us</li>
                </ul>
            </div>              
        </form>
    </div>
    );
}
export default Login; 