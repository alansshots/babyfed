import React from 'react'

import Basketball from '../assets/basketball.gif'

const About = () => {
  return (
    <div className='About flex flex-col sm:flex-row justify-between items-center m-5'>
        <div>
          <img src={Basketball} alt="tennis player" className='' />
        </div>

        <div className="box m-2"> 
          <h3 className='text-3xl font-bold'>Whats's the Idea?</h3> 
            <p className='py-4 px-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, sed odio dolor nobis debitis porro.
            </p>
            <p className='pb-4 px-5'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae necessitatibus, laudantium hic aperiam ullam aspernatur sapiente, corporis eius modi totam inventore officiis ratione dolores sed?
            </p>
        </div>    
    </div>
  )
}

export default About