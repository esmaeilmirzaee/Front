import Head from 'next/head';

import Hero from '../comps/home/Hero';
import Features from '../comps/home/Features';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Esmaeil MIRZAEE</title>
      </Head>
      <div className='mx-24 my-5'>
        <Hero />
        <Features />
      </div>
    </>
  );
}
