import Head from 'next/head';

const posts = () => {
  return (
    <>
      <Head>
        <title>Esmaeil MIRZAEE | Posts</title>
      </Head>
      <div className=''>
        <div className=''>
          <div className='mt-10 text-4xl font-bold text-center shadow-xl text-warmGray-900 sm:mx-5'>
            <span className=''>
              This page is under construction. Please come back later.
            </span>
          </div>
          <div className='flex justify-center'>
            <img
              src='/under_construction.svg'
              alt='Under construction'
              className='w-100 sm:w-80'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default posts;
