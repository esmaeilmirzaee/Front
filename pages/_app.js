import { useState } from 'react';
import '../styles/globals.css';

import SignIn from '../components/auth/SignIn';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  let [signIn, setSignIn] = useState(false);
  return (
    <div className=''>
      {signIn ? <SignIn setSignIn={setSignIn} /> : null}
      <Layout signIn={signIn} setSignIn={setSignIn}>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
