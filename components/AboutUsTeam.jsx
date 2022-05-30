import React from 'react'
import Image from 'next/image';
import drwuacu from '../public/drwu1.png'
import ericwu from '../public/Eric-Di-Wu.jpeg'
import { motion } from 'framer-motion';

const AboutUsTeam = () => {
  return (
    <div class="bg-bamboo w-screen h-full bg-cover bg-top bg-fixed">
       <div class="text-center">
       <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1,
      transition: {
        duration: 2,
      } }}
      viewport={{ once: true }}
      >
            <h1 class="font-playfair font-bold text-5xl font-heading p-24">
            Our Team
            </h1>
            </motion.div>

        </div>
            <section class="bg-white bg-opacity-70 relative p-6 md:p-16 bg-blueGray-50">
                <div class="items-center flex flex-wrap">
                    <div class="w-full md:w-4/12 ml-auto mr-auto px-8">
                        <Image alt="Dr. Wu" class="max-w-full rounded-lg shadow-lg" src={drwuacu}/>
                    </div>
                    
                        <div class="w-full md:w-7/12 ml-auto mr-auto px-8 py-4">
                        <div class="md:pr-12">
                        <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1,
                            transition: {
                                duration: 2,
                            } }}
                            viewport={{ once: true }}
                            >
                        <h3 class="font-playfair text-3xl font-semibold">Dr. Baolin Wu</h3>
                        <p class="font-playfair text-base text-1xl text-gray-400 font-normal">OMD., L.Ac</p>
                        <p class="mt-4 text-md leading-relaxed text-blueGray-500">
                        </p>
                        <ul class="list-disc text-blueGray-500 mt-4 text-md">
                            <li>Seventh Generation Family Lineage Practitioner of Traditional Chinese Medicine/Acupuncture</li>
                            <li>Guang An Men Hospital of Beijing China (1972-1985)</li>
                            <li>Traditional Chinese Medicine / Acupuncture Doctor</li>
                            <li>Practiced TCM/Acupuncture in Santa Monica, California. (1990’s – Present)</li>
                            <li>Currently holding LA.c and OMD degree in TCM</li>
                            <li>American Academy of Traditional Chinese Medicine (AATCM): President</li>
                            <li>California Alliance of Acupuncture Medicine (CAAM): Chairman</li>
                        </ul>
                        </motion.div>
                        </div>
                        </div>
                </div>
        </section> 

        <section class="bg-white bg-opacity-70 relative bg-blueGray-50 p-6 mt-16">
            <div class="items-center flex flex-wrap">
                <div class="w-full md:w-4/12 ml-auto mr-auto px-8">
                    <Image alt="eric" class="max-w-full rounded-lg shadow-lg" src={ericwu}/>
                </div>
            <div class="w-full md:w-7/12 ml-auto mr-auto px-8">
                <div class="md:pr-12">
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1,
                    transition: {
                        duration: 2,
                    } }}
                    viewport={{ once: true }}
                    >
                    <h3 class="font-playfair text-3xl font-semibold">Dr. Eric Wu</h3>
                    <p class="font-playfair text-base text-1xl text-gray-400 font-normal">Chiropractor</p>
                    <p class="mt-4 text-md leading-relaxed text-blueGray-500">
                        Dr. Eric Wu began his career in health care with Southern California University of Health Sciences. During his time there he earned the “Doctor of Chiropractic Degree”. He then furthered his education in Medicine by attending Shantou University School of Medicine in China and earning his MBBS degree.
                    </p>
                    <ul class="list-disc">
                        <li>University of California, Irvine (Bachelors Degree)</li>
                        <li>Southern University of Health Sciences (Doctor of Chiropractic, DC Degree)</li>
                        <li>Shantou University Medical College (MBBS Degree)</li>
                    </ul>
                    </motion.div>
    
    
                </div>
            </div>

            </div>
        </section>
            
            <div class="bg-slate-800 bg-opacity-10 md:pt-16">
             <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1,
                transition: {
                    duration: 2,
                } }}
                viewport={{ once: true }}
                >
            <h1 class="font-playfair text-center font-bold text-4xl md:text-4xl lg:text-6xl font-heading  p-16">
                Biography
            </h1>
            </motion.div>
            
            <div class=" m-8 md:mx-28 md:my-8 pb-8"> 
                <p class="text-md"> 
                    Dr. Baolin Wu is a traditional Chinese Medicine (TCM) doctor, research
                    nuerophysiologist, martial artist and Daoist master from White Cloud Monastery, Bejing,
                    which for almost a thousand years has been one of the most respected centers
                    in China for the study and practice of Daoist philosophy and medicine. At age four
                    he was brought to the monastery to live spending the next twenty years under the 
                    direct tutelage of the abbot, Master Du Xinling, learning techniques of which few
                    people today are even aware. He is the 17th generation lineage holder of the 
                    Dragon Gate Sect of Complete Reality Daoism, of which Nine Palaces Solar Qigong is
                    the principal practice.
                </p>
                </div>
                <div class="m-8 md:mx-28 md:my-8 pb-8"> 
                <p>
                    Dr. Wu is an internationally recognized authority on the practice of traditional
                    Chinese medicine and also has a thorough understanding of Western Medicine, as 
                    evidenced by his training and experience. Dr. Wu received his medical degrees from
                    the most esteemed schools in China, graduating from the National College of Traditional
                    Chinese Medicine in Beijing, holds a master's degree from the China Academy of Traditional
                    Chinese Medicine and became an attending physician at Guang'anmen Hospital, China's 
                    foremost combination Western/Chinese medical institution. Dr. Wu has presented before many
                    prestigious international TCM organizations, including The World Federation of Acupuncture
                    Moxibustion Societies (WFAS), also serving on their 9th Executive Committee as representatives
                    to the World Health Organization, the China Association of Traditional Medicine (CATCM) and the
                    American TCM Association (ATCMA).
                </p>
                </div>
                <div class="mx-8 mt-8 md:mx-28 pb-16"> 
                <p>
                    To understand Dr. Baolin Wu's excellence in his field, one must go beyond
                    academic credentials. He hails from one of the most prominent medical families
                    in China. His renowned ancestor Wu Jutong, an imperial doctor of the Qing Dynasty,
                    was the author of "Wen Bing Tiao Bian" (1798) Treatise on the Differential
                    Treatment of Warm Disease, (viral illnesses, transmission, treatment and epidemic containment),
                    one of the classic "Four Pillars" of modern Chinese medicine. Xi Zhi Wu, Dr. Wu's 
                    paternal grandfather, was the personal physician to Pu Yi, the last emperor of China.
                    Dr. Wu's mastery has been shaped by the wisom of seven generations, passed down to him
                    by his family. In addition, the Daoist principles instilled in his young days have given Dr.Wu
                    a sensitivity towards his patients as well as a holistic understanding of the nature of healing.
                </p>
                </div>
                </div>
                </div>
  )
}

export default AboutUsTeam