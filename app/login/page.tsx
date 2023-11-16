"use client"
import React, {useState} from "react";
import type { FieldValues  } from "react-hook-form";
import { useForm   } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import Image from "next/image";
import ImageLogo from "/public/clincoordLogo.png"
import styles from "./login.module.css";
import { useRouter } from "next/navigation";
import {TLoginData, LoginSchema} from "../utils/form_validation/loginValidation"
import fetchWithParams from "../utils/fetchData/fetch";

const Login = () => {
    const router = useRouter();
    const [result_, setResult] = useState<boolean>(true)
    const [message_, setMessage] = useState("")
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

        const {email, password} = getValues();
        await new Promise((resolve)=> setTimeout(resolve, 1000));

        const response = await fetchWithParams('/api/login/', 'POST', JSON.stringify({email, password}));
        const res = await response.json()

        if(res.result) return  router.push("/dashboard/user");

        const {result, message} = res;

        if(!result && message){
            setMessage(message);
            setResult(result);
        }
        reset();
    }
    const [toggleElements, setToggleElements]  = useState(true);

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
                        <span className={`${!(errors.email && errors.password) ? "hideListElement" : "showListElement"} ${ !result_ ? "showListElement":"hideListElement"} `}>
                        {/* className={`${fieldAlertToggle ? "hideListElement" : "showListElement"}` */}
                            {/* <span><RiErrorWarningLine /> </span> */}
                            { (errors.email && errors.password) && <span>Authentication failed check your credencials</span>}
                            {(!result_ && !(errors.email && errors.password)) && message_}             
                        </span>
                    </div>
                    <div className={styles.containerEmail}>
                        <label htmlFor="email">E-mail</label>
                        <input  
                                type="text"
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
                        <input 
                            type="password"
                            id="password"
                            {...register("password")}
                            />
                        <span className={styles.notificationLoginFormField}>
                            <span className={errors.password ?"showListElement":"hideListElement"}>
                                 {/* <span><RiErrorWarningLine /> </span>  */}
                                 {errors.password && (<span>{`${errors.password.message}`}</span> )}
                            </span> 
                        </span>
                    </div>
                    <div className={styles.containerButton}>
                        <button 
                            disabled={isSubmitting} 
                            type="submit">
                                Sign in
                        </button>
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