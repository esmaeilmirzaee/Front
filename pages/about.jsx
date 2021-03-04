import Head from 'next/head';
const about = () => {
  return (
    <>
      <Head>
        <title>Esmaeil MIRZAEE | About me</title>
      </Head>
      <h1 className='mt-6 text-center text-indigo-700 font-bold text-4xl'>
        Resume
      </h1>
      <p className='mb-10 text-red-600 font-black text-center'>
        Dear all, I am actively looking for a job (remote, permanent).
      </p>
      <iframe
        id='resumePdf'
        src='https://esmaeilmirzaee.herokuapp.com/static/esmaeilmirzaee_resume.pdf'
        className='w-screen h-screen'
      ></iframe>
    </>
  );
};

export default about;
