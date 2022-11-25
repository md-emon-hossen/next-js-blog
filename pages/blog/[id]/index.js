import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../../styles/Articals.module.css";

export default function Index({ data }) {

    const reouter = useRouter();
    async function handleClikdelete(id) {
        try {
            fetch('http://localhost:3000/api/blog/' + id, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(res => console.log(res))

            reouter.push("/blog");

        } catch (err) {
            console.log(err);
        }

    }

    async function handleClikedit(id) {
        reouter.push("/edit/" + id);
    }


    return (
        <div className={styles.ArticalsWer}>
            <h1>{data.title}</h1>
            <p>{data.body}</p>

            <div className="btnGroup">
                <button onClick={() => handleClikedit(data._id)} className="btn">Edit</button>
                <button onClick={() => handleClikdelete(data._id)} className="btn">Delete</button>
            </div>
            <div className="textAlign">
                <Link href='/blog'>Go Back</Link>
            </div>

        </div>
    )
}



export const getServerSideProps = async (context) => {
    const res = await fetch(`http://localhost:3000/api/blog/${context.params.id}`);
    const data = await res.json();

    return {
        props: {
            data
        }
    }
}


