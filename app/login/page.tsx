import React from "react";
import styles from "./login.module.css"
import Link from "next/link";

const Login = () => {
    return (
        <div  className={styles.main_}>
        <div className={styles.first_} ></div>
        <form  method="post" className={styles.containerFormSignup}>
                <div className={styles.containerFormSignup_header}>
                        {/*  <IMAGE LOGO/> */}
                        <legend> <h2>Welcome, please sign in</h2> </legend>
                        {/* <p>Already Have An Acount? <strong> <Linkk href="/login"> Log In </Link></strong> </p> */}
                </div>
                     <div className={styles.containerFormSignup_body}>
                            <div className={styles.container_email} >
                                <label htmlFor="email">E-mail</label>
                                <input type="email" maxLength={20} name="email" id="email" required/>
                            </div>
                            <div className={styles.container_password}>
                                <label htmlFor="password">Password</label>
                                <input type="text" maxLength={20} name="password" id="password" required/>
                            </div>
                            </div>
                            <div className={styles.container_button}>
                                <button  type="submit">Sign in</button>
                            </div>
        </form>
    </div>
    );
}
export default Login; 