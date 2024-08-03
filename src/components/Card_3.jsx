import React from 'react'
import { dot } from '../assets'

const Card_3 = ({title,assignment}) => {
  return (
    <div className='bg-purple p-5 flex items-center gap-[45%] rounded-md w-[29%] max-sm:w-full'>
        <div className='flex items-center '>
            <img src={dot} alt="" />
            <p className='text-white italic capitalize'>{title}</p>
        </div>
       
        <button className='p-2 bg-white rounded-3xl text-sm '>view More</button>
      
    </div>
    
  )
}

export default Card_3
