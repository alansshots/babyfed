import React from 'react'

import Logo from '../assets/BabyFed.png'

const Footer = () => {
  return (
    <div className='Footer'>
        <footer className="bg-gray-900 pt-4 pb-8 xl:pt-8">
            <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 text-gray-400 dark:text-gray-300">
                <ul className="text-lg font-light pb-8 flex flex-col sm:flex-row items-center justify-center">
                <li className="w-1/2 md:w-1/3 lg:w-1/3 my-5">
                        <div className="text-center flex items-center justify-center">
                            <img src={Logo} alt="logo BabyFed" className='w-44 rounded-xl' />
                        </div>
                    </li>
                    <li className="w-1/2 md:w-1/3 lg:w-1/3 my-5">
                        <div className="text-center">
                            <h2 className="text-gray-500 dark:text-gray-200 text-md uppercase mb-4">
                                Contacts
                            </h2>
                            <ul>
                                <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                                    <a href='mailto:contact@babyfed.com'>
                                        contact@babyfed.com
                                    </a>
                                </li>
                                {/* <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                                    <a href="">
                                        Support
                                    </a>
                                </li> */}
                                <li className='mb-4 hover:text-white'>
                                    <a href="#">
                                        Support
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="w-1/2 md:w-1/3 lg:w-1/3 my-5">
                        <div className="text-center">
                            <h2 className="text-gray-500 dark:text-gray-200 text-md uppercase mb-4">
                                Socials
                            </h2>
                            <ul>
                                <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                                    <a href="#">
                                        Facebook
                                    </a>
                                </li>
                                <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                                    <a href="#">
                                        Instagram
                                    </a>
                                </li>
                                <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                                    <a href="#">
                                        Tik Tok
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <div className="pt-8 flex border-t border-gray-200 max-w-xs mx-auto items-center justify-center">
                    <h6>All Rights Reserved &copy; Babyfed 2022</h6>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer