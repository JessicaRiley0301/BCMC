import type { NextPage } from 'next'
import { HeaderHome } from '../components'
import { HomeAbout } from '../components'
import { HeaderFeature } from '../components'
import { HomeServices } from '../components'
import { HomeBlog } from '../components'
import { HomeStore } from '../components'
import { HomeYoutube } from '../components'
import { HomeSignup } from '../components'
import { HomeInsta } from '../components'


export default function Home() {
  return (
    <div className="container">
      <HeaderHome/>
      <HeaderFeature/>
      <HomeAbout/>
      <HomeServices/>
      <HomeBlog/>
      <HomeStore/>
      <HomeYoutube/>
      <HomeSignup/>
      <HomeInsta/>
      
    </div>
  )
}

