import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../Components/Header/Navigtion'


function RootLayout() {
  return (
    <div>
        <Navigation/>
        <main>
            <Outlet/>
        </main>
        <footer>

        </footer>
    </div>
  )
}

export default RootLayout