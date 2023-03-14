import React from 'react'
import { AiOutlineCar,AiOutlineWifi } from "react-icons/ai";
import { motion } from "framer-motion";
export const Hero = () => {
  return (
    <div className='lg:w-[100%] space-y-10 mt-10 lg:mt-0  lg:py-[15%] lg:flex lg:space-y-0 lg:space-x-3 lg:justify-center lg:z-20  bg-slate-400' >
        <div className='bg-slate-600 bg-opacity-40 h-[50vh] w-[100%] flex flex-col items-center justify-center text-center lg:w-[50%] hover:bg-black hover:text-white hover:bg-opacity-60 hover:duration-500 hover:ease-in'>
            <motion.div className='flex flex-col justify-center items-center m-8 space-y-5  hover:text-white'      
             initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration:0.5
      }}>
                <p className='text-8xl text-blue-600'><AiOutlineCar/></p>
                <h1 className='text-2xl'>Single-Car insurance</h1>
                <p className='text-2xl text-blue-500'>From <span className='text-3xl'>$150</span></p>
                <p className=''>20% of our customers paid up to $150 between June 1st, 2013 to May 22nd, 2015. </p>
                <button className='bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-400'>LEARN MORE</button>
            </motion.div>
        </div>
        <div className='bg-slate-700 bg-opacity-40 h-[50vh] w-[100%] flex flex-col items-center justify-center text-center hover:bg-black lg:w-[50%] hover:text-white hover:bg-opacity-60 hover:duration-500 hover:ease-in'>
        <motion.div className='flex flex-col justify-center items-center m-8 space-y-5  hover:text-white'       
        initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration:0.5
      }}>
            <div className='flex items-center'>
            <p className='text-8xl text-blue-600'><AiOutlineCar/></p>
            <p className='text-6xl text-blue-500'><AiOutlineCar/></p>
            </div>
                <h1 className='text-2xl'>Multi-Car insurance</h1>
                <p className='text-2xl text-blue-500'>From <span className='text-3xl'>$150</span></p>
                <p className=''>20% of our customers paid up to $150 between June 1st, 2013 to May 22nd, 2015. </p>
                <button className='bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-400'>LEARN MORE</button>
        </motion.div>
        </div>
        <div className='bg-slate-800 bg-opacity-40 h-[50vh] w-[100%] flex flex-col items-center justify-center text-center hover:bg-black lg:w-[50%] hover:text-white hover:bg-opacity-60 hover:duration-500 hover:ease-in'>
        <motion.div className='flex flex-col justify-center items-center m-8 space-y-5  hover:text-white'       
        initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration:0.5
      }}>
            <div className='flex items-center'>
                  <p className='text-8xl text-blue-600'><AiOutlineCar/></p>
                 <p className='text-6xl text-blue-500'><AiOutlineWifi/></p>
                 </div>
                <h1 className='text-2xl'>Black Box insurance</h1>
                <p className='text-2xl text-blue-500'>From <span className='text-3xl'>$150</span></p>
                <p className=''>20% of our customers paid up to $150 between June 1st, 2013 to May 22nd, 2015. </p>
                <button className='bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-400'>LEARN MORE</button>
            </motion.div>
        </div>
    </div>
  )
}
