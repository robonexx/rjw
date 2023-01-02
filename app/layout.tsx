"use client"
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
import Navbar from '../components/navbar/Navbar'
import NavButton from '../components/navbar/NavButton'
import { useState } from "react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {
  
  
    const [menu, setMenu] = useState(false)

  const handleClick = () => {
    setMenu(!menu)
    console.log('clicked')
  }
  return (
    <html>
      <head />
      <body>
      <Header />
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

