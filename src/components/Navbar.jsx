import React, { useState } from 'react';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { AiOutlineMenuFold } from 'react-icons/ai';
import { motion } from 'motion/react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const varients = {
    open: { clipPath: 'circle(1200px at 43px 43px)' },
    transition: {
      type: 'spring',
    },
    closed: {
      clipPath: 'circle(25px at 43px 37px)',
    },
  };
  const [menu, setMenu] = useState(false);
  const item = [
    { id: 1, text: 'About', to: 'about' },
    { id: 2, text: 'Work', to: 'work' },
    { id: 3, text: 'Contact', to: 'contact' },
  ];
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='container mx-auto hidden md:flex justify-between items-center py-6'>
        <div className='text-xl lg:text-2xl font-bold flex items-center gap-1 mx-2'>
          <span className='text-white'>IRON</span>
          <span className='text-purple-500'>MAN</span>
        </div>
        <div>
          <ul className='hidden md:flex items-center space-x-6 list-none lg:text-lg md:text-base text-white '>
            {item.map(({ id, text, to }) => (
              <li
                key={id}
                className='transition delay-100 ease-in hover:border-b-2 hover:text-purple-500  border-purple-400'>
                <Link to={to} smooth={true} duration={500} offset={-70}>
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <a className='md:text-base lg:text-lg bg-purple-500 hover:bg-purple-700 text-white px-4 py-2 rounded-lg'>
          Download CV
        </a>
      </motion.div>
      <div className='flex md:hidden justify-between '>
        <motion.div animate={menu ? 'open' : 'closed'}>
          <motion.div
            variants={varients}
            onClick={() => setMenu(prev => !prev)}
            className=' w-1/3 bg- text-white fixed z-10 h-full backdrop-blur-md   shadow-[7px_0_20px_rgba(0,0,0,0.35)]  '>
            <div className='px-7 py-6'>
              {menu ? (
                <AiOutlineMenuUnfold size={30} />
              ) : (
                <AiOutlineMenuFold size={30} />
              )}
            </div>
            {menu && (
              <div className='flex flex-col justify-center items-center '>
                <ul className='space-y-6 text-white text-md py-5 '>
                  {item.map(({ id, text, to }) => (
                    <li key={id} className='hover:border-b-2 font-semibold hover:text-purple-500 transition delay-100 border-purple-500 '>
                      <Link to={to} smooth={true} duration={500} offset={-70}>
                        {text}
                      </Link>
                    </li>
                  ))}
                </ul>
                <a
                  href=''
                  className='text-sm bg-purple-500 hover:bg-purple-700 text-white px-3 py-2 my-20 rounded-lg  '>
                  Download CV
                </a>
              </div>
            )}
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100, y: 100 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-xl font-bold items-center gap-2 py-6 px-4'>
          <span className='text-white'>IRON </span>
          <span className='text-purple-500'>MAN </span>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
