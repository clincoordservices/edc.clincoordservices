
import styles from "./admin_userlist.module.css";
// import { IUserData } from "@/app/utils/form_validation/adminAddUsers";

export type IUserData = {
  first_name: string,
  last_name: string,
  middle_name: string
  temp_pswd:string
  user_email:string
  user_institute: string
  user_role:string
}
const UserList = ({ users }: { users: IUserData[] }) => {
  return (
    <table className={styles.UserListContent}>
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Email</th>
          <th>Institution</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.user_email}>
            <td>{user.first_name + " " + user.last_name}</td>
            <td>{user.user_email}</td>
            <td>{user.user_institute}</td>
            <td>{user.user_role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;

  // <div><button type="submit"> Edit</button><button type="submit"> Delete</button></div>