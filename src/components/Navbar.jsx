import React from 'react'

import Logo from '../assets/BabyFed-no-bg.png'

const Navbar = () => {
  return (
    <div className='Navbar flex flex-row justify-between items-center bg-[#ffde59] p-5 rounded-b-3xl sticky top-0 z-50'>
        <div className='ml-2'>
            <img src={Logo} alt="logo babyfed" className='sm:h-14' />
        </div>

        <div className='mr-10'>
            <button className='border-double border-4 border-black px-4 py-2 rounded-xl'>Register now</button>
        </div>
    </div>
  )
}

export default Navbar