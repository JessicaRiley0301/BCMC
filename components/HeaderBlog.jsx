import React, { useState, useEffect } from 'react';
import { getCategories } from '../services';
import Link from 'next/link';
import { motion } from 'framer-motion';

const HeaderBlog = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);
  return (
    <div className="bg-bamboo w-screen h-full bg-cover bg-top bg-fixed">
      <div className="pt-52 align-items-center">
      <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1,
              transition: {
                duration: 2,
              } }}
              viewport={{ once: true }}
              >
        <h5 className="font-playfair font-extrabold text-lg md:text-2xl text-center p-4">Traditional Chinese Medicine Advice</h5>
        <Link href="/blog">
        <h3 className="font-playfair font-extrabold text-black text-4xl md:text-6xl text-center p-4 cursor-pointer">Daily Health Blog</h3>
        </Link>
        <h5 className="italic font-extrabold text-gray-600 text-lg md:text-3xl text-center p-4 pt-2">Based on the Seasonal 24 Solar Terms - Jing’Zhe（惊蛰）</h5>
        </motion.div>
          <div className="text-center p-4 space-x-4 space-y-4 max-w-xl mx-auto">
            {categories.map((category, index) => (
              <button className="hover:bg-lime-700 bg-lime-500 text-white px-4 py-3 text-lg font-medium">
                <Link key={index} href={`/category/${category.slug}`}>{category.name}</Link>
               </button>
              ))}
          </div>
      </div>
    </div>
  )
}

export default HeaderBlog