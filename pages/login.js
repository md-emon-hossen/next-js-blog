import styles from "../styles/login and logout/login.module.css";

export default function login() {
    return (
        <div className={styles.loginWrper}>
            <div className={styles.login}>

                <h1>Login</h1>
                <input type="text" />
                <input type="text" />
                <br />
                <button>Login</button>
            </div>
        </div>
    )
}

login.getLayout = function getLayout(page) {
    return (
        { page }
    )
}