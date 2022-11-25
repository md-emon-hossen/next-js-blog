import Head from 'next/head';
import Link from 'next/link';


export default function Home() {
  return (
    <div>
      <Head>
        <title>hulu 2.0</title>
        <meta name="hulu web app" content="hulu 2.0" />
      </Head>

      <div className='textAlign'>
        <h1>Welcome to Hulu 2.0</h1>
        <p>This is a spacial applications</p>
      </div>

      <div>
        <Link className='goback' href="/blog">Blogs</Link>
        <Link className='goback' href="/createBlog">create Blog</Link>
      </div>

    </div>
  )
}


