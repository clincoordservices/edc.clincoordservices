"use client"
import React, { useState } from "react";

const Signup = () => {
     const [formData, setFormData] = useState({});

     const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
         e.preventDefault();
         console.log(formData)
     } 

     const getDataOnForm = (e: React.FormEvent<HTMLInputElement>) => {
        const element = e.target as HTMLInputElement;
        setFormData((prevState) => ({
          ...prevState,
          [element.name]: element.value
        }));
     }

    return (
    <div>
        <form  onSubmit={submitHandler} method="post">
            <div>
                <label htmlFor="email">E-mail:</label>
                <input type="email" maxLength={20} name="email" id="email" onChange={getDataOnForm} required/>
            </div>
            <div>
                <label htmlFor="first-name">First name:</label>
                <input type="text" maxLength={20} name="first-name" id="first-name" onChange={getDataOnForm}  required/>
            </div>
            <div>
                <label htmlFor="last-name">Last Name:</label>
                <input type="text" maxLength={20} name="last-name" id="last-name" onChange={getDataOnForm}  required/>
            </div>
            <div>
                <label htmlFor="company">Company:</label>
                <input type="text" maxLength={20} name="company" id="company" onChange={getDataOnForm}  required/>
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="text" maxLength={20} name="password" id="password" onChange={getDataOnForm}  required/>
            </div>
            <div>
                <label htmlFor="confirm-password">Confirm Password:</label>
                <input type="text" maxLength={20} name="confirm-password" id="confirm-password" onChange={getDataOnForm}  required/>
            </div>
            <div>
                <button type="submit">save</button>
            </div>
        </form>
    </div>
    );
}
export default Signup;