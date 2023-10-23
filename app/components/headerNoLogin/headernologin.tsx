import Link from "next/link";
import ImageLogo from "/public/clincoordLogo.png";
import styles from "./headernologin.module.css";
import Image from "next/image";

const HeaderNoLogin = () => {

    return (
        <main className={styles.mainContent}>
            <header>
            <Link href="/">
            <h1>
                <Image
                    src={ImageLogo}
                    width={230}
                    height={80}
                    alt="ClinCoord EDC Logo"
                    style={{userSelect: "none"}}
                    />
            </h1>
            </Link>
            <span>
                <Link href="/login">Login</Link>
            </span>    
        </header>
        </main>
    );
}

export default HeaderNoLogin;