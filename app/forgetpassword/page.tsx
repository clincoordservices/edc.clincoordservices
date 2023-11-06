"use client"
import { useState } from "react";
import HeaderNoLogin from "../components/headerNoLogin/headernologin";
import styles from "./forgetpassword.module.css";
// import { RiErrorWarningLine } from "react-icons/Ri";
import { verifyDataType, verifyDataValue } from "../utils/functions/function";
import safeParseFunctionForgetPassWord from "../utils/form_validation/forgetpassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm   } from "react-hook-form";
import type { FieldValues  } from "react-hook-form";
import {ForgetPasswordData, ForgetPasswordSchema} from "../utils/form_validation/forgetpassword"

const ForgetPassword  = () => {
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
        reset,
        getValues   
   } = useForm<ForgetPasswordData>({
        resolver: zodResolver(ForgetPasswordSchema)
   });
   const [wasSent, setWasSent] = useState(true);
   
   const submitHandler = async (data: FieldValues)=> {
        

       await new Promise((resolve)=> setTimeout(resolve, 1000));
       setWasSent(prev=>!prev);
       reset();
   }
     
    return (
            <>
                <HeaderNoLogin />
                <main className={styles.main_Content}>
                <div className={`${wasSent? styles.hideEntiretElement :"showListElement"} ${styles.main_Content_HideMessage}`}>
                        <span><p>Verify your email adress</p></span>
                    </div>
                    <div className={styles.main_ContentForm}>
                        <form onSubmit={handleSubmit(submitHandler)}   
                            method="post" 
                            className={`${wasSent? "showListElement" :styles.hideEntiretElement } ${styles.containerFormLogin}` 
                            }>
                            <div className={styles.containerFormLoginHeader}>
                                    <legend> <h2>Forgot Password!</h2> </legend>
                            </div>
                            <div className={styles.containerFormLoginpBody}>
                            <span>Please enter your email to receive a password reset link</span><br/>
                                <div className={styles.containerEmail} >
                                    <label htmlFor="email">E-mail</label>
                                    <input 
                                        type="text" 
                                        id="subject" 
                                        {...register("email")}
                                        />
                                    <span className={styles.notificationLoginFormField}>
                                        <span > 
                                            {/* <span><RiErrorWarningLine /> </span>  */}
                                            {errors.email && (<span>{`${errors.email.message}`}</span> )}
                                        </span> 
                                    </span>
                                </div>
                                <div className={styles.containerButton}>
                                    <button 
                                        disabled={isSubmitting} 
                                        type="submit"
                                        >SEND
                                    </button>
                                </div>
                            </div>            
                        </form>
                    </div>
                </main>
            </> 
    );

}
export default ForgetPassword;