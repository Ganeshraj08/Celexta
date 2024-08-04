import React from 'react'
import { dot } from '../assets'

const Card_3 = ({content,assignment}) => {
  return (
    <div className='  flex items-center gap-[45%] rounded-md  max-sm:w-full'>
        <div className='flex items-center gap-2 '>
            <img src={dot} alt="" />
            <p className='text-white italic capitalize'>{content}</p>
        </div>     
    </div>
    
  )
}

export default Card_3
