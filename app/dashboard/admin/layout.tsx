"use client"
import Link from "next/link";
import { useRouter , usePathname  } from 'next/navigation'
import {AiFillCaretDown} from "react-icons/ai";
import styles from "./dashboard.module.css";
import { useEffect, useState } from "react";
import SidebarItems from "../../components/sidebardashboard/page";

interface Item {
    name: string,
    href: string
 }
 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    const [userInfoToggle, setUserInfoToggle ] = useState<Boolean>(true);
    const router = useRouter()
    
    const userInfoToggleHandler = () =>{
        setUserInfoToggle(prev=> !prev);
     }
     const logoutHandler = () =>{
        router.push("/");
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
                                       {"Admin Name"}
                                    </span>
                                    <span>
                                        <AiFillCaretDown/>
                                    </span>
                                </h3>
                                    <span className={`${userInfoToggle? "hideListElement": "showListElement"} ${styles.list_items} `}>
                                        <li className=""><Link href="/dashboard/admin/profile">Profile</Link></li> 
                                        <li><Link href="#">User Account Number</Link></li> 
                                        <li onClick={logoutHandler}><Link href="#">Logout</Link></li> 
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