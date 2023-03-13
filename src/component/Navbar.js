import React,{useState} from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";

export const Navbar = () => {

    
    const [show, setShow] = useState(false);

    const toggleShow = () => {
      setShow(!show);
    };

  return (
            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.2,
              delay: 0.1,
              ease: [0, 0.71, 0.2, 1.01]
            }}
            className=''
            >
                <div className='flex flex-row h-[50px] items-center  justify-between lg:flex lg:flex-row lg:justify-center lg:items-center text-center lg:my-[2%] '>
                    <div className='w-[50%]'>
                    <h1 className='text-2xl font-bold'><span className='text-sky-600'>Car</span>insurance</h1>
                    </div>
                    <div className='my-6 h-[20%]  hover:text-slate-500 lg:hidden'>
                    <GiHamburgerMenu onClick={toggleShow}/>
                    </div>
                    <div className='lg:flex-row lg:justify-end lg:space-x-5 lg:space-y-0 lg:w-[70%] lg: mr-[10%] hidden lg:flex'>
                        <a href='#'>Home</a>
                        <a href='#'>About</a>
                        <a href='#'>Pricing</a>
                        <a href='#' className='w-[20%] bg-cyan-600 rounded-2xl p-1 font-bold'>Try Now</a>
                    </div>
                    <div className='lg:hidden'>
                    <a href='#' className='w-[30%] bg-cyan-600 rounded-xl p-1'>Try Now</a>
                    </div>
                </div>
                 {show && 
                 (
                    <motion.div className='flex flex-col items-center space-y-3 justify-center lg:flex-row lg:justify-end lg:space-x-5 lg:space-y-0 lg:w-[70%] lg:mr-[10%] lg:flex lg:hidden'
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.1,
                      ease: [0, 0.71, 0.2, 1.01]
                    }}
                    >
                    <a href='#'>Home</a>
                    <a href='#'>About</a>
                    <a href='#'>Pricing</a>
                    </motion.div>
                )
                }
            </motion.div>
    
  )
}
