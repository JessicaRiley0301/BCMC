import React from 'react'
import { motion } from 'framer-motion'

const AboutUsTestimonials = () => {
  return (
    <div>
        <div class="bg-bamboo w-screen h-full bg-cover bg-top bg-fixed">
            <div class="w-full px-5 py-16 md:py-24 text-gray-800">
                <div class="w-full max-w-6xl mx-auto">
                    <div class="text-center max-w-xl mx-auto">
                        <h1 class="font-playfair text-4xl md:text-6xl font-bold mb-5 text-gray-600">Testimonials</h1>
                        <h3 class="text-xl mb-5 font-light italic text-gray-600">From many of Dr. Wu's satisfied patients</h3>
                    <div class="text-center mb-10">
                        <span class="inline-block w-1 h-1 bg-lime-600 ml-1"></span>
                        <span class="inline-block w-3 h-1 bg-lime-700 ml-1"></span>
                        <span class="inline-block w-40 h-1 bg-lime-700 ml-1"></span>
                        <span class="inline-block w-3 h-1 bg-lime-700 ml-1"></span>
                        <span class="inline-block w-1 h-1 bg-lime-700 ml-1"></span>
                    </div>
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
                <div class="-mx-3 md:flex items-start">
                    <div class="px-3 md:w-1/3">
                        <div class="w-full mx-auto bg-white bg-opacity-80 p-5 text-gray-800 font-light mb-6">
                            <div class="w-full flex mb-4 items-center">

                                <div class="flex-grow ">
                                    <h6 class="font-playfair font-bold text-sm uppercase text-gray-600 ">Uddhava Om, D.O., Physician & Healer</h6>
                                </div>
                            </div>
                            <div class="w-full">
                                <p class="text-sm leading-tight italic"><span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>In my experience, Dr Wu exemplifies the ancient Daoist wisdom of China. He personally assisted me in attaining a deeper experience of spirit and greater physical vitality.<span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                            </div>
                        </div>
                        <div class="w-full mx-auto bg-white bg-opacity-80  p-5 text-gray-800 font-light mb-6">
                            <div class="w-full flex mb-4 items-center">

                                <div class="flex-grow ">
                                    <h6 class="font-playfair font-bold text-sm uppercase text-gray-600">
                                    Anonymous, Computer Programmer
                                    </h6>
                                </div>
                            </div>
                            <div class="w-full">
                                <p class="text-sm leading-tight italic">
                                <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>
                                I came to Dr. Wu because I had been diagnosed with cancer and diabetes. By strengthening my immune system, Dr. Wu enabled me to fight the cancer cells, which now appear to be in remission. With continued treatment, Dr. Wu brought my blood sugar down from a dangerous level to an acceptable level without the use of insulin. If not for Dr. Wu’s Qi Gong treatments, I might not be alive today.
                                <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                            </div>
                        </div>
                    </div>
                    <div class="px-3 md:w-1/3">
                        <div class="w-full mx-auto bg-white bg-opacity-80  p-5 text-gray-800 font-light mb-6">
                            <div class="w-full flex mb-4 items-center">

                                <div class="flex-grow ">
                                    <h6 class="font-playfair font-bold text-sm uppercase text-gray-600">George Gerdes, Actor </h6>
                                </div>
                            </div>
                            <div class="w-full">
                                <p class="text-sm leading-tight italic"><span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>
                                I had a chronic cough for several years before discovering Dr. Wu. The constant antibiotics from my Western doctor were not helping. With a combination of Qi Gong, herbs and acupuncture, Dr. Wu cured me very quickly. I strongly recommend Dr. Wu to anyone with or without a health problem because of the incredible power of Qi Gong.
                                <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                            </div>
                        </div>
                        <div class="w-full mx-auto bg-white bg-opacity-80  p-5 text-gray-800 font-light mb-6">
                            <div class="w-full flex mb-4 items-center">

                                <div class="flex-grow ">
                                    <h6 class="font-playfair font-bold text-sm uppercase text-gray-600">Courtney Cunniff</h6>
                                </div>
                            </div>
                            <div class="w-full">
                                <p class="text-sm leading-tight italic">
                                    <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"
                                    </span>
                                    Dr Wu has completely changed my life and I cannot recommend him more. 
                                    I’ve been to lots of acupuncturists over the years when I lived in NYC and Chicago, but I moved to LA in March of 2019 and have been seeing Dr Wu regularly since. He is a true healer.
                                    Also Dr Wu is mind blowingly intuitive – my first visit he knew I went through a tough breakup when I was 23 (no clue how he would’ve known that). He’s amazing!
                                    <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                            </div>
                        </div>
                    </div>
                    <div class="px-3 md:w-1/3">
                        <div class="w-full mx-auto bg-white bg-opacity-80  p-5 text-gray-800 font-light mb-6">
                            <div class="w-full flex mb-4 items-center">

                                <div class="flex-grow ">
                                    <h6 class="font-playfair font-bold text-sm uppercase text-gray-600">Anne Kerry Ford, Actress & Writer</h6>
                                </div>
                            </div>
                            <div class="w-full">
                                <p class="text-sm leading-tight italic"><span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>
                                Dr. Wu concerns himself with complete wellness. He treats the entire person… physically, psychologically and emotionally. He facilitates the proper flow of Qi, enabling one to fulfill their whole human potential.
                                <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"
                                </span></p>
                            </div>
                        </div>
                        <div class="w-full mx-auto bg-white bg-opacity-80  p-5 text-gray-800 font-light mb-6">
                            <div class="w-full flex mb-4 items-center">

                                <div class="flex-grow pl-3">
                                    <h6 class="font-playfair font-bold text-sm uppercase text-gray-600">Claire</h6>
                                </div>
                            </div>
                            <div class="w-full">
                                <p class="text-sm leading-tight italic"><span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>
                                Hello Dr. Wu (and Lily and Michael), You said that Alex would be changing and she certainly is! Her grades for the past two years have been very poor. She has begun this school year with new enthusiasm and is right now getting straight A’s!
                                And, for the first time in five years, she has decided she wants to play soccer. She has begun playing with a community team just to get fit and for enjoyment. I know these changes are thanks to you. I am very grateful to be getting my cheerful daughter back!
                                <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                </motion.div>
            </div>
            </div>
        </div>

    </div>
  )
}

export default AboutUsTestimonials