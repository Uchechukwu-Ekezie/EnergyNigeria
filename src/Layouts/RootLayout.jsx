import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../Components/Header/Navigtion'
import Footer from '../Components/Footer/Footer'


function RootLayout() {
  return (
    <div>
        <Navigation/>
        <main>
            <Outlet/>
        </main>
        <footer>
<Footer/>
        </footer>
    </div>
  )
}

export default RootLayout