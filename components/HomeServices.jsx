import React from 'react'
import Image from 'next/image';
import acupuncturehome from '../public/acupuncturehome.jpg'
import mortarpestle from '../public/mortarpestle.jpg'
import chiropractorhome1 from '../public/chiropractorhome1.jpg'
import acumassagehome from '../public/acumassagehome.jpg'
import qigongservice from '../public/qigongservice.jpg'
import fengshui1 from '../public/fengshui1.jpg'
import { motion } from 'framer-motion';



const HomeServices = () => {
  return (
    <div class="bg-white w-screen bg-cover bg-fixed p-6 md:px-20">
    <div class="bg-white max-w-5xl mx-auto">
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1,
      transition: {
        duration: 2,
      } }}
      viewport={{ once: true }}
      >
    <p class="font-playfair text-center font-bold text-4xl sm:text-5xl pt-4 sm:pt-16">Natural Healing Services</p>
    <p class="text-slate-600 text-center font-bold text-2xl md:text-3xl p-2">Safe. Gentle. Effective.</p>
    </motion.div>
    <p class="bg-white text-lg font-light leading-relaxed sm:mt-6  text-slate-800 text-center p-4 md:px-16">
        Traditional Chinese Medicine has been practiced for over 5000 years. 
        Increase your health, wellness, longevity, and vitality with acupuncture, herbs, chiropractic, or 
        massage. TCM releases blockages to restore the natural flow of the meridians or energy channels within 
        the body, returning your body to a state of harmony and balance.
    </p>
    <p className="text-center p-6">
    <a
        href="tel:310-458-1488"
        className="hover:bg-red-900 bg-red-600 text-white px-4 py-3 text-lg font-medium"
        
        >
        Schedule Now
        </a>
    </p>

    </div>
            <motion.div 
              initial={{ opacity: 0, y: 50}}
              whileInView={{ opacity: 1,
                y: 0,
              transition: {
                duration: 1

              } }}
              viewport={{ once: true }}
              >
    <div class=" grid grid-cols-2 md:grid-cols-3 gap-4 m-4">
    <div class="bg-white ">
    <a href="/services">
    <Image class=" shadow-md " src={acupuncturehome} alt="acupuncturehome"/>
    <p class="font-playfair text-center font-bold text-md sm:text-2xl p-4 ">Acupuncture</p>
    </a> 
    </div>
    <div class="bg-white">
    <a href="/services">
    <Image class=" shadow-md " src={mortarpestle} alt="mortarpestle"/>
    <p class="font-playfair text-center font-bold text-md sm:text-2xl p-4">Herbology</p>
    </a>
    </div>
    <div class="bg-white">
    <a href="/services">
    <Image class=" shadow-md " src={chiropractorhome1} alt="chiropractorhome"/>

    <p class="font-playfair text-center font-bold text-md sm:text-2xl p-4">Chiropractic</p>
    </a>
    </div>
    <div class="bg-white">
    <a href="/services">
    <Image class=" shadow-md " src={acumassagehome} alt="acumassage" title="acumassage"/>
    <div class="font-playfair text-center font-bold text-md sm:text-2xl p-4">AcuMassage</div>
    </a>
    </div>
    <div class="bg-white">
    <a href="/classes">
    <Image class=" shadow-md " src={qigongservice} alt="qigongclass"/>
    <p class="font-playfair text-center font-bold text-md sm:text-2xl p-4">Qi Gong Classes</p>
    </a>
    </div>
    <div class="bg-white">
    <a href="/classes">
    <Image class=" shadow-md " src={fengshui1} alt="fengshui"/>
    <p class="font-playfair text-center font-bold text-md sm:text-2xl p-4">Taoist Feng Shui</p>
    </a>
    </div>
    </div>
    </motion.div>
</div>
  )
}

export default HomeServices