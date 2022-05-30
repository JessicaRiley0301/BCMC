import React from 'react'

const HeaderCategories = () => {
    return (
      <div class="bg-bamboo w-screen h-screen bg-cover bg-top bg-fixed">
        <div class="pt-52 align-items-center mb-8 mx-8">
          <h5 class="font-extrabold text-2xl md:text-2xl text-center text-gray-600">Traditional Chinese Medicine Advice</h5>
            <h3 class="font-extrabold text-black text-6xl md:text-6xl text-center pt-4">Daily Health Blog</h3>
            <h5 class="font-extrabold text-black text-2xl md:text-3xl text-center pt-2">Based on the 24 Solar Terms and Real-Time Weather Data</h5>
            <p class="text-center p-4 space-x-2">
              <a
              href="tel:310-458-1488"
              className="hover:bg-red-900 bg-red-600 text-white px-3 py-2 rounded-md text-lg font-medium"
              >
              Schedule Now
              </a>
              <a
              href="/store"
              className="hover:bg-yellow-900 bg-yellow-500 text-white px-3 py-2 rounded-md text-lg font-medium"
              >
              Shop Books
              </a>
            </p>
            <p class="text-center p-2">
              <a
              href="/blog"
              className="hover:bg-lime-700 bg-lime-500 text-white px-3 py-2 rounded-md text-lg font-medium"
              >
              Daily Health Blog
              </a>
            </p>
          </div>
        </div>
    )
  }

export default HeaderCategories