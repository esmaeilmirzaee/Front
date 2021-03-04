import Navbar from './Navbar';
import Footer from './Footer';
const Layout = ({ children }) => {
  return (
    <div className=''>
      <div className=''>
        <Navbar />
      </div>
      <main className='min-h-screen'>{children}</main>
      <footer className='sticky mt-auto'>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
