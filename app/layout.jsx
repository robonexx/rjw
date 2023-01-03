"use client"
import { useState, useRef } from "react"
import { AnimatePresence } from "framer-motion"
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
import Navbar from '../components/ui/navbar/Navbar'
import NavButton from '../components/ui/navbutton/NavButton'
import Theme from '../components/theme/Theme'


/* type Props = { children:typeof useRef } */

export default function RootLayout({
  children,
}) {
  const [menu, setMenu] = useState(false)
  const [lights, setLights] = useState(false);
  const bgRef = useRef()

  const lightsOnOff = () => {
    setLights(!lights);
    lights
      ? (bgRef.current.style.backgroundColor = "#eee9e3")
      : (bgRef.current.style.backgroundColor = "#282422");
  };

  

  const handleClick = () => {
    setMenu(!menu)
    console.log('clicked')
  }
  return (
    <html>
      <head />
      <body ref={bgRef}>
        <Header />
        <Theme lights={lights} setLights={setLights} lightsOnOff={lightsOnOff} />
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

