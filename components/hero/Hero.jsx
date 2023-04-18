'use client'
import Image from 'next/image'
import SideScroll from '../sidescrollanimation/SideScroll'
import { motion } from 'framer-motion'
// styles
import './Hero.scss'

const Hero = ({lights}) => {

    lights ? console.log('on') : console.log('off')

    return (
        <div className='hero'>
            <SideScroll />                
        </div>
    )
}

export default Hero