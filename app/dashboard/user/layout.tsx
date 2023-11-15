"use client"
import Link from "next/link";
import {AiFillCaretDown} from "react-icons/ai";
import styles from "./dashboard.module.css";
import { useEffect, useState } from "react";
import SidebarItems from "../../components/sidebardashboard/page";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    const [userInfoToggle, setUserInfoToggle ] = useState<Boolean>(true);
    

    const userInfoToggleHandler = () =>{
        setUserInfoToggle(prev=> !prev);
     }
     const logoutHandler = () =>{
        setUserInfoToggle(prev=> !prev);
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
                                       {"User Name"}
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