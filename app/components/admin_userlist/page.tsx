"use client";
import React from "react";
import styles from "./admin_userlist.module.css";
import { IUserData } from "@/app/utils/form_validation/adminAddUsers";

const UserList = ({ users }: { users: IUserData[] }) => {
    return (
      <table className={styles.UserListContent}>
         <thead>
         <tr>             
            <th>Full Name</th>
            <th>Email</th>
            <th>Institution</th>
            <th>Role</th>
            <th>Opc. </th>
          </tr> 
        </thead>
        <tbody>
        {users.map((user) => (
         
            <tr key={user.user_email}>
              <td>{user.first_name + " " + user.last_name}</td>
              <td>{user.user_email}</td>
              <td>{user.user_institute}</td>
              <td>{user.user_role}</td> 
              <div><button type="submit"> Edit</button><button type="submit"> Delete</button></div>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default UserList;