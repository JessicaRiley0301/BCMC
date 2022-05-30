import React from 'react'
import Image from 'next/image';
import bamboo from '../public/bamboo.jpg'
import { motion } from 'framer-motion';


const HeaderHome = () => {
  return (

    <div class="bg-bamboo h-full w-screen bg-cover bg-top bg-fixed">
    <div class="pt-52 align-items-center pb-8 md:pb-24">
    <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={{
          hidden: {
            opacity: 0
          },
          visible: {
            opacity: 1,
            transition: {
              duration: 2
            }
          }
          
        }}>
    <p class="font-playfair text-gray-600 text-center font-bold text-2xl sm:text-2xl">Welcome to</p>
    <p class="font-playfair text-center font-extrabold text-5xl md:text-5xl p-6">Beijing Chinese Medical Center</p>
    <p class="text-center text-gray-600 text-2xl md:text-3xl p-4">Acupuncture. Herbs. Chiropractic. Massage.</p>
    </motion.div>
    <p class=" text-center p-4 space-x-2">
    <a
        href="tel:310-458-1488"
        className="hover:bg-red-900 bg-red-600 text-white px-4 py-3 text-lg font-medium"
        >
        Schedule Now
        </a>
        <a
        href="/store"
        className="hover:bg-yellow-900 bg-yellow-500 text-white px-4 py-3 text-lg font-medium"
        >
        Shop Books
        </a>
        </p>
        <p class="text-center p-2">
        <a
        href="/blog"
        className="hover:bg-lime-700 bg-lime-500 text-white px-4 py-3 text-lg font-medium"
        >
        Daily Health Blog
        </a>
        </p>

    </div>
</div>
  )
}

export default HeaderHome