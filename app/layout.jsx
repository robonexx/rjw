"use client"
import { useState, useRef } from "react"
import { AnimatePresence } from "framer-motion"
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
import Navbar from '../components/ui/navbar/Navbar'
import NavButton from '../components/ui/navbutton/NavButton'
import Theme from '../components/theme/Theme'


export default function RootLayout({
  children,
}) {
  const [menu, setMenu] = useState(false)
  const [lights, setLights] = useState(false);
  const bgRef = useRef()  

  const handleClick = () => {
    setMenu(!menu)
    console.log('clicked')
  }
  return (
    <html>
      <head />
      <body ref={bgRef} className={lights ? 'darkmode' : 'lightmode'}>
        <Header />
        <Theme lights={lights} setLights={setLights} /* lightsOnOff={lightsOnOff} */ />
      {
        !menu ? null : <Navbar />
      }
        <NavButton handleClick={handleClick} menu={menu} />
        <AnimatePresence mode="wait">
        {children}          
      </AnimatePresence>
        <Footer />
      </body>
    </html>
  )
}

