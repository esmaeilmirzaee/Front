import { GiPencilBrush } from 'react-icons/gi';
import { FaCode, FaInfinity, FaCloudversify } from 'react-icons/fa';
import {
  SiRust,
  SiCassandra,
  SiMongodb,
  SiNodeDotJs,
  SiDeno,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiPostgresql,
  SiRedux,
  SiNextDotJs,
  SiFigma,
  SiAdobeillustrator,
  SiAdobexd,
  SiAdobephotoshop,
  SiLinux,
  SiDocker,
  SiHeroku,
  SiNetlify,
  SiGitlab,
  SiGithub,
  SiPython,
  SiDjango,
} from 'react-icons/si';

const Features = () => {
  return (
    <div className=''>
      <div className='justify-center sm:block sm:my-3 md:flex'>
        {/* design */}
        <div className='justify-center w-11/12 mx-2 border-2 border-yellow-500 sm:my-10'>
          <div className='flex justify-center pt-5'>
            <GiPencilBrush size='8em' className='justify-center' />
          </div>
          <div className='pt-8 pb-5 text-3xl font-bold text-center text-indigo-800 shadow-sm'>
            Design
          </div>
          <p className='px-2 text-lg text-indigo-500'>
            To me the design of UI is a way to ponder about every aspect of the
            application I will develop.
          </p>
          <div className='icons'>
            <h5 className='pt-5 pb-4 text-xl font-semibold text-center text-indigo-800'>
              Tools
            </h5>
            <p className='text-indigo-500'></p>
            <div className='flex justify-center pb-5'>
              <SiFigma size='2em' className='px-1' />
              <SiAdobeillustrator size='2em' className='px-1' />
              <SiAdobexd size='2em' className='px-1' />
              <SiAdobephotoshop size='2em' className='px-1' />
            </div>
          </div>
        </div>

        {/* backend */}
        <div className='justify-center w-11/12 mx-2 border-2 border-yellow-500 sm:my-10'>
          <div className='flex justify-center pt-5'>
            <FaCode size='8em' />
          </div>
          <div className='pt-8 pb-5 text-3xl font-bold text-center text-indigo-800 shadow-sm'>
            Develop
          </div>
          <p className='px-2 text-lg text-indigo-500'>
            I love to breathe life into ideas & make them the next generation of
            applications in either browser or phone.
          </p>
          <div className='icons'>
            <h5 className='pt-5 pb-4 text-xl font-semibold text-center text-indigo-800'>
              Stack
            </h5>
            <p></p>
            <div className='pb-5'>
              <div className='flex justify-center mx-auto'>
                <SiRust size='2em' className='px-1' />
                <SiJavascript size='2em' className='px-1' />
                <SiNodeDotJs size='2em' className='px-1' />
                <SiPython size='2em' className='px-1' />
                <SiDjango size='2em' className='px-1' />
              </div>
              <div className='flex justify-center mx-auto'>
                <SiTailwindcss size='2em' className='px-1' />
                <SiReact size='2em' className='px-1' />
                <SiRedux size='2em' className='px-1' />
                <SiNextDotJs size='2em' className='px-1' />
              </div>
            </div>
          </div>
        </div>

        {/* devops */}
        <div className='justify-center w-11/12 mx-2 border-2 border-yellow-500 sm:my-10'>
          <div className='flex justify-center pt-5'>
            <FaCloudversify size='8em' />
          </div>
          <div className='pt-8 pb-5 text-3xl font-bold text-center text-indigo-800 shadow-sm'>
            DevOps
          </div>
          <p className='px-2 text-lg text-indigo-500'>
            Grabing a good understanding of how a developed application
            communicates and its an essentail requirements to develop an
            application.
          </p>
          <div className='icons'>
            <h5 className='pt-5 pb-4 text-xl font-semibold text-center text-indigo-800'>
              Application
            </h5>
            <p></p>
            <div className='pb-5'>
              <div className='flex justify-center'>
                <SiLinux size='2em' className='px-1' />
                <SiDocker size='2em' className='px-1' />
                <SiHeroku size='2em' className='px-1' />
                <SiNetlify size='2em' className='px-1' />
              </div>
              <div className='flex justify-center'>
                <SiGithub size='2em' className='px-1' />
                <SiGitlab size='2em' className='px-1' />
                <SiPostgresql size='2em' className='px-1' />
                <SiMongodb size='2em' className='px-1' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
