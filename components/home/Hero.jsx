import { FaHeart } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='justify-center text-center'>
      <h1 className='text-4xl text-center font-black text-indigo-800'>
        Aspiring Full Stack Developer
      </h1>
      <p className='flex flex-row justify-center text-xl font-medium text-indigo-600 mt-5 '>
        I design and code beautifully simple things and{' '}
        <FaHeart className='mx-2 text-red-600' /> what I do!
      </p>
      <div className='flex pt-10 justify-center'>
        <img
          src='https://esmaeilmirzaee.herokuapp.com/static/img/my__avatar.svg'
          alt='My avatar'
        />
      </div>
      <div className='flex pb-5 justify-center'>
        <img
          src='https://esmaeilmirzaee.herokuapp.com/static/img/hero__mac.svg'
          alt='iMac'
        />
      </div>
      <div className='my-10 border-2 border-yellow-300 rounded-md shadow-lg'>
        <p className='text-xl pt-5 text-indigo-800 font-medium'>
          Hi. My name is Esmaeil MIRZAEE.
        </p>
        <p className='px-4 py-5 text-justify text-indigo-800 font-light'>
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
