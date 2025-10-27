import React from 'react';
import { motion, transform } from 'motion/react';
import { InView } from 'react-intersection-observer';
import { animate } from 'motion';
import { SiTransmission } from 'react-icons/si';

const CompanyScroll = () => {
  const companies = [
    'W3Schools',
    'Zeus Learning',
    'ResillenceSoft',
    'DigitalSakha',
    'Intellipaat ',
    'IBM',
    'Swayam',
    'NPTEL',
  ];
  const companyList = [...companies, ...companies]; //For doubling list
  const scrollVariantA = {
    animate: {
      x: [0, -2000],
      transition: {
        x: { repeat: Infinity,
            repeatType:"loop",
            duration:15,
            ease:"linear"

         },
      },
    },
  };
  const scrollVariantB = {
    animate: {
      x: [ -2000,0],
      transition: {
        x: { repeat: Infinity,
            repeatType:"loop",
            duration:15,
            ease:"linear"

         },
      },
    },
  };
  return (
    <div className='text-white py-16 '>
      <div className='container mx-auto text-center'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-16 md:mb-12'>
          Companies I used For Learning
        </h2>
        <div className='overflow-hidden relative w-full mb-10'>
          <motion.div variants={scrollVariantA}
          animate="animate"
          className='whitespace-nowrap space-x-10'>
            {companyList.map((company, index) => (
              <div
                key={index}
                className='text-sm md:text-lg bg-gray-800 px-6 py-3 rounded-full inline-block'>
                {company}
              </div>
            ))}
          </motion.div>
        </div>
        <div className='overflow-hidden relative w-full mt-5'>
          <motion.div variants={scrollVariantB} animate="animate"
          className='whitespace-nowrap space-x-10'>
            {companyList.map((company, index) => (
              <div
                key={index}
                className=' text-sm md:text-lg bg-gray-800 px-6 py-3 rounded-full inline-block'>
                {company}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CompanyScroll;
