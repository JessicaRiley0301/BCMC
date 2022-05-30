import React from 'react'
// import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { PostCard, Categories, PostWidget } from '../components';
import { getPosts } from '../services';
import { useEffect } from 'react'
import { FeaturedPosts } from '../sections'
import { HeaderBlog } from '../components';
import { BlogDescription } from '../components';
import { Weather } from '../components';


const blog = ({ posts }) => {
  return (
    <div className="bg-bamboo w-screen bg-cover bg-top bg-fixed w-screen">
        <HeaderBlog/>
        <BlogDescription/>
        <FeaturedPosts/>
        <div className="bg-bamboo w-screen bg-cover bg-top bg-fixed grid grid-cols-1 lg:grid-cols-12 gap-12 md:mx-8">
  
        <div className="bg-grey-500 grid md:grid-cols-3 md:col-span-8 col-span-1 gap-8">
          
      
        {posts.map(( post ) => <PostCard post={post.node} key={post.title} /> )}

        </div>
        <div className="lg:col-span-4 col-span-1 mb-8">
          <div className="lg:sticky relative top-8">
            {/* <WeatherWidget/> */}
            <Weather/>
            <PostWidget/>
          </div>
        </div>
    </div>
    </div>
  )
}
export async function getStaticProps(){
    const posts = await getPosts();
  
    return {
      props: { posts }
    }
  }

export default blog