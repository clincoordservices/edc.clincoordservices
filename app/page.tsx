// import Image from 'next/image'
import styles from './page.module.css'
import Signup from '@/pages/signup/page'
import Login from '@/pages/login/page'
import LeadingPage from '@/pages/LeadingPage/page'


export default function Home() {

  return (
    <main className={styles.main}>
    <LeadingPage />
    </main>
  )
} 
