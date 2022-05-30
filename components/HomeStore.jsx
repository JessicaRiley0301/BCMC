import React from 'react'
import Image from 'next/image';
import souloftaiji from '../public/souloftaiji.jpg'
import lightingeyedragon from '../public/lightingeyedragon.jpg'
import immortalsword from '../public/immortalsword.jpg'
import qigongbook from '../public/qigongbook.jpg'
import qigongjourney from '../public/qigongjourney.jpg'
import dogmother from '../public/WuDog-Fr-scaled.jpeg'
import { motion } from 'framer-motion';

const HomeStore = () => {
  return (
    <div className="bg-white w-screen bg-cover bg-fixed">
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1,
      transition: {
        duration: 2,
      } }}
      viewport={{ once: true }}
    >
    <p className="font-playfair text-center font-bold text-4xl sm:text-5xl pt-16">
    Shop Our Store
    </p>
    </motion.div>
    <p className=" text-gray-600 text-center font-bold text-2xl md:text-2xl p-2">Published Books. Herbs.</p>
    <p className="sm:mx-24 text-lg font-light leading-relaxed mt-6 mb-4 text-gray-800 text-center px-16">
        Each best-selling publication is an authentic source of ancient Chinese knowledge from a variety of the most important topics of Taoism.
        As the 17th generation Master of White Cloud Monastery's Dragon Gate Sect, he dives deep into 
        secrets never before shared with the public or the world until now. Explore our Shop to
        learn more about Chi Gong, Taoist Feng Shui, Tai Chi, and Martial Arts.
        
    </p>
    <p className="text-center p-2 pb-8">
    <a
        href="/store"
        className="hover:bg-yellow-900 bg-yellow-500 text-white px-4 py-3  text-lg font-medium"
        >
        Shop Books
        </a>
        </p>

        {/* <div className="grid grid-flow-col auto-cols-auto gap-4 p-4"> */}
        <div className="grid grid-cols-2 sm:grid-cols-6 gap-8 p-6 md:p-12">

        <div className="place-self-center">
            <a href="/store">
            <Image alt="gallery" className=""
                src={qigongbook}/>
            </a>
        </div>
        <div className="place-self-center">
        <a href="/store">
            <Image alt="gallery" className=""
                src={lightingeyedragon}/>
                </a>
        </div>
        <div className="place-self-center">
        <a href="/store">
            <Image alt="gallery" className=""
                src={immortalsword}/>
                </a>
        </div>
        <div className="place-self-center">
        <a href="/store">
            <Image alt="gallery" className=""
                src={souloftaiji}/>
                </a>
        </div>
        <div className="place-self-center">
        <a href="/store">
            <Image alt="gallery" className=""
                src={qigongjourney}/>
                </a>
        </div>
        <div className="place-self-center flex">
                <a href="/store">
            <Image alt="gallery" className=""
                src={dogmother}/>
                </a>
        </div>
    </div>



    <div>
        

    </div>


</div>

  )
}

export default HomeStore