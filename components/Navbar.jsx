import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <header className='flex bg-yellow-50 bg-opacity-75  justify-between'>
      <div className='ml-10'>
        <a href='/'>
          <Image src='/logo512.png' width={64} height={64} />
        </a>
        {/* <h5 style={{ visibility: 'invisible' }}>Esmaeil MIRZAEE</h5> */}
      </div>
      <nav className='flex flex-row mr-10 items-center'>
        <ul className='flex flex-row list-none items-center'>
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
        <a
          href='/signin'
          className='mr-1 bg-indigo-700 text-indigo-100 py-3 px-6 rounded transition ease-in-out duration-500 hover:bg-indigo-100 hover:text-indigo-700'
        >
          Sign In
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
