// import aboutImg from '../assets/aboutImg.png';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import Lottie from 'lottie-react';
import aboutRobo from '../assets/aboutRobo.json';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <div id='about' className='text-white py-16'>
      <div className='container mx-auto px-4 text-center'>
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            delay: 0.3,
            duration: 0.5,
          }}
          className='text-3xl md:text-4xl font-bold mb-8 underline'>
          About Me{' '}
        </motion.h2>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            delay: 0.5,
            duration: 0.5,
          }}
          className='mb-12 text-gray-400 text-center text-sm  md:text-md'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae quia,
          deleniti quod ducimus.
        </motion.p>
        <div className='flex flex-col md:flex-row justify-center items-center sm:justify-around'>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              delay: 0.6,
              duration: 0.5,
            }}
            className='mb-8 md:mb-0 md:mr-8 flex justify-center'>
            {/* <img src={aboutImg} alt='' className='w-2/3 sm:w-1/2 md:w-10/12' /> */}
            <Lottie
              animationData={aboutRobo}
              loop={true}
              autoplay={true}
              className='w-2/3 h-72 sm:w-1/2 md:w-10/12 scale-150'
            />
          </motion.div>
          <motion.p
            ref={ref}
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              delay: 0.5,
              duration: 0.5,
            }}
            className='md:w-1/2 text-gray-400 px-4 md:px-0  text-sm md:text-xl text-center md:text-justify '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            suscipit tempore, tenetur culpa delectus ullam accusamus fugit,
            fugiat rem veritatis cumque exercitationem, illum iste incidunt
            natus voluptatem eligendi. Alias, odio.
          </motion.p>
        </div>

        <div className='flex flex-col sm:flex-row justify-around items-center mt-12 space-y-6 sm:space-y-10 text-center '>
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{
              delay: 0.7,
              duration: 0.3,
            }}>
            <h3 className='text-3xl md:text-8xl font-bold md:my-6 text-purple-500'>
              5+
            </h3>
            <motion.p
              ref={ref}
              initial={{ opacity: 0, y: 100 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.9,
                duration: 0.3,
              }}
              className='text-sm sm:text-base text-gray-300 '>
              Year of Experience
            </motion.p>
          </motion.div>{' '}
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{
              delay: 0.7,
              duration: 0.3,
            }}>
            <h3 className='text-3xl md:text-8xl font-bold text-purple-500 md:my-6'>
              50+
            </h3>
            <motion.p
              ref={ref}
              initial={{ opacity: 0, y: 100 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.9,
                duration: 0.3,
              }}
              className='text-sm sm:text-base text-gray-300 '>
              Overall Enemies
            </motion.p>
          </motion.div>{' '}
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{
              delay: 0.7,
              duration: 0.3,
            }}>
            <h3 className='text-3xl md:text-8xl font-bold text-purple-500 md:my-6'>
              90+
            </h3>
            <motion.p
              ref={ref}
              initial={{ opacity: 0, y: 100 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.9,
                duration: 0.3,
              }}
              className='text-sm sm:text-base text-gray-300 '>
              Rejection I got
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
