import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <div id="footer">
     <section className="bg-bamboo w-screen ">
     <motion.div 
              initial={{ opacity: 0, y: 50}}
              whileInView={{ opacity: 1,
                y: 0,
              transition: {
                duration: 2

              } }}
              viewport={{ once: true }}
              >
        <div className=" mx-auto p-8 border-t border-gray-400 max-w-6xl">

        <div className="table w-full">
        <div className="block sm:table-cell">
        <p className="font-playfair text-gray-700 text-2xl py-4">Contact</p>
        <p className="text-gray-700 hover:underline text-md py-2">
        <a href="tel:310458-1488">(310) 458-1788
        </a>
        </p>
        <p className="text-gray-700 hover:underline text-md py-2"><a href="mailto:baolinwu.medicalcenter@gmail.com">baolinwu.medicalcenter@gmail.com</a></p>
        <div>
            <p className="font-playfair text-gray-700 text-2xl py-4">Hours</p>
            <p className="text-gray-700 text-md py-2">
            Monday, Tuesday, Wednesday, Friday: 1 pm – 5 pm
            </p>
            <p className="text-gray-700 text-md py-2">
            Thursday, Sunday: Closed
            </p>
            <p className="text-gray-700 text-md py-2">
            Saturday: 10am - 3pm
            </p>
        </div>
    </div>
        <div className="block sm:table-cell">
            <p className="font-playfair text-gray-700 text-2xl py-4">Location</p>
            <div>
            <p className="text-gray-700 text-md py-2">
            <a href="/https://www.google.com/maps/place/Beijing+Chinese+Medical+Center/@34.0140936,-118.4824968,17z/data=!4m12!1m6!3m5!1s0x80c2a4d11cf1afa1:0x9bbd06158b141cb2!2sBeijing+Chinese+Medical+Center!8m2!3d34.0141325!4d-118.4802486!3m4!1s0x80c2a4d11cf1afa1:0x9bbd06158b141cb2!8m2!3d34.0141325!4d-118.4802486" className="link-dark" target= "_blank">
            1930 11th St, Santa Monica, CA 90404
            </a>
            </p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.1590619169515!2d-118.4824914851191!3d34.01412782718583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bb2eabd091e7%3A0x44f671966f3bdad6!2s1930%2011th%20St%2C%20Santa%20Monica%2C%20CA%2090404!5e0!3m2!1sen!2sus!4v1652663754876!5m2!1sen!2sus" width="300" height="250" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>


        </div>
        </div>
        </motion.div>
        </section>

        <div className="bg-bamboo w-screen  bg-cover bg-top bg-fixed">
        <div className="flex pb-5 px-3 m-auto pt-5 border-t border-gray-400 text-grey-700 text-sm 
            flex-col md:flex-row max-w-6xl">
            <div className="mt-2">
                © Copyright 2022. All Rights Reserved.
            </div>

    <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
    <a href="https://www.pinterest.com/beijingchinesemedicalcenter/_created/" className="w-6 mx-1">
            <i className="uil uil-pinterest-alt"></i>
            <svg
            className="w-6 h-6 text-pink-600 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"
            />
            </svg>
        </a>
        <a href="https://www.facebook.com/BeijingChineseMedicalCenter/" className="w-6 mx-1">
            <svg
            className="w-6 h-6 text-blue-600 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path
                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
            />
            </svg>
        </a>
    </div>
    </div>
    </div>
    

    </div>
  )
}

export default Footer