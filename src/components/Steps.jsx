import React from 'react'
import { UilCreateDashboard } from '@iconscout/react-unicons'
import { UilShareAlt } from '@iconscout/react-unicons'
import { UilTrophy } from '@iconscout/react-unicons'

const Steps = () => {
  return (
    <div className='Steps'>
      <h2 className="text-3xl text-center font-extrabold text-black sm:text-4xl mt-10 mb-5">
        How it works?
        </h2>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-12 mx-auto flex flex-wrap">
            <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow-500 text-white relative z-10 title-font font-medium text-sm">1</div>
              <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div className="flex-shrink-0 w-24 h-24 bg-yellow-100 text-yellow-500 rounded-full inline-flex items-center justify-center">
                <UilCreateDashboard/>
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 className="font-semibold title-font text-gray-900 mb-1 text-xl">Creating A Profile</h2>
                  <p className="leading-relaxed">Set up a profile and add to it a list of your achievements, videos, photos, biography, future goals and more!</p>
                </div>
              </div>
            </div>
            <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow-500 text-white relative z-10 title-font font-medium text-sm">2</div>
              <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div className="flex-shrink-0 w-24 h-24 bg-yellow-100 text-yellow-500 rounded-full inline-flex items-center justify-center">
                  <UilShareAlt/>
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 className="font-semibold title-font text-gray-900 mb-1 text-xl">Get Discovered</h2>
                  <p className="leading-relaxed">BabyFed will promote, suggest and recommed yout profile to clubs, trainers, potential investors and companies.</p>
                </div>
              </div>
            </div>
            <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow-500 text-white relative z-10 title-font font-medium text-sm">3</div>
              <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div className="flex-shrink-0 w-24 h-24 bg-yellow-100 text-yellow-500 rounded-full inline-flex items-center justify-center">
                  <UilTrophy/>
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 className="font-semibold title-font text-gray-900 mb-1 text-xl">Time to show everyone who's the real deal!</h2>
                  <p className="leading-relaxed">After successfully finding a new club, trainer or funding it's time to shoot for the stars and show the world your true potential.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Steps