import Link from "next/link";
import sytles from "../styles/Articals.module.css";
export default function articals({ data }) {

    return (
        <div>
            <h1 className='textAlign'> All Blogs</h1>
            {
                data.map((i, index) => {
                    return <Link href={`/blog/${i._id}`} passHref >
                        <div key={index} className={sytles.ArticalsWer}>
                            <h1>{i.title}</h1>
                            <p>{i.body}</p>
                        </div></Link>
                })
            }
        </div>
    )
}



export const getServerSideProps = async () => {
    const res = await fetch('http://localhost:3000/api/blog');
    const data = await res.json();

    return {
        props: {
            data
        }
    }
}

