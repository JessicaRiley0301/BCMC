import React from 'react'
import moment from 'moment';
import Link from 'next/link'
import { motion } from 'framer-motion';

const PostCard = ({ post })  => {
  console.log(post);
  return (
     <div className="items-start overflow-hidden ">
                   <motion.div 
              initial={{ opacity: 0, y: 50}}
              whileInView={{ opacity: 1,
                y: 0,
              transition: {
                duration: 1

              } }}
              viewport={{ once: true }}
              >
                            <a href="#_" className="block transition duration-200 ease-out transform">
                                <img className="object-cover w-full h-full" src={post.coverImage.url}/>
                            </a>
                            <div className="mb-8 relative flex flex-col items-start px-6 bg-white bg-opacity-80  py-7 ">
                            <p className="text-gray-500 text-xs">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
                                <h2 className="text-base text-gray-500 font-bold sm:text-lg md:text-xl">{post.title}</h2>
                                <p className="my-4 text-xs text-gray-500">{post.excerpt}</p> 
                                
                                  <p className="hover:bg-lime-700 bg-lime-500 text-white px-2 py-1 text-md mx-auto">
                                  <Link href={`/post/${post.slug}`}>
                                  Read More
                                  </Link>
                                  </p>
                                  
                                
                            </div>
                            </motion.div>
    </div>




  )
}

export default PostCard