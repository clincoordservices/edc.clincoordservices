"use client"
import Link from "next/link";
import { useRouter , usePathname  } from 'next/navigation'
import {AiFillCaretDown} from "react-icons/ai";
import styles from "./dashboard.module.css";
import { useEffect, useState } from "react";

const Dashboard = () => {
     const [userInfoToggle, setUserInfoToggle ] = useState<Boolean>(true);
     const [content, setContent] = useState("");
     const router = useRouter()
     const currentPath = usePathname();

     useEffect(() => {
     const url = window.location.pathname;
      const component = require("/login");
    setContent(component);

     }, []);

     const userInfoToggleHandler = () =>{
        setUserInfoToggle(prev=> !prev);
     }
    return (
    <>
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
                                    <span className={userInfoToggle? "hideListElement": "showListElement" }>
                                        <li><Link href="#">Profile</Link></li> 
                                        <li><Link href="#">User Account Number</Link></li> 
                                        <li><Link href="#">Logout</Link></li> 
                                    </span>    
                             </ul>
                        </span>
                     </div>
                </header>

                <div className={styles.mainBodyContent}>
                    <aside className={styles.asideContent}>
                        <Sidebar/>
                        </aside>
                    <main className={styles.bodyContent}>
                        <div id="content">
                           { content}
                        </div>
                    </main>
                </div>
            </div>
        </main>
    </>);
}
export default Dashboard;

const Sidebar = () => {
    const [items, setItems] = useState([
        {
          name: "Inbox",
          href: "/inbox",
        },
        {
          name: "Sent",
          href: "/sent",
        },
        {
          name: "Drafts",
          href: "/drafts",
        },
        {
          name: "Spam",
          href: "/spam",
        },
        {
          name: "Trash",
          href: "/trash",
        },
      ]);
    
      return (
        <ul>
          {items.map((item) => (
            <li key={item.name}>
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      );
  };
  