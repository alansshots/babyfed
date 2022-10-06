import React from 'react'
import { useState, useEffect } from 'react'

const Register = () => {

  const loopArr = ['Federer', 'Durant', 'Ronaldo', 'Messi', 'Bryant', 'Nadal', 'Bolt', 'Phelps', 'Hamilton', 'Schumacher'];
  
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex(index + 1);
      }, 5000);
      return () => clearInterval(interval);
    });

  return (
    <div className='Register'>  
        <div className="bg-gray-900">
            <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                <h2 className="text-3xl font-extrabold text-black sm:text-4xl mb-10">
                    <span className="block text-white">
                        Are you the next <span className="text-[#ffde59]">{loopArr[index]}</span> ?
                    </span>
                    <span className="block font-normal text-xl text-white">
                        Register now for early access!
                    </span>
                </h2>
                <div className="lg:mt-0 lg:flex-shrink-0">                   
                    <form>   
                        <label for="search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Your Email</label>
                        <div className="relative">
                            <input type="search" id="search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your email adress..." required=""/>
                            <button type="submit" className="text-black font-bold absolute right-2.5 bottom-2.5 bg-[#ffde59] hover:bg-[#ffde30] focus:outline-none font-medium rounded-lg text-sm px-4 py-2">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register