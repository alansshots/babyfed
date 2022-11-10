import React from 'react'
import { motion } from "framer-motion"

import Logo from '../assets/BabyFed-no-bg.png'

const Navbar = () => {
  return (
    <div className='Navbar flex flex-row justify-between items-center bg-[#ffde59] p-5 rounded-b-3xl sticky top-0 z-20'>
        <div className='ml-2'>
            <img src={Logo} alt="logo babyfed" className='h-10 md:h-14' />
        </div>

        <div className='mr-10'>
            <motion.a 
            href="#Register"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}            
            className='border-double border-4 border-black px-1 sm:px-4 py-2 rounded-xl cursor-none'>
            Register now</motion.a>
        </div>
    </div>
  )
}

export default Navbar