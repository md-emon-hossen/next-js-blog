import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../../styles/Articals.module.css";

export default function index({ data }) {
    const router = useRouter();
    const [title, settitle] = useState(data.title);
    const [body, setbody] = useState(data.body);

    async function editSubmit(e, id) {

        e.preventDefault();
        const dataiebe = {
            title,
            body
        }
        const res = await fetch(`http://localhost:3000/api/blog/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dataiebe)

        });
        const resposnd = res.json();
        router.push("/blog");

    }


    return (
        <form onSubmit={(e) => editSubmit(e, data._id)} className={styles.ArticalsWer}>
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

export const getServerSideProps = async (ctx) => {
    const res = await fetch(`http://localhost:3000/api/blog/${ctx.params.id}`);
    const data = await res.json();

    return {
        props: {
            data
        }
    }
}
