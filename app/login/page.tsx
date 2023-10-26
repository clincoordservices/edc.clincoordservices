"use client"
import React, {useState} from "react";
import type { FieldValues  } from "react-hook-form";
import { useForm   } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import Image from "next/image";
import ImageLogo from "/public/clincoordLogo.png"
import styles from "./login.module.css";
import safeParseFunctionLogin from "../utils/form_validation/loginValidation";
import {verifyDataType, verifyDataValue} from "../utils/functions/function";
import {TLoginData, LoginSchema} from "../utils/form_validation/loginValidation"
// import fetchWithParams from "../utils/fetchData/fetch";

const Login = () => {
    const [wasSent, setWasSent] = useState(true);
    const {
            register,
            handleSubmit,
            formState: {errors, isSubmitting},
            reset,
            getValues   
    } = useForm<TLoginData>({
            resolver: zodResolver(LoginSchema)
    });
    
    
    const submitHandler = async (data: FieldValues)=> {
            
        await new Promise((resolve)=> setTimeout(resolve, 1000));
        reset();
    }
    const [toggleElements, setToggleElements] = useState(true);

    const handlerOnclickHideListElement = () => {
        setToggleElements(!toggleElements);
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
            <form onSubmit={handleSubmit(submitHandler)}  method="post" className={styles.containerFormLogin}>
                <div className={styles.containerFormLoginHeader}>
                        <legend> <h2>Welcome, please sign in</h2> </legend>
                </div>
                <div className={styles.containerFormLoginpBody}>
                    <div className={styles.notificationLoginFormField}>
                        <span >
                        {/* className={`${fieldAlertToggle ? "hideListElement" : "showListElement"}` */}
                            {/* <span><RiErrorWarningLine /> </span> */}
                            <span>Authentication failed check your credencials</span>             
                        </span>
                    </div>
                    <div className={styles.containerEmail}>
                        <label htmlFor="email">E-mail</label>
                        <input  
                                type="text" 
                                maxLength={255}
                                id="email" 
                                {...register("email")}
                            />
                        <span className={styles.notificationLoginFormField}>
                            <span className={errors.email ?"showListElement":"hideListElement"}> 
                                {/* <span><RiErrorWarningLine /> </span> */}
                                {errors.email && (<span>{`${errors.email.message}`}</span> )}
                            </span> 
                        </span>
                    </div>
                    <div className={styles.containerPassword}>
                        <label htmlFor="password">Password</label>
                        <input type="password" maxLength={60} name="password" id="password"/>
                        <span className={styles.notificationLoginFormField}>
                            <span className={errors.password ?"showListElement":"hideListElement"}>
                                 {/* <span><RiErrorWarningLine /> </span>  */}
                                 {errors.password && (<span>{`${errors.password.message}`}</span> )}
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
                    <li><Link href="/verifyaccount">Verify Account</Link></li>
                </ul>
            </div>              
        </form>
    </div>
    );
}
export default Login; 