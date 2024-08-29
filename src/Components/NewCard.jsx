/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function NewCard({data,handleClick ,index}) {
    
    const {image , name , artist , added} = data;
    

  return (
    <div className='w-60 bg-zinc-100 p-4 rounded-md flex gap-4 relative pb-8 mt-10'>
        <div className='w-20 h-20 bg-orange-600 rounded-md'>
            <img className='w-full h-full object-cover overflow-hidden' src={image} alt="" />
        </div>
        <div className=''>
            <h3 className='text-xl leading-none font-semibold'>{name}</h3>
            <h6 className='text-sm'>{artist}</h6>
        </div>
        <button onClick={()=>handleClick(index)} className={`px-4 py-3 ${added===false?"bg-orange-600":"bg-teal-500"} whitespace-nowrap absolute bottom-0 translate-y-[50%] left-1/2 -translate-x-[50%] text-white text-xs rounded-full`}>
         {added===false?"Add to Favorites":"Added"}
        </button>
    </div>
  )
}

export default NewCard