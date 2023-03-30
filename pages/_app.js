import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from '../componnent/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {



  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout;

  if (getLayout) {
    return <Component {...pageProps} />
  } else {
    return <Layout>
      <Component {...pageProps} />
    </Layout>
  }


}

export default MyApp
