"use client"
import React, { useState } from "react";
import Link from "next/link";
// import {RiErrorWarningLine} from "react-icons/Ri";
import {BsFillTelephoneFill} from "react-icons/bs";
import {MdLocationOn} from "react-icons/md";
import {SiMinutemailer} from "react-icons/si";
import { verifyDataType, verifyDataValue } from "../utils/functions/function";
import safeParseFunctionContactUs from "../utils/form_validation/formValidation";
import styles from "./contactus.module.css";
import HeaderNoLogin from "../components/headerNoLogin/headernologin";
import fetchWithParams from "../utils/fetchData/fetch";
import {ContactUsSchema, ContactUsData} from "../utils/form_validation/formValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm   } from "react-hook-form";
import type { FieldValues  } from "react-hook-form";

const ContactUs = () => {
    const {
         register,
         handleSubmit,
         formState: {errors, isSubmitting},
         reset,
         getValues   
    } = useForm<ContactUsData>({
         resolver: zodResolver(ContactUsSchema)
    });
    const [wasSent, setWasSent] = useState(true);
    
    const submitHandler = async (data: FieldValues)=> {
        const {first_name, last_name, message, email_, subject} = getValues();

        const response = await fetchWithParams('/api/contactus/', 'POST', JSON.stringify({first_name, last_name, message, email_, subject}));
        const res = await response.json();
        await new Promise((resolve)=> setTimeout(resolve, 1000));
        reset();
        setWasSent(prev=>!prev);
    }

    return (
    <>
         <HeaderNoLogin />
        <main className={styles.mainContent}>     
            <section className={styles.mainBody}>
                <article className={styles.contactInfo}>
                        <div>
                            <span><BsFillTelephoneFill className={styles.iconContactInfo} /> </span>
                            <span> Main Line:<strong> +1 (916) 844 2959</strong></span> 
                        </div>
                        <div>
                            <span><SiMinutemailer className={styles.iconContactInfo}/> </span>
                            <span> <strong>admin@clincoordservices.com</strong></span>
                        </div>
                </article>
                <div style={{position: "relative"}}> 
                <div className={`${ wasSent ? "hideListElement" : styles.emailsentMessage}`}>
                            <p>Thank you for get in touch to us,an email will be sent to you as soon as possible.</p>
                </div>
                    <form  onSubmit={handleSubmit(submitHandler)} method="post" className={`${ wasSent? styles.containerFormContactUs : "hideListElement"}`}>
                        <div className={styles.containerFormContactUsHeader}>
                            <legend> <h2>Get in touch </h2> </legend>
                        </div>       
                        <div className={styles.containerFormContactUsBody}>
                            <div className={styles.container_firstname}>
                                <label htmlFor="first_name">First name</label>
                                <input 
                                    type="text" 
                                    maxLength={20} 
                                    id="first_name" 
                                    {...register("first_name")}
                                />
                                <span className={styles.notificationContactUsFormField}>
                                    <span className={errors.last_name ?"showListElement":"hideListElement"} > 
                                        {/* <span><RiErrorWarningLine /> </span>  */}
                                        {errors.first_name && (<span>{`${errors.first_name.message}`}</span> )}
                                    </span> 
                                </span>
                            </div>
                            <div className={styles.container_lastName}>
                                <label htmlFor="last_name">Last Name</label>
                                <input 
                                    type="text" 
                                    maxLength={20} 
                                    id="last_name" 
                                    {...register("last_name")}
                                    />
                                <span className={styles.notificationContactUsFormField}>
                                    <span className={errors.last_name ?"showListElement":"hideListElement"}>
                                        {/* <span><RiErrorWarningLine /> </span>  */}
                                        {errors.last_name && (<span> {`${errors.last_name.message}`}</span> )}
                                    </span> 
                                </span>
                            </div>
                            <div className={styles.containerEmail} >
                                <label htmlFor="email_">E-mail</label>
                                <input 
                                    type="text" 
                                    maxLength={255}
                                    id="subject" 
                                    {...register("email_")}
                                    />
                                <span className={styles.notificationContactUsFormField}>
                                    <span className={errors.last_name ?"showListElement":"hideListElement"}> 
                                        {/* <span><RiErrorWarningLine /> </span>  */}
                                        {errors.email_ && (<span>{`${errors.email_.message}`}</span> )}
                                    </span> 
                                </span>
                            </div>
                            <div className={styles.container_subject} >
                                <label htmlFor="subject">Subject</label>
                                <input 
                                    type="text" 
                                    id="subject" 
                                    {...register("subject")}
                                    />
                                <span className={styles.notificationContactUsFormField}>
                                    <span className={errors.last_name ?"showListElement":"hideListElement"}> 
                                        {/* <span><RiErrorWarningLine /> </span>  */}
                                        {errors.subject && (<span>{`${errors.subject.message}`}</span> )}
                                    </span> 
                                </span>
                            </div>
                            <div className={styles.container_message}>
                                <label htmlFor="message">Message</label>
                                <textarea 
                                    rows={6} 
                                    id="message"
                                    {...register("message")}
                                    >
                                </textarea>
                                <span className={styles.notificationContactUsFormField}>
                                    <span className={errors.last_name ?"showListElement":"hideListElement"}> 
                                        {/* <span><RiErrorWarningLine/> </span>  */}
                                        {errors.message && (<span>{`${errors.message.message}`}</span> )}
                                    </span> 
                                </span>
                            </div>
                            <div className={styles.containerButton}>
                                <button  
                                    type="submit"
                                     disabled={isSubmitting}
                                    > SEND 
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
         </main> 
    </>
    );
}
export default ContactUs;