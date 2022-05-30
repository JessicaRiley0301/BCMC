import React from 'react'
import { motion } from 'framer-motion'

const HomeYoutube = () => {
  return (
    <div className="bg-bamboo w-screen bg-cover bg-top bg-fixed">
    <div className="  p-8 ">
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1,
      transition: {
        duration: 2,
      } }}
      viewport={{ once: true }}
    >
    <p className="font-playfair text-center font-bold text-5xl sm:text-5xl pt-8">
    Featured Video
</p>
</motion.div>
<a href="https://www.youtube.com/channel/UCeVG_blPIrJXoDawBjJQu_g">
<p className="pb-4 text-center mt-4 text-lg">For more videos demonstrating QiGong, Acupuncture and More</p>
<p className="pb-4 text-blue-600 hover:underline text-center text-lg">
  Check out Our Youtube Channel
</p>

</a>
<section className="relative bg-blueGray-50">
<div className="flex justify-center aspect-w-8 aspect-h-4 mx-8 sm:mx-52">


<iframe className="p-2" width="700" height="500" src="https://www.youtube.com/embed/omr7J1Z9zE0">
</iframe>


</div>
</section>

</div>
</div>
  )
}

export default HomeYoutube