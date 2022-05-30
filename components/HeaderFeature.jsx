import React from 'react'
import Image from 'next/image';
import latimes from '../public/latimes.png'
import mercury from '../public/mercury.png'
import messenger from '../public/themessenger.jpeg'
import qimag from '../public/qimagazine.png'
import royalgazette from '../public/royalgazette.png'
import cctv from '../public/cctv.png'
import phoenixtv from '../public/phoenixtv.png'
import Link from 'next/link';
import { motion } from 'framer-motion';



const HeaderFeature = () => {
  return (
    
    <div class="bg-white w-screen bg-cover bg-top bg-fixed my-8">
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1,
      transition: {
        duration: 2,
      } }}
      viewport={{ once: true }}
      >
    <div class="bg-white w-screen p-4">
    <div class="bg-white max-w-md mx-auto">


    <h1 class="font-playfair text-center text-3xl sm:text-4xl font-extrabold">As Seen In</h1>
    
    </div>
    </div>

    <div class="bg-white mx-auto max-w-7xl grid grid-cols-3 sm:grid-cols-6 gap-4 p-4 md:px-8">
    <div class="place-self-center">
    <Link href={'/post/los-angeles-times-article-1996'}>
    <Image class="" src={latimes} alt="latimes"/>
    </Link>
    </div>
    <div class="place-self-center">
    <Link href={'/post/Messenger-Article-2008'}>
    <Image class="" src={messenger} alt="messenger"/>
    </Link>
    </div>
    <div class="place-self-center">
    <Link href={'/post/royal-gazette-article'}>
    <Image class="" src={royalgazette} alt="royalgazette"/>
    </Link>
    </div>
    <div class="place-self-center">
    <Link href={'/post/cctv-interview-cupping'}>
    <Image class="" src={cctv} alt="cctv"/>
    </Link>
    </div>
    <div class="place-self-center">
    <Link href={'/post/phoenix-tv-interview'}>
    <Image class="" src={phoenixtv} alt="phoenixtv"/>
    </Link>
    </div>
    <div class="place-self-center">
    <Link href={'/post/Qi-Magazine-Part1'}>
    <Image class="" src={qimag} alt="qimag"/>
    </Link>
    </div>
      
    </div>
    </motion.div>
    </div>

  )
}

export default HeaderFeature