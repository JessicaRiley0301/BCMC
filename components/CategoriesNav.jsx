import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '../services';




const CategoriesNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
      getCategories().then((newCategories) => {
        setCategories(newCategories);
      });
    }, []);

  return (
    <div className="bg-bamboo mx-auto px-10 py-8">
    <div className="bg-white shadow-lg rounded-lg w-full content-center inline-block border-green-700 p-8">
      <div className="text-center align-contents-center">
          <h1 className="text-center text-3xl p-2 border-b mb-4"> Categories</h1>
        {categories.map((category, index) => (
          <Link key={index} href={`/category/${category.slug}`}><span className=" mt-2 align-middle text-black ml-4 font-semibold cursor-pointer">{category.name}</span></Link>
        ))}
      </div>
    </div>
  </div>
  )
}

export default CategoriesNav