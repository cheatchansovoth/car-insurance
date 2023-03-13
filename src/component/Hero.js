import React from 'react'
import { AiOutlineCar,AiOutlineWifi } from "react-icons/ai";
export const Hero = () => {
  return (
    <div className='min-w-full h-[90vh] space-y-10 mt-10'>
        <div className='bg-slate-600 bg-opacity-40 h-[50vh] w-[100%] flex flex-col items-center justify-center text-center hover:bg-black hover:text-white hover:bg-opacity-60 hover:duration-500 hover:ease-in'>
            <div className='flex flex-col justify-center items-center m-8 space-y-5  hover:text-white'>
                <p className='text-8xl text-blue-600'><AiOutlineCar/></p>
                <h1 className='text-2xl'>Single-Car insurance</h1>
                <p className='text-2xl text-blue-500'>From <span className='text-3xl'>$150</span></p>
                <p className=''>20% of our customers paid up to $150 between June 1st, 2013 to May 22nd, 2015. </p>
                <button className='bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-400'>LEARN MORE</button>
            </div>
        </div>
        <div className='bg-slate-700 bg-opacity-40 h-[50vh] w-[100%] flex flex-col items-center justify-center text-center hover:bg-black hover:text-white hover:bg-opacity-60 hover:duration-500 hover:ease-in'>
        <div className='flex flex-col justify-center items-center m-8 space-y-5  hover:text-white'>
            <div className='flex items-center'>
            <p className='text-8xl text-blue-600'><AiOutlineCar/></p>
            <p className='text-6xl text-blue-500'><AiOutlineCar/></p>
            </div>
                <h1 className='text-2xl'>Multi-Car insurance</h1>
                <p className='text-2xl text-blue-500'>From <span className='text-3xl'>$150</span></p>
                <p className=''>20% of our customers paid up to $150 between June 1st, 2013 to May 22nd, 2015. </p>
                <button className='bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-400'>LEARN MORE</button>
        </div>
        </div>
        <div className='bg-slate-800 bg-opacity-40 h-[50vh] w-[100%] flex flex-col items-center justify-center text-center hover:bg-black hover:text-white hover:bg-opacity-60 hover:duration-500 hover:ease-in'>
        <div className='flex flex-col justify-center items-center m-8 space-y-5  hover:text-white'>
            <div className='flex items-center'>
                  <p className='text-8xl text-blue-600'><AiOutlineCar/></p>
                 <p className='text-6xl text-blue-500'><AiOutlineWifi/></p>
                 </div>
                <h1 className='text-2xl'>Black Box insurance</h1>
                <p className='text-2xl text-blue-500'>From <span className='text-3xl'>$150</span></p>
                <p className=''>20% of our customers paid up to $150 between June 1st, 2013 to May 22nd, 2015. </p>
                <button className='bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-400'>LEARN MORE</button>
            </div>
        </div>
    </div>
  )
}
