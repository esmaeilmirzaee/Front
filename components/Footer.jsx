import Link from 'next/link';
import { SiMedium, SiUplabs, SiGithub, SiStackoverflow } from 'react-icons/si';
const Footer = () => {
  return (
    <div className='items-center text-center bg-yellow-50 pt-10 pb-16 mt-5'>
      <p className='justify-center items-center mt-5 font-black text-indigo-900 shadow-2xl'>
        Living, coding every day & leveling up all day long.
      </p>
      <div id='icons' className='flex mt-4 justify-center'>
        <a href='https://esmaeilmirzaee.medium.com/' className=''>
          <SiMedium className='mx-4' size='2em' />
        </a>
        <a href='https://uplabs.com/esmaeilmirzaee'>
          <SiUplabs className='mx-4' size='2em' />
        </a>
        <a href='https://github.com/esmaeilmirzaee'>
          <SiGithub className='mx-4' size='2em' />
        </a>
        <a href='https://stackoverflow.com/esmaeilmirzaee'>
          <SiStackoverflow className='mx-4' size='2em' />
        </a>
      </div>
      <p className='text-center text-red-500 pt-10 m-2'>
        The current page developed in <span className='font-bold'>NextJS</span>{' '}
        and <span className='font-bold'>TailwindCSS</span>.
      </p>
      <p>
        The front side of this blog is hosted on{' '}
        <span className='font-bold'>Netlify</span> and the backend side is
        hosted on <span className='font-bold'>Heroku</span>.
      </p>
      <style jsx>
        {`
          .footer {
            display: flex;
            justify-content: center;
            color: #333541;
            position: fix;
            bottom: 0;
            left: 0;
          }
        `}
      </style>
    </div>
  );
};

export default Footer;
