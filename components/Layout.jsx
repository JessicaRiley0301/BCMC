import React from 'react'
import { Header } from './';
import Navbar from './Navbar';
import Footer from './Footer';


const Layout = ( {children} ) => {
  return (
    <>
    <Navbar/>
    
    {children}
    <Footer/>
    </>
  )
}

export default Layout