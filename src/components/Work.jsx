import React from 'react';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.webp';
import project3 from '../assets/project3.webp';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import CompanyScroll from './companyScroll';

const Work = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const projects = [
    {
      id: 1,
      title: 'QR Code Generator',
      desc: ' Instantly create customizable QR codes for links, text, or contact details.',
      image: project1,
      link: 'https://prince19112003.github.io/Qr-Code-Gen/',
    },
    {
      id: 2,
      title: 'Memory Card',
      desc: 'Challenge your focus and recall with a fun card‑matching puzzle.',
      image: project2,
      link: 'https://prince19112003.github.io/Memory-Card-Game/index.html',
    },
    {
      id: 3,
      title: 'Avatar Generator',
      desc: ' Design unique digital avatars to represent your identity or brand.',
      image: project3,
      link: 'https://prince19112003.github.io/Avatar-Generator-2/',
    },
  ];
  return (
    <div id='work' className='py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 '>
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className='text-3xl md:text-4xl text-white underline text-center font-bold mb-12'>
          My Work
        </motion.h2>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          className='mb-12 text-gray-400 text-sm md:text-md sm:text-justify text-center'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus
          eos magnam corrupti amet fuga minima nemo, optio nobis necessitatibus
          quia?
        </motion.p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {projects.map(project => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: project.id * 0.2, duration: 0.5 }}
              key={project.id}
              className='bg-gray-900 shadow-lg rounded-lg overflow-hidden '>
              <img src={project.image} className='w-full h-48 object-cover' />
              <div className='p-6 '>
                <h3 className='text-md md:text-xl text-white font-semibold mb-2'>
                  {project.title}
                </h3>
                <p className='text-slate-400 text-sm text-balance sm:text-md sm:text-justify mb-4'>
                  {project.desc}
                </p>
                {/* ----------------------wrap up */}
                <div className='flex justify-between '>
                  {' '}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='text-slate-400 border-2 rounded-lg border-purple-700 px-4 py-2 hover:bg-purple-700 hover:text-white transition text-sm sm:text-md  delay-75'>
                    Details
                  </motion.button>
                  {/* --------new btn-------- */}
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-purple-400 border-2 rounded-lg border-slate-400 px-4 py-2 hover:bg-slate-800 hover:text-white transition text-sm sm:text-md delay-75'>
                    Demo
                  </motion.a>
                  {/* -------------- */}
                  {/* ------------------------------ */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5, duration: 0.5 }}>
        <CompanyScroll />
      </motion.div>
    </div>
  );
};

export default Work;
