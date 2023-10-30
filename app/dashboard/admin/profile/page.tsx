"use client"
import { useForm } from "react-hook-form";
import styles from "./adminprofile.module.css";

const AdminProfile = () => {
   const {
         register,
         handleSubmit,
         formState: {errors, isSubmitting},
         reset,
         getValues   
   } = useForm();

   const submitHandler = () => {

   }
     return (

      <div className={styles.mainContent}> 
            <h6>OVERVIEW</h6>
            <h4>Admin Profile</h4>

         <section>
            <div className={styles.leftSide}>
                     <h3>User Name</h3>
                     <h6>Role</h6>

                     <div>
                        <h5>Description</h5>
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quia consectetur, quo unde veniam at officiis fugiat assumenda sequi consequatur, beatae fuga minima iusto vitae hic. A ipsam quo architecto.</p>
                     </div>
            </div>

               <div className={styles.rightSide}>
                  <form  onSubmit={handleSubmit(submitHandler)} method="post">
                           <h4>Account Details</h4>
                     <div className={styles.contentForm}>
                        <div className={styles.first_name}>
                           <label>First Name</label>
                           <input />
                        </div>
                        <div  className={styles.last_name}>
                           <label>First Name</label>
                           <input />
                        </div>
                        <div  className={styles.adress}> 
                           <label>Address</label>
                           <input />
                        </div>
                        <div  className={styles.location}> 
                           <label>Location</label>
                           <input />
                        </div>
                        <div  className={styles.language}> 
                           <label>Language</label>
                           <input />
                        </div>
                        <div  className={styles.time_zone}> 
                           <label>Time zone</label>
                           <input />
                        </div>
                        <div  className={styles.description}> 
                           <label>Description</label>
                           <textarea></textarea>
                        </div>
                     </div>
                     <button 
                            disabled={isSubmitting} 
                            type="submit">
                                Update Account
                     </button>
               </form>
            </div>
         </section>
      </div> 
     );
}

export default AdminProfile;