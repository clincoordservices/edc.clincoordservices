import React from "react";
import styles from "./admin_userlist.module.css";
import { IUserData } from "@/app/utils/form_validation/adminAddUsers";

const UserList = ({ users }: { users: IUserData[] }) => {
    return (
      <ul className={styles.UserListContent}>
         <li>             
            <p>Full Name</p>
            <p>Email</p>
            <p>Institution</p>
            <p>Role</p> 
        </li>
        {users.map((user) => (
         
          <li key={user.user_email}>
            <p>{user.first_name + " " + user.last_name}</p>
            <p>{user.user_email}</p>
            <p>{user.user_institute}</p>
            <p>{user.user_role}</p>
            <button type="submit"> Edit</button>
            <button type="submit"> Delete</button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default UserList;