import styles from './page.module.css'
import Login from './login/page'

export default function Home() {

  // (async () => {
  //   await testConnection();
  // })();
  return (
    <main className={styles.main}>
      <Login />
    </main>
  )
} 
 