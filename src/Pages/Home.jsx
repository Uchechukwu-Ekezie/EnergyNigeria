import React from 'react'
import Hero from '../Components/Hero/Hero'
import HeroOne from '../Components/Hero/HeroOne'

function Home() {
  return (
    <div>
        <Hero/>
        <div className='lg:mt-[-140px]'>
        <HeroOne/>
        </div>
    </div>
  )
}

export default Home