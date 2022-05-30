
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { getCategories } from '../services';
// import { Navbar }


const Header = () => {

  const [categories, setCategories] = useState([]);

    useEffect(() => {
      getCategories().then((newCategories) => {
        setCategories(newCategories);
      });
    }, []);
  return (
    <div className="container bg-yellow-100">
         <Navbar/>
        <div className="bg-green-200">
        {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
            <span>
                {category.name}
            </span>
            </Link>
        ))}
        </div>
    </div>
  )
}

export default Header