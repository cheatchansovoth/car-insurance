import React from 'react'
import img from '../component/home-cars.png'
export const Home = () => {
  return (
    <div className='bg-blue-200 lg:relative lg:z-0'>
      <div className='w-screen lg:flex lg:flex-row justify-center p-10'>
      <div className='order-last'>
        <img src={img} alt='car' className='w-full '/>
      </div>
      <div className='mx-3 lg:space-y-10 lg:w-[30%]'>
        <h1 className='text-3xl lg:text-6xl font-bold'>Car <br/>Insurance </h1>
        <div className='flex lg:my-10'>
        <h1 className='text-3xl font-bold'>Price From $175</h1>
        <span className='text-3xl lg:text-5xl font-bold hidden'><br/>Price from</span>
        <h1 className='text-3xl lg:text-2xl font-bold hidden'><span className='text-3xl lg:text-8xl'>$175</span></h1>
        </div>
        <div className='mt-10 lg:space-y-10 space-x-2'>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        <button className='btn bg-slate-100 lg:px-3 lg:py-2 font-bold px-3 py-3 hover:bg-slate-300 hover:duration-500'>Get A quote</button>
        <button className='btn bg-base px-3 lg:py-2 lg:mx-3 border-2 border-black font-bold px-2 py-3 hover:bg-black hover:text-white hover:duration-500'>Retrive a Quote</button>
        </div>
      </div>
      </div>
    </div>
  )
}
