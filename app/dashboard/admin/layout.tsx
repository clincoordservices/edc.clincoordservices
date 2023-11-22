"use client"
import Link from "next/link";
import { useRouter , usePathname  } from 'next/navigation'
import {AiFillCaretDown} from "react-icons/ai";
import styles from "./dashboard.module.css";
import { useEffect, useState } from "react";
import SidebarItems from "../../components/sidebardashboard/adminSideBar/page";
import fetchWithParams from "@/app/utils/fetchData/fetch";
import User from "@/src/entities/User";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    const [userInfoToggle, setUserInfoToggle ] = useState<Boolean>(true);
    const [adminData, setAdminData ] 
    = useState<User>({id: "343568482",
    first_name: 'Rodrigo',
    last_name: 'Lima',
    middle_name: 'JC',
    email: 'admin@admin.com',
    company: 'Example Inc',
    password: 'secretpassword',
    institution: 'Example University',
    project: 'Example Project',
    role: 'Developer',
    access_level: 'Admin',
    });

    const [adminToken, setAdminToken ] = useState();
    const router = useRouter()
    
    const userInfoToggleHandler = () =>{
        setUserInfoToggle(prev=> !prev);
     }

     useEffect(()=>{
        (async()=>{
            const {user_admin, adminToken_} = await getUserData();
            setAdminToken(adminToken_);
        })();
   }, []);
   const getUserData = async() => {
       const response = await fetchWithParams('/api/me_admin/', 'GET');
       const res = await response.json(); 
       return res;
   }
     const logoutHandler = async() =>{
        try {
            await fetchWithParams('/api/logout_admin/', 'GET');
            router.push("/login-admin");
        } catch (error:any) {
            console.log(error.message);
        }
        
     }


  return (
      <main>
            <div className={styles.mainContent}>
                <header className={styles.headerContent}>
                     <h1>CC Simplified IRT</h1>

                     <div className={styles.headerContentUserInfo}>
                        <span> 
                             <ul>
                                <h3 onClick={userInfoToggleHandler}>
                                    <span>
                                       {`${adminData?.first_name} ${adminData?.last_name}`}
                                    </span>
                                    <span>
                                        <AiFillCaretDown/>
                                    </span>
                                </h3>
                                    <span className={`${userInfoToggle? "hideListElement": "showListElement"} ${styles.list_items} `}>
                                        <li className=""><Link href={`/dashboard/admin/${adminToken}`}>Profile</Link></li> 
                                        <li>{`${adminData?.id}`}</li> 
                                        <li onClick={logoutHandler}><Link href="#">Logout</Link></li> 
                                    </span>    
                             </ul>
                        </span>
                     </div>
                </header>

                <div className={styles.mainBodyContent}>
                    <aside className={styles.asideContent}>
                        <SidebarItems  />
                        </aside>
                    <main className={styles.bodyContent}>
                        <div id="content">
                        {children}
                        </div>
                    </main>
                </div>
            </div>
        </main>
  )
}