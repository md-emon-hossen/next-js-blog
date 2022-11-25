import styles from "../styles/Layout.module.css";
import Footer from "./Footer";
import Header from "./Header";
export default function Layout({ children }) {
    return (
        <>
            <Header />
            <div className={styles.container}>

                <main className={styles.main}>
                    {children}
                </main>
            </div>
            <Footer />
        </>
    )
}
