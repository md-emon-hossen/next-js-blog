import Router from "next/router";
import { useState } from "react";
import styles from "../styles/Articals.module.css";


export default function createBlog() {
    const [title, settitle] = useState("");
    const [body, setbody] = useState("");
    const [rees, setrees] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        const data = {
            title,
            body
        }

        const res = await fetch("/api/blog", {
            method: "POST",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });

        const resposns = res.json();
        setrees(resposns);
        Router.push("/blog");
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} className={styles.ArticalsWer}>
            <input value={title} onChange={e => settitle(e.target.value)} required type='text' placeholder="Caption" />
            <br />
            <br />
            <input value={body} onChange={e => setbody(e.target.value)} required type='text' placeholder="Discriptions" />
            <br />
            <br />
            <button type="submit">Post</button>
        </form>
    )
}
