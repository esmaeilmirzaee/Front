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
} from 'react-icons/si';

const Features = () => {
  return (
    <>
      <div className='flex justify-center'>
        {/* design */}
        <div className='w-96 mx-2 border-2 justify-center border-yellow-500'>
          <div className='flex justify-center pt-5'>
            <GiPencilBrush size='8em' className='justify-center' />
          </div>
          <div className='text-3xl pt-8 pb-5 font-bold text-indigo-800 shadow-sm text-center'>
            Design
          </div>
          <p className='px-2 text-indigo-500'>
            To me the design of UI is a way to ponder about every aspect of the
            application I will develop.
          </p>
          <div className='icons'>
            <h5 className='text-xl pt-5 pb-4 font-semibold text-indigo-800 text-center'>
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
        <div className='w-96 mx-2 border-2 justify-center border-yellow-500'>
          <div className='flex justify-center pt-5'>
            <FaCode size='8em' />
          </div>
          <div className='text-3xl pt-8 pb-5 font-bold text-indigo-800 shadow-sm text-center'>
            Develop
          </div>
          <p className='px-2 text-indigo-500'>
            I love to breathe life into ideas & make them the next generation of
            applications in either browser or phone.
          </p>
          <div className='icons'>
            <h5 className='text-xl pt-5 pb-4 font-semibold text-indigo-800 text-center'>
              Stack
            </h5>
            <p></p>
            <div className='flex justify-center pb-5'>
              <SiRust size='2em' className='px-1' />
              <SiCassandra size='2em' className='px-1' />
              <SiMongodb size='2em' className='px-1' />
              <SiNodeDotJs size='2em' className='px-1' />
              <SiTailwindcss size='2em' className='px-1' />
              <SiJavascript size='2em' className='px-1' />
              <SiReact size='2em' className='px-1' />
              <SiPostgresql size='2em' className='px-1' />
              <SiRedux size='2em' className='px-1' />
              <SiNextDotJs size='2em' className='px-1' />
            </div>
          </div>
        </div>

        {/* frontend */}
        <div className='w-96 mx-2 border-2 justify-center border-yellow-500'>
          <div className='flex justify-center pt-5'>
            <FaCloudversify size='8em' />
          </div>
          <div className='text-3xl pt-8 pb-5 font-bold text-indigo-800 shadow-sm text-center'>
            DevOps
          </div>
          <p className='px-2 text-indigo-500'>
            Grabing a good understanding of how a developed application
            communicates and its an essentail requirements to develop an
            application.
          </p>
          <div className='icons'>
            <h5 className='text-xl pt-5 pb-4 font-semibold text-indigo-800 text-center'>
              Application
            </h5>
            <p></p>
            <div className='flex justify-center pb-5'>
              <SiLinux size='2em' className='px-1' />
              <SiDocker size='2em' className='px-1' />
              <SiHeroku size='2em' className='px-1' />
              <SiNetlify size='2em' className='px-1' />
              <SiGithub size='2em' className='px-1' />
              <SiGitlab size='2em' className='px-1' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
