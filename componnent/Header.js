import Link from "next/link";
import styles from "../styles/header.module.css";
export default function Header() {
    return (
        <header className={styles.header}>

            <h1 >Web Dev</h1>

            <nav>
                <ul className={styles.ul}>
                    <Link className={styles.li} href="/">Home</Link>
                </ul >
            </nav >
        </header >
    )
}
