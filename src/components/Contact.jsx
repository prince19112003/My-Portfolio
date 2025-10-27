import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa';

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <div id='contact'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12'>
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: -100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            delay: 0.3,
            duration: 0.5,
          }}
          className='text-4xl font-bold text-white'>
          Let's Discuss Your <span className='text-purple-500'>Project</span>
        </motion.h2>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: -100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            delay: 0.3,
            duration: 0.5,
          }}
          className='text-slate-400 mt-4 text-sm sm:text-md'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
          cumque quia.
        </motion.p>
      </div>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='space-y-6 '>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              delay: 0.2,
              duration: 0.5,
            }}
            className='flex item-center space-x-4'>
            <div className='bg-purple-500 p-4 rounded-full'>
              <FaPhone className='text-white w-6 h-6 rotate-90' />
            </div>
            <div>
              <p className='text-lg font-medium text-purple-500'>Call me</p>
              <p className='text-white'>+91 XXXXX XXXXX</p>
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              delay: 0.4,
              duration: 0.5,
            }}
            className='flex item-center space-x-4'>
            <div className='bg-purple-500 p-4 rounded-full'>
              <FaEnvelope className='text-white w-6 h-6' />
            </div>
            <div>
              <p className='text-lg font-medium text-purple-500'>Email</p>
              <p className='text-white'>abc999@mail.com</p>
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              delay: 0.6,
              duration: 0.5,
            }}
            className='flex item-center space-x-4'>
            <div className='bg-purple-500 p-4 rounded-full'>
              <FaMapMarkerAlt className='text-white w-6 h-6' />
            </div>
            <div>
              <p className='text-lg font-medium text-purple-500'>Address</p>
              <p className='text-white'>xyz,XXX,India</p>
            </div>
          </motion.div>
        </div>
        <motion.form
          action=''
          className='space-y-4 text-white'
          ref={ref}
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{
            delay: 0.8,
            duration: 0.5,
          }}>
          <div className='text-sm md:text-md grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <input
              type='text'
              placeholder='Full Name'
              className='border border-purple-500 bg-gray-900 p-4 rounded-md w-full'
            />
            <input
              type='email'
              placeholder='Your Email'
              className='border border-purple-500 bg-gray-900 p-4 rounded-md w-full'
            />
          </div>
          <div className='text-sm md:text-md grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <input
              type='text'
              placeholder='Phone Number'
              className='border border-purple-500 bg-gray-900 p-4 rounded-md w-full'
            />
            <input
              type='email'
              placeholder='Budget'
              className='border border-purple-500 bg-gray-900 p-4 rounded-md w-full'
            />
          </div>
          <textarea
            placeholder='Message'
            className='border border-purple-500 bg-gray-900 p-4 rounded-md w-full'></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type='Submit'
            className='bg-purple-500 px-4 py-3 md:px-6 text-sm md:text-md rounded-md hover:bg-purple-600 transition duration-200'>
            Submit Message
          </motion.button>
        </motion.form>
      </div>
      <motion.footer
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{
          delay: 1,
          duration: 0.5,
        }}
        className='mt-16 md:mt-24 flex justify-between items-center p-5 text-white border-t-2 border-purple-500 '>
        <p className='text-sm md:text-md font-semibold'>
          Right Reserved bla bla bla
        </p>
        <p className='text-sm md:text-md font-semibold'>IRON MAN</p>
        <div className='grid grid-cols-2 gap-2 md:flex justify-center space-x-4 text-white mt-4 border-white '>
          <a href='' className='hover:text-blue-500 '>
            <FaFacebook className='h-6 w-6' />
          </a>
          <a href='' className='hover:text-blue-500 '>
            <FaLinkedin className='h-6 w-6' />
          </a>
          <a
            href=''
            className='hover:text-black   rounded-full  hover:border-black hover:bg-white'>
            <FaGithub className='h-6 w-6' />
          </a>
          <a href='' className='hover:text-pink-500 '>
            <FaInstagram className='h-6 w-6' />
          </a>
        </div>
      </motion.footer>
    </div>
  );
};

export default Contact;
