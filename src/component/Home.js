import React from 'react'

export const Home = () => {
  return (
    <div className='w-screen h-screen'>
      <div className='h-[180px] min-w-full bg-blue-400'>
      </div>
      <div className='mx-3 space-y-3'>
        <h1 className='text-3xl font-bold'>Car Insurance</h1>
        <h1 className='text-2xl font-bold'>Price from <span className='text-3xl'>$175</span></h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        <button className='btn bg-blue-400 px-3 py-2'>Get A quote</button>
        <button className='btn bg-blue-400 px-3 py-2 mx-3 border-2 border-black'>Retrive a Quote</button>
      </div>
    </div>
  )
}
