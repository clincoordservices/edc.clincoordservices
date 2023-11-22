"use client"
import {useEffect, useState } from "react";
import Link from "next/link";
import {AiFillCaretDown} from "react-icons/ai";
import styles from "./dashboard.module.css";
import {useRouter} from "next/navigation";
import SidebarItems from "../../components/sidebardashboard/userSideBar/page";
import fetchWithParams from "@/app/utils/fetchData/fetch";
import User from "@/src/entities/User";


export default function RootLayout({children}:{children: React.ReactNode}) {
    const [userInfoToggle, setUserInfoToggle ] = useState<Boolean>(true);
    const [userData, setUserData ] = useState<User>();
    const [userToken, setUserToken ] = useState<string>();
    const router = useRouter();
    
    useEffect(()=>{
        try {
            (async()=>{
                const {user_, userToken_} = await getUserData()
                setUserData(user_);
                setUserToken(userToken_);
            })();
        } catch (error: any) {
            console.log(error.message);
            
        } 
    }, []);
    const getUserData = async() => {
        const response = await fetchWithParams('/api/me_user/', 'GET');
        const res = await response.json(); 
        return res;
    }
     
    const userInfoToggleHandler = () =>{
        setUserInfoToggle(prev=> !prev);
     }
     const logoutHandler = async() =>{    
            try {
                
                const res = await fetchWithParams('/api/logout/', 'GET');
                const {ok} = await res.json();
                ok && setInterval( async() =>{ 
                      router.push('/login') 
                    }, 2000);
            } catch (error:any) {
                console.log(error.message);
            }
     }

  return (
      <main>
            <div className={styles.mainContent}>
                <header className={styles.headerContent}>
                     <h1>ClinCoord EDC</h1>

                     <div className={styles.headerContentUserInfo}>
                        <span> 
                             <ul>
                                <h3 onClick={userInfoToggleHandler}>
                                    <span>
                                    {userData?.first_name? `${userData?.first_name} ${userData?.last_name}` : "Loanding..."  }
                                    </span>
                                    <span>
                                        <AiFillCaretDown/>
                                    </span>
                                </h3>
                                    <span className={`${userInfoToggle? "hideListElement": "showListElement"} ${styles.list_items} `}>
                                        <li className=""><Link href={`/dashboard/user/${userToken}`}>Profile</Link></li> 
                                        <li>{userData?.id}</li> 
                                        <li onClick={logoutHandler}><Link href="/">Logout</Link></li> 
                                    </span>    
                             </ul>
                        </span>
                     </div>
                </header>

                <div className={styles.mainBodyContent}>
                    <aside className={styles.asideContent}>
                        <SidebarItems  userToken= {userToken!} />
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