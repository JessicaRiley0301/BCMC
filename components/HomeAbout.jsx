import React from 'react'
import Image from 'next/image';
import drwu from '../public/drwu1.png'
import latimes from '../public/latimes.png'
import mercury from '../public/mercury.png'
import messenger from '../public/themessenger.jpeg'
import qimag from '../public/qimagazine.png'
import { motion } from 'framer-motion';

const HomeAbout = () => {
  return (
    <div className="bg-bamboo w-screen h-full bg-cover bg-top bg-fixed">
      
    
    <div className="relative p-4 md:p-6 mx-auto ">
      <div className="items-center flex flex-wrap md:p-4">
      <div className="w-full md:w-5/12 ml-auto mr-auto px-8 md:pl-24 md:p-4">
          <Image alt="..." className="max-w-full rounded-lg shadow-lg" src={drwu}/>
      </div>
          <div className="w-full md:w-7/12 ml-auto mr-auto px-8 md:px-32 py-4 md:p-4">
            <div className="md:pr-12">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1,
              transition: {
                duration: 2,
              } }}
              viewport={{ once: true }}
              >
              <div className="text-3xl text-black-500 font-extrabold">Dr. Baolin Wu, OMD., PhD., L.Ac.
              </div>
              </motion.div>
              <p className="block mt-1 text-lg  text-gray-500 pt-4">
              <span className="font-bold text-lg text-black">Founder,
              </span> of Beijing Medical Center, Serving 20 Years</p>
              <p className="block mt-1 text-lg  text-gray-500 ">
              <span className="font-bold text-lg  text-black">President,</span> American Academy of Traditional Chinese Medicine (AATCM)
              </p>
              <p className="block mt-1 text-lg text-gray-500 ">
              <span className="font-bold text-lg  text-black">Chairman,
              </span> California Alliance of Acupuncture Medicine (CAAM)
              </p>
              
              <p className=" text-black text-lg font-bold py-4 ">
                  Dr. Wu is a 7th Generation Lineage Chinese Medicine Doctor with 40 years 
                  of Clinical Experience in Santa Monica, CA.
              </p>
              <p className="text-center pt-4">
              <a
                  href="/about"
                  className="hover:bg-yellow-700 bg-yellow-500 text-white px-4 py-3  text-lg font-medium"
                  >
                  Meet Our Team
              </a>
              </p>
            </div>

                          
                       
                      
        </div>
        </div>

        </div> 



    
    </div>
  )
}

export default HomeAbout