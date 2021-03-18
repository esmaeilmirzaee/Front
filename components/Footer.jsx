import { SiMedium, SiUplabs, SiGithub, SiStackoverflow } from 'react-icons/si';
const Footer = () => {
  return (
    <div className='items-center pt-10 pb-16 mt-5 text-center bg-yellow-50'>
      <p className='items-center justify-center mt-5 font-black text-indigo-900 shadow-2xl'>
        Living, coding every day & leveling up all day long.
      </p>
      <div id='icons' className='flex justify-center mt-4'>
        <a href='https://esmaeilmirzaee.medium.com/' target='_blank'>
          <SiMedium className='mx-4' size='2em' />
        </a>
        <a href='https://uplabs.com/esmaeilmirzaee' target='_blank'>
          <SiUplabs className='mx-4' size='2em' />
        </a>
        <a href='https://github.com/esmaeilmirzaee' target='_blank'>
          <SiGithub className='mx-4' size='2em' />
        </a>
        <a href='https://stackoverflow.com/esmaeilmirzaee' target='_blank'>
          <SiStackoverflow className='mx-4' size='2em' />
        </a>
      </div>
      <p className='pt-10 m-2 text-center text-red-500'>
        The current page developed in <span className='font-bold'>NextJS</span>{' '}
        and <span className='font-bold'>TailwindCSS</span>.
      </p>
      <p>
        The front side of this blog is hosted on{' '}
        <span className='font-bold'>Vercel</span> and the backend side is hosted
        on <span className='font-bold'>Heroku</span>.
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
