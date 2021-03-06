import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children, signIn, setSignIn }) => {
  return (
    <div className=''>
      <div className=''>
        <Navbar signIn={signIn} setSignIn={setSignIn} />
      </div>
      <main className='min-h-screen app_container'>{children}</main>
      <footer className='sticky mt-auto'>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
