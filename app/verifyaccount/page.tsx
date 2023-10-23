"use client"

import { useState } from "react";
import HeaderNoLogin from "../components/headerNoLogin/headernologin";
import styles from "./verifyaccount.module.css"
import { verifyDataType, verifyDataValue } from "../utils/functions/function";
import safeParseFunctionForgetPassWord from "../utils/form_validation/forgetpassword";
// import { RiErrorWarningLine } from "react-icons/Ri";

const VerifyAccount  = () => {
    const [formData, setFormData] = useState({email:""});
    const [mailAlertToggle, setmailAlertToggle] = useState(true);

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) =>  {
        e.preventDefault();    
        
        const {email} = safeParseFunctionForgetPassWord(formData);
        const allFieldsValid = verifyDataValue(email) && verifyDataValue(email);

        if(allFieldsValid){
            if(verifyDataValue(email) && verifyDataType(email)) 
                setmailAlertToggle(false);
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
            <>
                <HeaderNoLogin />
                <main className={styles.main_Content}>
                    <form onSubmit={submitHandler}   method="post" className={styles.containerFormLogin}>
                        <div className={styles.containerFormLoginHeader}>
                                <legend> <h2>Verify your account</h2> </legend>
                        </div>
                        <div className={styles.containerFormLoginpBody}>
                            <span>Please enter your email adress below to receive instructions </span><br/>
                            <span>with mail for resetting your password.</span><br/>
                            <div className={styles.containerEmail}>
                                <label htmlFor="email">E-mail</label>
                                <input onChange={getDataOnForm} type="email" maxLength={30} name="email" id="email"/>
                                <span className={styles.notificationLoginFormField}>
                                    <span className={`${mailAlertToggle ? "hideListElement" : "showListElement"}`}> 
                                        {/* <span><RiErrorWarningLine /> </span> */}
                                        <span>Please enter a e-mail</span>
                                    </span> 
                                </span>
                            </div>
                            <div className={styles.containerButton}>
                                <button type="submit">Submit</button>
                            </div>
                        </div>            
                    </form>
                </main>
            </>
  
    );

}
export default VerifyAccount;