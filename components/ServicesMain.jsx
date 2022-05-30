import React from 'react'
import Image from 'next/image';
import suffering from '../public/suffering2.jpg'
import drwuacupuncture from '../public/drwuacupuncture.jpeg'
import acupunctureimg1 from '../public/acupunctureimg1.jpeg'
import herbs from '../public/herbs3.jpg'
import chiropractic1 from '../public/chiropractic2.jpg'
import massage from '../public/massage.jpeg'
import room from '../public/treatmentroom.jpeg'
import guanyin from '../public/guanyin.jpeg'
import cat from '../public/cat.jpg'
import { motion } from 'framer-motion';



const ServicesMain = () => {
  return (
    <div class="bg-bamboo w-screen bg-cover bg-fixed p-2 sm:p-16">
    <div class="bg-white bg-opacity-80">
        
<section class="relative pt-4 bg-blueGray-50">
<div class="items-center flex flex-wrap">
<div class="w-full md:w-4/12 ml-auto mr-auto px-4">
    <Image alt="..." class="max-w-full rounded-lg shadow-lg" src={suffering}/>
</div>
<div class="p-8 w-full md:w-5/12 ml-auto mr-auto px-4">
    <div class="md:pr-4">
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1,
      transition: {
        duration: 2,
      } }}
      viewport={{ once: true }}
      >
    <h3 class="font-playfair text-3xl font-semibold">Are you Suffering from?</h3>
    <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
    We are a well rounded clinic that can treat a variety of illnesses. 
    
    </p>
    <ul class="list-none mt-6 text-lg">
        <li class="py-2">
        <div class="flex items-center">
            <div>
            <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-black bg-lime-500 mr-3"><i class="fas fa-fingerprint"></i></span>
            </div>
            <div>
            <h4 class="text-black">
                
            Infertility /
            Gynecological Issues
            </h4>
            </div>
        </div>
        </li>
        <li class="py-2">
        <div class="flex items-center">
            <div>
            <span class="text-lg font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-lime-500 mr-3"><i class="fab fa-html5"></i></span>
            </div>
            <div>
            <h4 class="text-blueGray-500">Cancer</h4>
            </div>
        </div>
        </li>
        <li class="py-2">
        <div class="flex items-center">
            <div>
            <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-lime-400 mr-3"><i class="far fa-paper-plane"></i></span>
            </div>
            <div>
            <h4 class="text-blueGray-500">Insomnia/Headaches</h4>
            </div>
        </div>
        </li>
        <li class="py-2">
        <div class="flex items-center">
            <div>
            <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-lime-400 mr-3"><i class="far fa-paper-plane"></i></span>
            </div>
            <div>
            <h4 class="text-blueGray-500">Stress / Depression</h4>
            </div>
        </div>
        </li>
        <li class="py-2">
        <div class="flex items-center">
            <div>
            <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-lime-400 mr-3"><i class="far fa-paper-plane"></i></span>
            </div>
            <div>
            <h4 class="text-blueGray-500">
Diabetes and High Blood Pressure Management</h4>
            </div>
        </div>
        </li>
        <li class="py-2">
        <div class="flex items-center">
            <div>
            <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-lime-400 mr-3"><i class="far fa-paper-plane"></i></span>
            </div>
            <div>
            <h4 class="text-blueGray-500">
            Pain Management</h4>
            </div>
        </div>
        </li>
    </ul>
    </motion.div>
    </div>
</div>
</div>
</section>
</div>


<section class="relative pt-12 bg-blueGray-50">
<div class="bg-white bg-opacity-80 p-8 items-center flex flex-wrap">
<div class="w-full md:w-7/12 ml-auto mr-auto px-4">
    <div class="md:pr-12">
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1,
      transition: {
        duration: 2,
      } }}
      viewport={{ once: true }}
      >
    <h3 class="font-playfair text-3xl font-semibold p-2">Acupuncture</h3>
    
    <p class="mt-4 text-lg leading-relaxed text-blueGray-500 p-2">
            Acupuncture originated in China thousands
            of years ago, but over the past three decades its
            popularity has grown significantly within the United
            States. Traditional Chinese theory explains acupuncture
            as a technique for balancing the flow of energy or life
            force — known as qi or chi (chee) — believed to flow
            through pathways (meridians) in your body. By inserting
            needles into specific points along these meridians,
            acupuncture practitioners believe that your energy flow
            will re-balance.

    </p>
    </motion.div>
    </div>
</div>
<div class="w-full md:w-4/12 ml-auto mr-auto px-4">
    <Image alt="..." class="max-w-full rounded-lg shadow-lg" src={acupunctureimg1}/>
</div>
</div>
</section>



<section class="relative pt-12 bg-blueGray-50">
<div class="bg-white bg-opacity-80 p-8 items-center flex flex-wrap">
<div class="w-full md:w-4/12 ml-auto mr-auto px-4">
    <Image alt="..." class="max-w-full rounded-lg shadow-lg" src={herbs}/>
</div>
<div class="w-full md:w-6/12 ml-auto mr-auto px-4 py-8">
    <div class="md:pr-12">
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1,
      transition: {
        duration: 2,
      } }}
      viewport={{ once: true }}
      >
        
    <h3 class="font-playfair text-3xl font-semibold p-2">Herbs</h3>
    <p class="mt-4 text-lg leading-relaxed text-blueGray-500 p-2">
    Herbs are a crucial component of Traditional Chinese Medicine. Hippocrates, “the father of Medicine,” himself used more than 200 types of herbs and other natural supplements in his management of various diseases and illnesses.
Nowadays Chinese Herbs are gaining more and more popularity as it offers the opportunities for those who are seeking alternative treatment methods, those who are dissatisfied with western medications, or those who seek to avoid the side effects of pharmaceutical drugs.


    </p>
    </motion.div>
    </div>
</div>
</div>
</section>



<section class="relative pt-12 bg-blueGray-50">
<div class="bg-white bg-opacity-80 p-8 items-center flex flex-wrap">
<div class="w-full md:w-7/12 ml-auto mr-auto px-4">
    <div class="md:pr-12">
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1,
      transition: {
        duration: 2,
      } }}
      viewport={{ once: true }}
      >
    <h3 class="font-playfair text-3xl font-semibold p-2">Chiropractic</h3>
    <p class="mt-4 text-lg leading-relaxed text-blueGray-500 p-2">
                Chiropractic is a hands on approach of manipulating areas of
                the spinal and limb joints. These joint corrections, also known
                as “adjustments”, can restore spinal alignments, improve joint
                mobility and provide greater functional ranges of motion.
                Our Doctor will provide conservative rehabilitation and
                treatment for Neuromuscular and skeletal injuries,
                pain management, and preventative wellness care.
                <p>
                We treat Neck, Shoulder, Back, Knee, Join Pain
                Sciatica, Sport Injuries, Car Accidents
                </p>


    </p>
    </motion.div>
    </div>
</div>
<div class="w-full md:w-4/12 ml-auto mr-auto px-4">
    <Image alt="..." class="max-w-full rounded-lg shadow-lg" src={chiropractic1}/>
</div>
</div>
</section>


<section class="relative pt-12 bg-blueGray-50">
<div class="bg-white bg-opacity-80 p-8 items-center flex flex-wrap">
<div class="w-full md:w-4/12 ml-auto mr-auto px-4">
    <Image alt="..." class="max-w-full rounded-lg shadow-lg" src={massage}/>
</div>
<div class="w-full md:w-6/12 ml-auto mr-auto px-4 py-4">
    <div class="md:pr-12">
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1,
      transition: {
        duration: 2,
      } }}
      viewport={{ once: true }}
      >
    <h3 class="font-playfair text-3xl font-semibold">AcuMassage</h3>
    <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
            <p class="pt-2">
                <span class="font-playfair font-extrabold text-black text-xl ">Acupressure</span> is very similar to acupuncture, this technique
                uses digital pressure rather than needle
                insertion to rebalance the body in accordance to
                TCM ACU-channels and meridians.
            </p>
            <p class="pt-2">
            <span class="font-playfair font-extrabold text-black text-xl ">Tui Na</span> is a hands on body technique, in which the practitioner
            may brush, knead, press, roll and rub on areas of the
            body.
            </p>
            <p class="pt-2">
            <span class="font-playfair font-extrabold text-black text-xl ">Gua Sha</span> is a TCM therapy in which the skin is scraped to produce
            light bruising. It is used to promote blood flow and healing.
            </p>


    </p>
    </motion.div>
    </div>
</div>
</div>
</section>

<section class="relative pt-12 bg-blueGray-50">
<div class="bg-white bg-opacity-80 p-8 items-center flex flex-wrap">
<div class="w-full md:w-7/12 ml-auto mr-auto px-4">
    <div class="md:pr-12">
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1,
      transition: {
        duration: 2,
      } }}
      viewport={{ once: true }}
      >
    <h3 class="font-playfair text-3xl font-semibold p-2">Your First Visit</h3>
    <p class="mt-4 text-lg leading-relaxed text-blueGray-500 p-2">
        This initial evaluation may take up to 50 minutes. Subsequent appointments usually take about a 20-30 minutes. A common treatment plan for a single complaint would typically involve 6 to 12 treatments, scheduled over time. Several maintenance sessions a year also may be recommended.
    </p>
    </motion.div>
    </div>
</div>
<div class="w-full md:w-4/12 ml-auto mr-auto px-4">
    <Image alt="..." class="max-w-full rounded-lg shadow-lg" src={room}/>
</div>
</div>
</section>

<section class="relative pt-12 bg-blueGray-50">
<div class="bg-white bg-opacity-80 p-8 items-center flex flex-wrap">
<div class="w-full md:w-4/12 ml-auto mr-auto px-4">
    <Image alt="..." class="max-w-full rounded-lg shadow-lg" src={drwuacupuncture}/>
</div>
<div class="w-full md:w-6/12 ml-auto mr-auto p-2">
    <div class="md:pr-4">
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1,
      transition: {
        duration: 2,
      } }}
      viewport={{ once: true }}
      >
    <h3 class="font-playfair text-3xl font-semibold">The Acupuncture Experience</h3>
    <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
    Needles are very thin, so insertion usually causes very little discomfort. Between 5 and 15 needles are used in a typical treatment. You may feel an aching sensation when a needle reaches the correct depth.
    Dr. Wu may move or twirl the needles after they’ve been placed. Another option is to apply heat or a mild electric pulses to the needles.
    In most cases, the needles will remain in place for 15 to 30 minutes while you lie still and relax. There is usually no sensation of discomfort when the needles are removed.
    Depending on the case, Dr. Wu may recommend Herbs to compliment treatment for more effectiveness with healing.
    After acupuncture treatment some people feel relaxed while others feel more energized. 

    </p>
    </motion.div>
    </div>
</div>
</div>
</section>


{/* <section class="relative pt-12 bg-blueGray-50">
<div class="bg-white p-8 items-center flex flex-wrap">
<div class="w-full md:w-7/12 ml-auto mr-auto p-4">
    <div class="md:pr-12">
    <h3 class="text-3xl font-semibold">COVID-19 Policy</h3>
    <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
    We are currently following the CDC guidelines and best practices for preventing 
    Covid-19.
    <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
    Please wear a face mask while inside of the building.
    </p>
    </p>
    <p class="mt-4 text-lg leading-relaxed text-blueGray-500">

    We make sure evaluate symptoms of employees in order to ensure that
    no one who is sick enters the workplace. 
    </p>
    <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
    We support regularly washing your hands for at least 20 seconds.

    </p>
    <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
    Please come at your scheduled appointment time to avoid crowding within the office.

    </p>


    </div>
</div>
<div class="w-full md:w-4/12 ml-auto mr-auto px-4">
    <img alt="..." class="max-w-full rounded-lg shadow-lg" src={mask}/>
</div>
</div>
</section> */}


<section class="relative pt-12 bg-blueGray-50">
<div class="bg-white bg-opacity-80 p-8 items-center flex flex-wrap">
<div class="w-full md:w-7/12 ml-auto mr-auto p-4">
    <div class="md:pr-12">
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1,
      transition: {
        duration: 2,
      } }}
      viewport={{ once: true }}
      >
    <h3 class="font-playfair text-3xl font-semibold">Payment, Cancellation & Insurance</h3>
    <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
    Beijing Medical Center accepts Cash Only. 
    <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
    Payment is due at the time of service.
    </p>
    </p>
    <p class="mt-4 text-lg leading-relaxed text-blueGray-500">

    Initial Consultation + Acupuncture Treatment (90min) $280
    </p>
    <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
    Follow-up Consultation + Acupuncture Treatment (60min) $140

    </p>
    <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
    Cancellation Policy: No refunds if cancelled within 24 hours of appointment time.

    </p>
    <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
    WE ACCEPT INSURANCE (PPO ONLY)
    Cigna
    Aetna
    Blue Shield (select plans)
    United Healthcare

    </p>
    </motion.div>

    </div>
</div>
<div class="w-full md:w-4/12 ml-auto mr-auto px-4">
    <Image alt="..." class="max-w-full rounded-lg shadow-lg" src={guanyin}/>
</div>
</div>
</section>


<section class="relative pt-12 bg-blueGray-50">
<div class="bg-white bg-opacity-80 p-8 items-center flex flex-wrap">
<div class="w-full md:w-4/12 ml-auto mr-auto px-4">
    <Image alt="..." class="max-w-full rounded-lg shadow-lg" src={cat}/>
</div>
<div class="w-full md:w-6/12 ml-auto mr-auto p-4">
    <div class="md:pr-12">
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1,
      transition: {
        duration: 2,
      } }}
      viewport={{ once: true }}
      >
    <h3 class="font-playfair text-3xl font-semibold">We Treat Pets!</h3>
    <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
    Looking for an alternative to veterinary care? Acupuncture is very
    effective on animals as well. Many patients bring in their furry friends
    seeking treatment and are astounded with the results.
    Dr. Wu has extensive experience working with animals. If your furry 
    friend is suffering from an illness or injury call our office to see whether
    Dr. Wu can help your pet recover. He has been called in for helping with a sick
    tiger at the San Diego Zoo, and has extensive experience with all types of animals.
    He loves to treat dogs, cats, birds, and much more.

    </p>
    </motion.div>
    </div>
</div>
</div>
</section>




</div>
  )
}

export default ServicesMain