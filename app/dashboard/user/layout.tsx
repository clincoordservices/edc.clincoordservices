"use client"
import {useEffect, useState } from "react";
import Link from "next/link";
import {AiFillCaretDown} from "react-icons/ai";
import styles from "./dashboard.module.css";
import {useRouter} from "next/navigation";
import SidebarItems from "../../components/sidebardashboard/page";
import fetchWithParams from "@/app/utils/fetchData/fetch";
import User from "@/src/entities/User";


export default function RootLayout({children}:{children: React.ReactNode}) {
    const [userInfoToggle, setUserInfoToggle ] = useState<Boolean>(true);
    // const [userData, setUserData ] = useState<User>(await getUserData());
    const router = useRouter();
    
 
    // const getUserData = async() => {
    //     const response = await fetchWithParams('/api/me/', 'GET');
    //     const res = await response.json(); 
    //     return res;
    // }
    
    const userInfoToggleHandler = () =>{
        setUserInfoToggle(prev=> !prev);
     }
     const logoutHandler = async() =>{    
            try {
                const res = await fetchWithParams('/api/logout/', 'GET');
                const {ok} = await res.json();
                    ok && router.push('/login');
            } catch (error:any) {
                console.log(error.message);
            }
     }

  return (
    <html lang="en">
      <body>
      <main>
            <div className={styles.mainContent}>
                <header className={styles.headerContent}>
                     <h1>ClinCoord EDC</h1>

                     <div className={styles.headerContentUserInfo}>
                        <span> 
                             <ul>
                                <h3 onClick={userInfoToggleHandler}>
                                    <span>
                                       {userData && userData.first_name}
                                    </span>
                                    <span>
                                        <AiFillCaretDown/>
                                    </span>
                                </h3>
                                    <span className={`${userInfoToggle? "hideListElement": "showListElement"} ${styles.list_items} `}>
                                        <li className=""><Link href="#">Profile</Link></li> 
                                        <li><Link href="#">User Account Number</Link></li> 
                                        <li onClick={logoutHandler}><Link href="/">Logout</Link></li> 
                                    </span>    
                             </ul>
                        </span>
                     </div>
                </header>

                <div className={styles.mainBodyContent}>
                    <aside className={styles.asideContent}>
                        <SidebarItems />
                        </aside>
                    <main className={styles.bodyContent}>
                        <div id="content">
                        {children}
                        </div>
                    </main>
                </div>
            </div>
        </main>
        </body>
    </html>
  )
}