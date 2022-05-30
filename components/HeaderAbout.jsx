import React from 'react'
import { motion } from 'framer-motion'

const HeaderAbout = () => {
  return (
    <div class="bg-bamboo w-screen h-screen bg-cover bg-top bg-fixed">
      
      <div class="pt-52 align-items-center">
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
      <h3 class="font-playfair p-4 font-extrabold text-black text-6xl md:text-6xl text-center">About Us</h3>
      <h5 class="font-extrabold text-gray-600 text-2xl md:text-3xl text-center">Meet Our Practitioners. Learn About TCM.</h5>
      </motion.div>
      <p class="text-center p-4 space-x-2">
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

export default HeaderAbout