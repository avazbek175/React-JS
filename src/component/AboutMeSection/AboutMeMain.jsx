import React from 'react'
import AboutMeText from './AboutMeText'
import AboutMeImage from './AboutMeImage'

const AboutMeMain = () => {
  return (
    <div className='flex  gap-12 p-4 md:flex-row sm:flex-col max-w-[1200px] mx-auto mt-[100px] justify-between items-center'>
      <div>
      <AboutMeText/>
      </div>
      <div>
      <AboutMeImage/>
      </div>
    </div>
  )
}

export default AboutMeMain
