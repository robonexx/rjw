'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { NavContent } from './NavContent';

// style
import './Navbar.scss';

const variants = {
  hidden: { opacity: 0, x: 1200, y: -1000 },
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
  },
  exit: {
    opacity: 0,
    x: 0,
    y: -100,
  },
};

export default function NavBar() {
 
  return (
      <motion.div
        className='nav'
        variants={variants}
        initial='hidden'
        animate='animate'
        transition={{ duration: 0.2, delay: 0 }}
        exit='exit'
      >
        <ul>
          {NavContent.map(({title, url, id, newtitle}, i) => (
            <motion.li
              key={id}
              initial={{ opacity: 0, y: i % 2 === 0 ? -100 : 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <a href={url} data-text={title + newtitle}>
                {title}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>
  );
}

/* 

moved this to its on file
const list = [
  {
    title: 'THIS IS HIP-HOP',
    newtitle: '- & WE DON´T STOP'
  },
  {
    title: 'THE 80´s was rockin',
    newtitle: '- Dope'
  },
  {
    title: '1990´s was Fresh',
    newtitle: '- Golden Era!!!'
  },
  {
    title: '2000´s was Hot',
    newtitle: '- Yeah buddy'
  },
  {
    title: '2010 show stoppin',
    newtitle: '- Get it!'
  },
  {
    title: '2020... Cash is King',
    newtitle: '- Money, Money'
  },
]; */
