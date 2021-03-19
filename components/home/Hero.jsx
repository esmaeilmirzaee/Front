import { FaHeart } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='justify-center text-center'>
      <h1 className='text-4xl font-black text-center text-indigo-800'>
        Aspiring Full Stack Developer
      </h1>
      <div className='justify-center mt-5 text-xl font-medium sm:flex'>
        <p className='text-indigo-600 '>
          I design and code beautifully simple things and{' '}
          <div className='sm:mx-auto'>
            <FaHeart className='mx-auto text-rose-600 sm:mx-auto' />
          </div>
          <div className=''>what I do!</div>
        </p>
      </div>
      <div className='flex justify-center w-1/2 pt-2 mx-auto border-rose-600'>
        <img
          src='https://esmaeilmirzaee.herokuapp.com/static/img/my__avatar.svg'
          alt='My avatar'
        />
      </div>
      <div className='flex justify-center pb-1'>
        <img
          src='https://esmaeilmirzaee.herokuapp.com/static/img/hero__mac.svg'
          alt='iMac'
        />
      </div>
      <div className='my-2 border-2 border-yellow-300 rounded-md shadow-lg'>
        <p className='pt-5 text-2xl font-medium text-indigo-800'>
          Hi. This is Esmaeil MIRZAEE.
        </p>
        <p className='px-4 py-5 text-xl font-light text-justify text-indigo-800'>
          I started my journey in the field of computer and electrical
          engineering as a network engineer, which I continued the job title for
          five years. Then I continued my job as a Linux administrator for the
          next three years. During those years, I challenged every technology
          behind each device I used. I am curious enough and have an innovative
          mindset. So, I moved to the next epic in my life—I started to educate
          myself programming languages. Consequently, my journey initiated as a
          developer. I learned how to use HTML, CSS and JavaScript and then
          ReactJS. Next, I learned ExpressJS framework and Rust programming
          language to develop backend services.
        </p>
      </div>
    </div>
  );
};

export default Hero;
