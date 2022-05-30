import React from 'react'
// import type { NextPage } from 'next'
import { HeaderAbout } from '../components'
import { AboutUs } from '../components'


const about = () => {
  return (
    <div className="container">
      <HeaderAbout/>
      <AboutUs/>
    </div>
  )
}

export default about