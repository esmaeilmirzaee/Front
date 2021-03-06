import Link from 'next/link';
import Image from 'next/image';

const Navbar = ({ signIn, setSignIn }) => {
  return (
    <header className='flex justify-between bg-opacity-75 bg-yellow-50'>
      <div className='ml-10'>
        <a href='/'>
          <Image src='/logo512.png' width={64} height={64} />
        </a>
        {/* <h5 style={{ visibility: 'invisible' }}>Esmaeil MIRZAEE</h5> */}
      </div>
      <nav className='flex flex-row items-center mr-10'>
        <ul className='flex flex-row items-center list-none'>
          <li className='mr-5 hover:text-indigo-600 focus:text-xl'>
            <a href='/about' className=''>
              About
            </a>
          </li>
          <li className='mr-5 hover:text-indigo-600 focus:text-xl'>
            <a href='/posts' className=''>
              Posts
            </a>
          </li>
        </ul>
        <a className='btn__primary' onClick={() => setSignIn(true)}>
          Sign In
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
