import React from 'react'
import { motion } from "framer-motion"
import { useState, useEffect } from 'react'

const Register = () => {

  const loopArr = ['Federer', 'Durant', 'Ronaldo', 'Messi', 'Bryant', 'Nadal', 'Bolt', 'Phelps', 'Hamilton', 'Schumacher'];
  
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex(index + 1);
      }, 3000);
      return () => clearInterval(interval);
    });

  return (
    <div className='Register'>  
        <div className="bg-gray-900">
            <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                <h2 className="text-3xl font-extrabold text-black sm:text-4xl mb-10">
                    <span className="block text-[#ffde59]">
                        Are you the next 
                        <motion.span
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-[#ffde59] ml-2 italic">{ (loopArr[index]) }
                        </motion.span> ?
                    </span>
                    <span className="block font-normal text-xl text-white">
                        Register now for early access!
                    </span>
                </h2>
                <div className="lg:mt-0 lg:flex-shrink-0">                   
                    <form method="POST" action="https://api.sheetmonkey.io/form/r8Yx8HY6P3yywAucFi4Jck">   
                        <label for="search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Your Email</label>
                        <div className="relative">
                            <input name="Email" type="email" id="email" className="block p-4 pl-10 w-full text-sm text-[#ffde59] rounded-lg border-b-2 border-[#ffde59] bg-transparent outline-0" placeholder="Enter your email adress..." required=""/>
                            <motion.button 
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            type="submit" className="text-black font-bold absolute right-2.5 bottom-2.5 bg-[#ffde59] hover:bg-[#ffde30] focus:outline-none font-medium rounded-lg text-sm px-4 py-2 cursor-none">
                            Submit</motion.button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register