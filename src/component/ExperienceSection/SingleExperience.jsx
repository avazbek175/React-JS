import React from 'react'

export const SingleExperience = ({experience}) => {
  return (
    <div className='md:h-[350px] md:w-[240px] sm:h-auto border-2 border-orange border-dashed rounded-2xl mt-12 p-4'>
      <p className='font-bold text-cyan'>{experience.job} </p>
      <p className='text-orange'>{experience.company} </p>
      <p className='text-lightGrey'>{experience.date}</p>
      <ul className='list-disc mt-4 pl-4 text-white'>{experience.responsibilities.map((resp, index) => {
        return <li key={index}>{resp}</li>
      })} </ul>
    </div>
  )
}
