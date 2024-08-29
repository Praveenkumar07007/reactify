/* eslint-disable no-unused-vars */
import React from 'react'

function Card() {
  const data = [
    {
    image:'https://images.unsplash.com/photo-1621768216002-5ac171876625?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    headers:'Apple',
    description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. '
    },
    {
    image:'https://images.unsplash.com/photo-1654573817889-296cad084c97?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    headers:'Flipkart',
    description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. '
    },
    {
    image:'https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    headers:'Amazon',
    description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. '
    }
  ]
  return (
    <div className=' w-full h-screen bg-zinc-200 flex items-center justify-center gap-10'>
        {data.map((elem,index)=>(
          <div key={index} className='w-52 bg-zinc-100  rounded-md overflow-hidden'>
          <div className='w-full h-32 bg-zinc-300'>
              <img  className='w-full h-full object-cover' src={elem.image} alt="" />
          </div>
          <div className='w-full px-3 py-4'>
              <h2 className='font-semibold'>{elem.headers}</h2>
              <p className='text-xs mt-5'>{elem.description}</p>
          </div>
      </div>
        ))}
    </div> 
  )
}

export default Card