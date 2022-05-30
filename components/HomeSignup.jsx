import React from 'react'
import { motion } from 'framer-motion'

const HomeSignup = () => {
  return (
    <div class="bg-bamboo w-screen bg-cover bg-fixed">
    <div class="bg-white px-12 py-24 mx-auto flex flex-wrap items-center justify-center">
    <div class="lg:w-3/5 lg:pr-0 pr-0 max-w-xl">
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1,
      transition: {
        duration: 2,
      } }}
      viewport={{ once: true }}
    >
        <h1 class="font-playfair title-font font-medium font-bold text-5xl font-extrabold text-black">Subscribe</h1>
        </motion.div>
        <p class="leading-relaxed mt-4 text-lg">Sign up for our monthly newsletter to get updates on classes, new books, and more.</p>
    </div>
    <div class="lg:w-2/6 xl:w-2/5 md:w-2/3 bg-bamboo p-8 flex flex-col lg:ml-auto w-full mt-10 lg:mt-0">
        <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
        <div class="relative mb-4">
        <label for="full-name" class="leading-7 text-sm text-gray-600">Full Name</label>
        <input type="text" id="full-name" name="full-name" class="w-full bg-white  border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" class="w-full bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <button class="text-white bg-lime-600 border-0 py-2 px-8 focus:outline-none hover:bg-lime-800  text-lg">Subscribe</button>
        <p class="text-xs text-gray-500 mt-3">We will not sell your information. We hate spam just as much as you!</p>
    </div>
    </div>
    </div>
  )
}

export default HomeSignup