import React from 'react'
import Image from 'next/image';
import qigongbook from '../public/qigongbook.jpg'
import lightingeyedragon from '../public/lightingeyedragon.jpg'
import immortalsword from '../public/immortalsword.jpg'
import souloftaiji from '../public/souloftaiji.jpg'
import qigongjourney from '../public/qigongjourney.jpg'
import dogmother from '../public/WuDog-Fr-sm.jpeg'
import { motion } from 'framer-motion';

// const products = [
//     {
//         id: 1,
//         name: 'Basic Tee',
//         href: '#',
//         // imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
//         imageAlt: "Front of men's Basic Tee in black.",
//         price: '$35',
//         color: 'Black',
//         },
//         // More products...
//     ]

const StoreMain = () => {
  return (
    <div className="bg-bamboo w-screen bg-cover bg-fixed">

        
        <section className="relative pt-4 bg-blueGray-50 md:p-8">
        <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1,
      transition: {
        duration: 2,
      } }}
      viewport={{ once: true }}
      >
        <p className="font-playfair text-center font-bold text-5xl pb-8">Best-Selling Books</p>
        </motion.div>
        <div className="bg-white bg-opacity-80 p-2 items-center flex flex-wrap">
        <div className="w-1/2 md:w-4/12 ml-auto mr-auto px-4">
            
            <Image id="qigongbook" alt="..." className="max-w-full rounded-lg shadow-lg" src={qigongbook}/>
        </div>
        <div className="p-8 w-full md:w-8/12 ml-auto mr-auto px-4">
            <div className="md:pr-8">
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1,
                transition: {
                    duration: 2,
                } }}
                viewport={{ once: true }}
                >  
            <h1 className="text-gray-900 text-xl title-font font-medium mb-1">Qi Gong for Total Wellness: Increase Your Energy, Vitality, and Longevity with the Ancient 9 Palaces System from the White Cloud Monastery</h1>
            </motion.div>
            <h2 className="pb-4 text-xs title-font text-gray-500 tracking-widest">BY BAOLIN WU, JESSICA ECKSTEIN</h2>
                <a
                href="https://www.amazon.com/Gong-Total-Wellness-Longevity-Monastery/dp/0312262337/ref=sr_1_2?crid=3PDKKMJI7CWFW&keywords=qigong+baolin+wu&qid=1652075963&sprefix=qi+gong+baolin+wu%2Caps%2C142&sr=8-2"
                className="hover:bg-yellow-700 bg-yellow-500 text-white px-4 py-3 text-sm font-medium"
                >
                SHOP AMAZON
                </a>
                <p className="pt-4 text-sm leading-relaxed">
                Qi Gong for Total Wellness is a clear, illustrated guide to Qi Gong, the ancient self-healing art that combines movement, meditation, and visualization to boost energy and improve health. Author Baolin Wu specializes in Nine Palaces Solar Qi Gong which works with the energy of the sun, and trains practioners to expel toxins and intake healthy qi through the nine openings palaces of the body.

            This introduction to the concepts of Qi Gong and contains exercises and methods pertaining to each part of the body, with clear instructions how to accurately apply the methods of Solar Qi Gong to increase physical and mental health using this ancient art.
                    </p>



            </div>
        </div>
        </div>
        </section>

        
        <section className="relative pt-16 bg-blueGray-50 md:p-8">
        <div className="bg-white bg-opacity-80 p-2 items-center flex flex-wrap">
        <div className="w-1/2 md:w-4/12 ml-auto mr-auto px-4">
            <Image alt="..." className="max-w-full rounded-lg shadow-lg" src={lightingeyedragon}/>
        </div>
        <div className="p-8 w-full md:w-8/12 ml-auto mr-auto px-4">
            <div className="md:pr-8">
            <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1,
            transition: {
                duration: 2,
            } }}
            viewport={{ once: true }}
            >
            <h1 className="text-gray-900 text-xl title-font mb-1">Lighting the Eye of the Dragon: Inner Secrets of Taoist Feng Shui</h1>
            </motion.div>
            <h2 className="pb-4 text-xs title-font text-gray-500 tracking-widest">BY BAOLIN WU, MICHAEL MCBRIDE</h2>
            <a
            href="https://www.amazon.com/gp/product/B00F8H3TZS/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i1"
            className="hover:bg-yellow-700 bg-yellow-500 text-white px-4 py-3  text-sm font-medium"
            >
            SHOP AMAZON
            </a>
    <p className="pt-4 text-sm leading-relaxed">
    Today the art of Feng Shui, once shrouded in secrecy and superstition, is taking on new life as a powerful, practical method for enhancing one's career, health and personal growth. Unfortunately, these techniques, as taught in the U.S.A., tend to be filled with incomplete, incorrect and unnecessarily complex information. Now Dr. Baolin Wu, renowned Feng Shui practitioner and living master of the complete canon of Taoist arts, presents publicly, for the first time, the inner teachings of the White Cloud Monastery in Beijing, as passed to him from a 1,000-year-old oral tradition.
        </p>



            </div>
        </div>
        </div>
        </section>
        <section className="relative pt-4 bg-blueGray-50 md:p-8">
        <div className="bg-white bg-opacity-80 p-4 items-center flex flex-wrap">
        <div className="w-1/2 md:w-4/12 ml-auto mr-auto px-4">
            <Image alt="..." className="max-w-full rounded-lg shadow-lg" src={immortalsword}/>
        </div>
        <div className="p-8 w-full md:w-8/12 ml-auto mr-auto px-4">
            <div className="md:pr-8">
            <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1,
            transition: {
                duration: 2,
            } }}
            viewport={{ once: true }}
            >       
            <h1 className="text-gray-900 text-xl title-font font-medium mb-1">The Eight Immortals' Revolving Sword of Pure Yang</h1>
            </motion.div>
            <h2 className="pb-4 text-xs title-font text-gray-500 tracking-widest">BY BAOLIN WU, JESSICA ECKSTEIN</h2>
    <a
        href="https://www.amazon.com/gp/product/1931483191/ref=dbs_a_def_rwt_bibl_vppi_i3"
        className="hover:bg-yellow-700 bg-yellow-500 text-white px-4 py-3 text-sm font-medium"
        >
        SHOP AMAZON
        </a>
    <p className="pt-4 text-sm leading-relaxed">
    This is the story of Master Wu and the esoteric sword practice he learned at the White Cloud Monastery in Beijing. It opens this practice to the outside world for the first time, explaining its history, theory, cosmology, and practice in great detail. The Eight Immortals Revolving Sword goes back for seventeen generations, starting with Wang Chongyang, the founder of the Complete Reality school and martial arts champion of the Song dynasty, and actively continued through Qiu Chuji and other senior Daoist lineage holders.

Practicing sword to attain immortality is a profound Daoist method. Master Wu shares his insights and practice instructions as a way of self-cultivation, illuminating the power of the practice to drive away inauspicious energies, eliminate harmful incidents, and safeguard against ghosts. Able to harness good fortune, practice of this sword set enhances inner communication and creates an intimate connection with the universe. In traditional Chinese fashion, Master Wu guides the reader through the ins and outs of the history, folklore, and technique of this sword practice, focusing especially on the figures of the Eight Immortals and explaining their legends, practices, and feats in great detail. Along the way, he highlights the hidden jewels of training with insightful commentaries on various parables, thereby to bring out the essence of Dao. He succeeds masterfully at braiding together his unique training history and deep Daoist insights with treasured traditional stories, creating a thrilling account and setting a palpable example of Daoism best kept inner secrets as brought to life in actual experiences today.
        </p>



            </div>
        </div>
        </div>
        </section>

        <section className="relative pt-4 bg-blueGray-50 md:p-8">
        <div className="bg-white bg-opacity-80 p-8 items-center flex flex-wrap">
        <div className="w-1/2 md:w-4/12 ml-auto mr-auto px-4">
            <Image alt="..." className="max-w-full rounded-lg shadow-lg" src={souloftaiji}/>
        </div>
        <div className="p-8 w-full md:w-8/12 ml-auto mr-auto px-4">
            <div className="md:pr-8">
            <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1,
            transition: {
                duration: 2,
            } }}
            viewport={{ once: true }}
            >
            <h1 className="text-gray-900 text-xl title-font font-medium mb-1">The Soul of Taiji: Zhang Sanfeng-Wu Baolin Taijiquan</h1>
            </motion.div>
            <h2 className="pb-4 text-xs title-font text-gray-500 tracking-widest">BY BAOLIN WU, MICHAEL MCBRIDE</h2>
    <a
        href="https://www.amazon.com/Soul-Taiji-Sanfeng-Wu-Baolin-Taijiquan/dp/1931483434/ref=sr_1_4?qid=1652076102&refinements=p_27%3AWu+Baolin&s=books&sr=1-4&text=Wu+Baolin"
        className="hover:bg-yellow-700 bg-yellow-500 text-white px-4 py-3 text-sm font-medium"
        >
        SHOP AMAZON
        </a>
    <p className="pt-4 text-sm leading-relaxed">
    The Soul of Taiji introduces the original practice of taijiquan as taught by Zhang Sanfeng, the original creator, to the outside world for the first time, pristinely preserved and complete. It tells the story of Master Wu Baolin and how he came to learn this Daoist taijiquan from Master Du Xinling at the White Cloud Monastery in Beijing. The practice goes back seventeen generations, starting with Zhang Sanfeng, the founder of the Wudang branch of the Complete Reality School; it has since continued through Zhang Daishan and other senior lineage holders.

Daoist taijiquan adheres to roundness, the circular symbolizing movement and exercise, and the key to opening the mysterious life gate, onto to a better path, each day fulfilled and joyous. Zhang Sanfeng Taijiquan amongst all forms is unique, practicing in only one singular direction, following the rotation of the earth, the direction of the winds, the turning of the stars, and the shapes of the planets. The universe is vast and unknown, but according to Yijing, the universe itself is round. By observing and practicing Daoist taijiquan, the roundness of the universe is then integrated, the self its reflection, becoming one.
        </p>



            </div>
        </div>
        </div>
        </section>

        <section className="relative pt-4 bg-blueGray-50 md:p-8">
        <div className="bg-white bg-opacity-80 p-8 items-center flex flex-wrap">
        <div className="w-1/2 md:w-4/12 ml-auto mr-auto px-4">
            <Image alt="..." className="max-w-full rounded-lg shadow-lg" src={qigongjourney}/>
        </div>
        <div className="p-8 w-full md:w-8/12 ml-auto mr-auto px-4">
            <div className="md:pr-8">
            <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1,
            transition: {
                duration: 2,
            } }}
            viewport={{ once: true }}
            >
            <h1 className="text-gray-900 text-xl title-font font-medium mb-1">Qigong Journey: Nine-Five Maintenance of Qi</h1>
            </motion.div>
            <h2 className="pb-4 text-xs title-font text-gray-500 tracking-widest">BY BAOLIN WU, JESSICA ECKSTEIN</h2>
    <a
        href="https://www.amazon.com/gp/product/1931483477/ref=dbs_a_def_rwt_bibl_vppi_i2"
        className="hover:bg-yellow-700 bg-yellow-500 text-white px-4 py-3 text-sm font-medium"
        >
        SHOP AMAZON
        </a>
    <p className="pt-4 text-sm leading-relaxed">
    Qigong Journey brings students of Asian culture, Daoist philosophy, and the mind/body wellness connection directly into the mind of a master. Through the unparalleled knowledge and openness of Dr. Baolin Wu, take a journey through the many layers of the Daoist qigong experience. In this expansive volume, filled with personal anecdotes of life in the White Cloud Monastery, lies an in-depth exploration of the holistic and lyrical Daoist worldview, a shamanic experience both pragmatic and poetic. Discover the connection between the history and traditions of ancient understanding and the daily life we all lead today. The book is a practical manual detailing a complete, eight hundred year old protective qigong practice from the founder of the White Cloud Monastery itself, preserved in silence by the members of the White Cloud Monastery community until today. With painstaking, step-by-step instructions and beautiful illustrations by Oliver Benson, our beloved Qi Gong for Total Wellness artist, the goal of this book is to present the next level of Nine Palaces Daoist Qigong. Using a guided series of breath, visualization and internal isometric strengthening exercises, it is a life-changing physical training, focused on securing one’s body and consciousness in the midst of the very real health challenges, hardships and volatility of today’s world.
        </p>



            </div>
        </div>
        </div>
        </section>

        <section className="relative pt-4 bg-blueGray-50 md:p-8">
        <div className="bg-white bg-opacity-80 p-8 items-center flex flex-wrap">
        <div className="w-1/2 md:w-2/12 ml-auto mr-auto px-2">
            <Image alt="dogmother" className="rounded-lg shadow-lg" src={dogmother}/>
        </div>
        <div className="p-8 w-full md:w-8/12 ml-auto mr-auto px-4">
            <div className="md:pr-8">
            <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1,
            transition: {
                duration: 2,
            } }}
            viewport={{ once: true }}
            >
            <h1 className="text-gray-900 text-xl title-font font-medium mb-1">Dog Mother: World Culture and Dog Qigong</h1>
            </motion.div>
            <h2 className="pb-4 text-xs title-font text-gray-500 tracking-widest">BY BAOLIN WU, BRENT CHRISTOPHER WULF</h2>
    <a
        href="https://threepinespress.com/2022/02/27/dog-mother/"
        className="hover:bg-yellow-700 bg-yellow-500 text-white px-4 py-3 text-sm font-medium"
        >
        SHOP PUBLISHER
        </a>
    <p className="pt-4 text-sm leading-relaxed">
    Dog Mother explores the powerful relationship the dog has with humanity. 
    From a Daoist perspective, it examines the pivotal role the dog has in world culture through 
    studies of folklore, mythology, and religion. Opening new insights on the dog’s significance 
    and ample cross-cultural connections. Dr. Baolin Wu reveals the spirit that connects dog and
    humanity in sharing for the first time the Chinese zodiac’s Dog Qigong from the White Cloud 
    Temple in Beijing. A practice embodying the canine spirit to transform the practitioner, to 
    increase the body’s ability to self-heal, and to establish a deep relationship with nature. 
    In addition, he also offers Dog Neigong exercises, simple enough to perform throughout the day to 
    increase the body’s natural senses (smelling, hearing, seeing) generating health and long life. 
    The book is a cultural treasure-trove, a formidable cornucopia of dog lore, and a potent resource 
    for self-healing and Daoist realization. A must-read for all interested in dogs, 
    personal cultivation, and cultural exploration.
   
        </p>



            </div>
        </div>
        </div>
        </section>
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1,
            transition: {
                duration: 2,
            } }}
            viewport={{ once: true }}
            >
        <p className="bg-white bg-opacity-80 text-center font-bold text-5xl p-8 mx-8 font-playfair">Herbal Products</p>
        <p className="bg-white bg-opacity-80 text-center font-bold text-2xl p-8 mx-8 italic">Coming Soon</p>
        </motion.div>
        {/* <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 md:max-w-7xl md:p-8">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Coming Soon</h2> */}

                        {/* <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {products.map((product) => (
                                    <div key={product.id} className="group relative">
                                            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                                <Image
                                                src={product.imageSrc}
                                                alt={product.imageAlt}
                                                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                                />
                                            </div>
                                            <div className="mt-4 flex justify-between">
                                                <div>
                                                <h3 className="text-sm text-gray-700">
                                                    <a href={product.href}>
                                                    <span aria-hidden="true" className="absolute inset-0" />
                                                    {product.name}
                                                    </a>
                                                </h3>
                                                <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                            </div>
                                        <p className="text-sm font-medium text-gray-900">{product.price}</p>
                                    </div>
                            </div>
                            ))}
                        </div> */}
            {/* </div>
</div> */}
        
</div>
  )
}

export default StoreMain