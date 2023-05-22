import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'></div>
       <p>Hi name is </p>
       <h1>Subodh Poudel</h1>
       <h2>i am a full stack developer.</h2>    
       <p>i am a full stack developer specializing in building exceptional web apps.
       </p>
    </div>
  )
}

export default Home;
