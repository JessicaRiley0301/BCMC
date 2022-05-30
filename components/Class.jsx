import React from 'react'
import fengshui1 from '../public/fengshui1.jpeg'
import Image from 'next/image';
import flyer from '../public/Qi gong (1) (1).png'
import { motion } from 'framer-motion';

const Class = () => {
  return (
    <div class="bg-bamboo w-screen  bg-cover bg-top bg-fixed">
      <div class="w-full md:w-6/12 ml-auto mr-auto p-8">
      <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1,
      transition: {
        duration: 2,
      } }}
      viewport={{ once: true }}
      >
        <Image alt="flyer" class="max-w-full rounded-lg shadow-lg" src={flyer}/>
        </motion.div>
      </div>
    </div>
  )
}

export default Class
