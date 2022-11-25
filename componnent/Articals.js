import Link from "next/link";
import styles from "../styles/Articals.module.css";
export default function Articals({ items, index }) {
    return (
        <Link key={index} href="/artical/[id]" as={`/artical/${items.id}`}>
            <div className={styles.ArticalsWer}>
                <h2>{items.title}<b className={styles.b}> &rarr;</b></h2>
                <p>{items.body}</p>
            </div>
        </Link>
    )
}
