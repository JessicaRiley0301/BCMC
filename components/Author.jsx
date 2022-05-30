import React from 'react'
import Image from 'next/image';

const Author = ({ author }) => {
  return (
    <div className="text-center mt-20 mb-8 p-12 relative bg-black bg-opacity-30">
      <div className="absolute left-0 right-0 -top-14">
        <Image
          unoptimized
          // loader={grpahCMSImageLoader}
          alt={author.name}
          height="100px"
          width="100px"
          className="align-middle rounded-full"
          src={author.picture.url}
        />
      </div>
      <h3 className="font-playfair text-white mt-4 mb-4 text-xl font-bold">{author.name}</h3>
      <p className="text-white text-ls italic">{author.biography}</p>
    </div>
  )
}

export default Author