import React from 'react'

const Register = () => {
  return (
    <div className='Register'>  
        <div class="bg-white dark:bg-gray-800 ">
            <div class="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                    <span class="block">
                        Want to be the Federer?
                    </span>
                    <span class="block text-indigo-500">
                        It&#x27;s today or never.
                    </span>
                </h2>
                <div class="lg:mt-0 lg:flex-shrink-0">
                    <div class="mt-12 inline-flex rounded-md shadow">
                    <div class="relative flex-grow w-full">
                        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                        <button type="button" class="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Get started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register