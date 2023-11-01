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
    const [url, setUrl ] = useState<String>("string");
    const router = useRouter()
    const currentPath = usePathname();

    const [item, setItem] = useState<Item[]>([
        {
          name: "Manage Users",
          href: `/dashboard/users/users" }`,
        },
        {
          name: "Settings",
          href: `/dashboard/admin/settings`,
        },
        {
          name: "User sessions",
          href: `/dashboard/admin/sessions`,
        },
        {
          name: "Item 2",
          href: "/Item2",
        },
        {
          name: "Item 3",
          href: "/Item3a",
        },
        {
          name: "Item 4",
          href: "/Item4",
        },
        {
          name: "Item 5",
          href: "/Item5",
        },
        {
          name: "Item 6",
          href: "/Item6",
        },
        {
          name: "Item 7",
          href: "/Item7",
        },
        {
          name: "Item 3",
          href: "/Item31",
        },
        {
          name: "Item 4",
          href: "/Item42",
        },
        {
          name: "Item 5",
          href: "/Item51",
        },
        {
          name: "Item 6",
          href: "/Item62",
        },
        {
          name: "Item 71",
          href: "/Item10",
        },
      ]);

    useEffect(()=> {
        setUrl("./")
    })
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