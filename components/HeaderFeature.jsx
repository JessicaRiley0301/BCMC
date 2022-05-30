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
    
    <div className="bg-white w-screen bg-cover bg-top bg-fixed my-8">
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1,
      transition: {
        duration: 2,
      } }}
      viewport={{ once: true }}
      >
    <div className="bg-white w-screen p-4">
    <div className="bg-white max-w-md mx-auto">


    <h1 className="font-playfair text-center text-3xl sm:text-4xl font-extrabold">As Seen In</h1>
    
    </div>
    </div>

    <div className="bg-white mx-auto max-w-7xl grid grid-cols-3 sm:grid-cols-6 gap-4 p-4 md:px-8">
    <div className="place-self-center">
    <Link href={'/post/los-angeles-times-article-1996'}>
    <Image className="" src={latimes} alt="latimes"/>
    </Link>
    </div>
    <div className="place-self-center">
    <Link href={'/post/Messenger-Article-2008'}>
    <Image className="" src={messenger} alt="messenger"/>
    </Link>
    </div>
    <div className="place-self-center">
    <Link href={'/post/royal-gazette-article'}>
    <Image className="" src={royalgazette} alt="royalgazette"/>
    </Link>
    </div>
    <div className="place-self-center">
    <Link href={'/post/cctv-interview-cupping'}>
    <Image className="" src={cctv} alt="cctv"/>
    </Link>
    </div>
    <div className="place-self-center">
    <Link href={'/post/phoenix-tv-interview'}>
    <Image className="" src={phoenixtv} alt="phoenixtv"/>
    </Link>
    </div>
    <div className="place-self-center">
    <Link href={'/post/Qi-Magazine-Part1'}>
    <Image className="" src={qimag} alt="qimag"/>
    </Link>
    </div>
      
    </div>
    </motion.div>
    </div>

  )
}

export default HeaderFeature