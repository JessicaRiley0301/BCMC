import React from 'react'
import { motion } from 'framer-motion'

const AboutUsClinic = () => {
  return (
    <div class="bg-bamboo w-screen h-full bg-cover bg-top bg-fixed">
            <motion.div 
              initial={{ opacity: 0, y: 50}}
              whileInView={{ opacity: 1,
                y: 0,
              transition: {
                duration: 1

              } }}
              viewport={{ once: true }}
              >
      <div class="mx-auto p-8 ">

        <div class="relative flex flex-col md:flex-row items-center md:shadow-xl md:h-72 mx-2">
        
          <div class="z-0 order-1 md:order-2 relative w-full md:w-2/5 h-80 md:h-full overflow-hidden ">
            <div class="absolute inset-0 w-full h-full object-fill object-center bg-blue-400 bg-opacity-30 bg-cover bg-bottom bg-clinic" ></div>
              <div class="md:hidden absolute inset-0 h-full p-6 pb-6 flex flex-col-reverse justify-start items-start bg-gradient-to-b from-transparent via-transparent to-gray-900">
                  <h3 class="font-playfair w-full font-bold text-2xl text-white leading-tight mb-2">Welcome to Beijing Medical Center</h3>
                  <h4 class="w-full text-xl text-gray-100 leading-tight">About Clinic</h4>
              </div>
              <svg class="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-white -ml-12" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <polygon points="50,0 100,0 50,100 0,100" />
              </svg>
            </div>
          
            <div class="z-10 order-2 md:order-1 w-full h-full md:w-3/5 flex items-center -mt-6 md:mt-0">
              <div class="p-8 md:pr-18 md:pl-14 md:py-12 mx-2 md:mx-0 h-full bg-white  shadow-xl md:shadow-none">
                  <h4 class=" hidden md:block text-lg text-gray-400">About Clinic</h4>
                  <h3 class="font-playfair hidden md:block font-bold text-2xl text-gray-700 py-2">Welcome to Beijing Medical Center</h3>
                  <p class="text-gray-600">Beijing Chinese Medical Center (BCMC) was established in the 1990’s by Dr. Baolin Wu OMD, LAc. in Santa Monica, California. Since then, the clinic has been serving and helping patients from all over the world. When Dr. Baolin Wu first started his practice, it was and still is today his hope and dream to better the world by helping one patient at a time.</p>
              
              </div>
            </div>
        
        </div>
      </div>
      </motion.div>
    </div>
  )
}

export default AboutUsClinic