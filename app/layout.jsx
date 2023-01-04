"use client"
import { useState } from "react"

import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
import Navbar from '../components/ui/navbar/Navbar'
import NavButton from '../components/ui/navbutton/NavButton'
import Theme from '../components/theme/Theme'

export default function RootLayout({
  children
}) {
  const [menu, setMenu] = useState(false)
  const [lights, setLights] = useState(false);

  const handleClick = () => {
    setMenu(!menu) 
  }
  return (
    <html>
      <head />     
        <body className={lights ? 'darkmode' : 'lightmode'}>
         
              <Header />
                <Theme lights={lights} setLights={setLights} /* lightsOnOff={lightsOnOff} */ />
              {
                !menu ? null : <Navbar />
              }
              <NavButton handleClick={handleClick} menu={menu} />       
                {children}     
              <Footer />
           
          </body>
       
    </html>
  )
}

