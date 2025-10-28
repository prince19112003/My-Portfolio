import { useState, useEffect, React } from 'react';
import avatar from '../assets/Hero2.png';
import { motion } from 'motion/react';
import { Link } from 'react-scroll';
import Lottie from 'lottie-react';
import avatar1 from '../assets/dreamingLying2.png';
import avatar2 from '../assets/dreamingLying3.png';
import avatar3 from '../assets/dreamingLying4.png';

// import { RiveComponent } from '@rive-app/react-canvas';
// import avatarRive from '../assets/avatarRive.riv';

const Hero = () => {
  // -------------image changing effect------

  const images = [avatar1, avatar2, avatar3];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, 4000); // change every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  // -------------------------------------------

  return (
    <div className='text-white py-10 border-red-500'>
      {/* <motion.img
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.5,
          duration: 0.5,
        }}
        className='mx-auto w-1/3 md:w-1/3 lg:w-1/6 '
        src={avatar}
      /> */}
      {/* ----------------------------------- */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.3,
        }}
        className='relative w-full h-60 pointer-events-none  '>
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            className={`absolute  inset-0 w-2/3 mb-2 mx-auto my-auto  lg:w-1/6 lg:mb-2 md:w-1/3 md:mb-2 sm:w-1/4  transition-opacity duration-1000 ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </motion.div>

      {/* -------------------------------------- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
        className='container mx-auto text-center'>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          className='text-3xl md:text-5xl lg:text-6xl flex flex-col gap-4 font-bold mb-4'>
          Your Story , Your Way
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.6,
            }}
            className='text-purple-500'>
            Design Your Story, Digitally
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.7,
          }}
          className='text-gray-400 text-sm md:text-lg mb-8'>
          Showacsing my Journey by creating a personal portfolio website
        </motion.p>
        <div className='flex justify-center space-x-4 mb-10'>
          <motion.button
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: 1,
            }}
            className='bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600  transition delay-75'>
            <Link to='contact' smooth={true} duration={500} offset={-70}>
              Hire Me
            </Link>
          </motion.button>
          <motion.button
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: 1,
            }}
            className='text-white border border-white px-6 py-3 rounded-lg  hover:border-purple-400 transition delay-75'>
            <Link to='about' smooth={true} duration={500} offset={-70}>
              My Story
            </Link>
          </motion.button>
        </div>
      </motion.div>
      {/* <div>
        {' '}
        <RiveComponent src={avatarRive} autoplay className='w-24 h-24' />
      </div> */}
    </div>
  );
};

export default Hero;
