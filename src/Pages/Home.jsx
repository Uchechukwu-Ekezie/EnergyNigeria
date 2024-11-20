import React from 'react'
import Hero from '../Components/Hero/Hero'
import HeroOne from '../Components/Hero/HeroOne'
import HeroTwo from '../Components/Hero/HeroTwo'
import One from '../Components/Sponsor/One'

function Home() {
  return (
    <div>
        <Hero/>
        <div className='lg:mt-[-140px]'>
        <HeroOne/>
        <HeroTwo/>
        <One/>
        </div>
    </div>
  )
}

export default Home