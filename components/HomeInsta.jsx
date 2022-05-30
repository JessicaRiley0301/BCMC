import React from 'react'
import Image from 'next/image';
import instagram1 from '../public/instagram1.jpeg'
import instagram2 from '../public/instagram2.jpeg'
import instagram5 from '../public/instagram4.png'
import instagram4 from '../public/instagram3.jpeg'
import { motion } from 'framer-motion';

const HomeInsta = () => {
  return (
    <div className="bg-bamboo w-screen bg-cover bg-top bg-fixed">
    <div className=" ">
    <div>
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1,
      transition: {
        duration: 2,
      } }}
      viewport={{ once: true }}
    >
    <p className="font-playfair text-center font-bold text-4xl md:text-5xl pt-16 pb-8">Follow Us on Instagram</p>
     </motion.div>
        <a href="https://www.instagram.com/beijingchinesemedicalcenter/">
        <p className="text-blue-500 hover:underline text-center">@beijingchinesemedicalcenter</p>
        </a>
    </div>
        <section className="mx-auto max-w-7xl py-8 ">
    <ul role="list" className="grid grid-cols-4" >
    <li className="relative">
    <div className="block overflow-hidden w-full group aspect-w-10 aspect-h-10 ">
        <a href="https://www.instagram.com/beijingchinesemedicalcenter/">
    <Image src={instagram2} width="300" height="300" className=" object-cover pointer-events-none group-hover:opacity-75"/>
    </a>
    </div>
    </li>
    <li className="relative">
    <div className="block overflow-hidden w-full group aspect-w-10 aspect-h-10">
    <a href="https://www.instagram.com/beijingchinesemedicalcenter/">
        <Image src={instagram1} width="300" height="300" className="object-cover pointer-events-none group-hover:opacity-75"/>
    </a>
    </div>
    </li>
    <li className="relative">
    <div className="block overflow-hidden w-full group aspect-w-10 aspect-h-7">
    <a href="https://www.instagram.com/beijingchinesemedicalcenter/">
        <Image src={instagram5} width="300" height="300" className="object-cover pointer-events-none group-hover:opacity-75"/>
    </a>
    </div>
    </li>
    <li className="relative">
    <div className="block overflow-hidden w-full group aspect-w-10 aspect-h-7">
    <a href="https://www.instagram.com/beijingchinesemedicalcenter/">
        <Image src={instagram4} width="300" height="300" className="object-cover pointer-events-none group-hover:opacity-75"/>
    </a>
    </div>
    </li>
</ul>
</section>
</div>
</div>
  )
}

export default HomeInsta