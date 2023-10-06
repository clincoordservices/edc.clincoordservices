import Link from 'next/link'
import Image from "next/image";
import imageLogo from '../../../public/logocc-edc.png';
import styles from './header-styles.module.css';
const Header = () => {

    return (
         <header className={styles.header}>
                <div className={styles.logoImage}>
                <Link href="/">
                    <Image 
                        width={100}
                        height={50} 
                        src={imageLogo} 
                        alt={"Logo Image of system"}  
                    />  
                </Link>            
                </div>
                <nav className={styles.navBar}>
                       <ul>
                          <li>
                              <div>
                                 <ul>
                                    <li><Link href="/LeadingPage">Login</Link></li>
                                    <li><Link href="/signup">Sigup</Link></li>
                                 </ul>
                              </div>
                          </li>
                       </ul>
             </nav>
         </header>
    );
}

export default Header;