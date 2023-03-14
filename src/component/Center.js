import React from 'react'
import { BiLike } from "react-icons/bi";
export const Center = () => {
  return (
    <div className='bg-slate-600'>
      <div className='lg:space-y-10 lg:space-x-10 lg:flex lg:flex-col lg:justify-center lg:items-center lg:h-[10vh] h-[80vh] flex flex-col justify-center items-center text-center lg:p-[15%] '>
        <div className='text-center my-10  space-y-5 mx-[15%]'>
          <h1 className='text-2xl font-semibold'>Having trouble deciding?</h1>
          <h2 className='text-xl font-semibold'>Answer Two questions to help us point you in the right direction for a better deal on your car insurance</h2>
        </div>
        <div className='lg:flex'>
            <div className='lg:w-[60%] lg:space-y-10'>
              <h1 className='text-2xl font-semibold lg:text-5xl lg:font-bold'>Personalize your cover with our policy upgrades</h1>
              <h2 className='font-semibold lg:text-xl lg:mx-5'>You can learn more about our range of policy upgrades, each of which can be easily added to your car insurance</h2>
            </div>
            <div className=''>
            <h3 className='text-xl text-blue-800 font-semibold lg:text-2xl'><span className='text-3xl'>></span> Breakdown Cover</h3>
                <h3 className='text-xl text-blue-800 font-semibold lg:text-2xl'><span className='text-3xl'>></span> Personal Injury Cover</h3>
                <h3 className='text-xl text-blue-800 font-semibold lg:text-2xl'><span className='text-3xl'>></span> Hire Car Cover</h3>
                <h3 className='text-xl text-blue-800 font-semibold lg:text-2xl'><span className='text-3xl'>></span> Bonus Accelerator</h3>
                <h3 className='text-xl text-blue-800 font-semibold lg:text-2xl'><span className='text-3xl'>></span> Keycare Cover</h3>
                <h3 className='text-xl text-blue-800 font-semibold lg:text-2xl'><span className='text-3xl'>></span> Motor Legal Protection</h3>
            </div>
        </div>
      </div>
      <div className='space-y-10 h-[100vh] lg:h-[70vh] my-10'>
        <div className='flex flex-col justify-center justify-center lg:justify-between items-center text-center lg:flex-row lg:space-y-0 lg:mx-[15%] h-[70vh] lg:h-[30vh]'>
            <div className='space-y-3'>
            <div className='flex flex-row justify-center items-center'>
              <p className='text-3xl text-blue-700 font-semibold'><BiLike/></p>
            <h1 className='text-3xl text-blue-700 font-semibold'>90%</h1>
            </div>
            <h1>Great customer service</h1>
            <p>More than 90% of our customers said they would renew based on the claims service</p>
          </div>
          <div className='space-y-3'>
            <h1 className='text-3xl text-blue-700 font-semibold'>10 million</h1>
            <h1>policies sold</h1>
            <p>More than 90% of our customers said they would renew based on the claims service</p>
          </div>
          <div className='space-y-3'>
            <h1 className='text-3xl text-blue-700 font-semibold'>Reevoo</h1>
            <h1>Great customer service</h1>
            <p>More than 90% of our customers said they would renew based on the claims service</p>
          </div>
          <div className='space-y-3 mb-[5%]'>
            <h1 className='text-3xl text-blue-700 font-semibold'>Voted Best</h1>
            <h1>Award winning cover</h1>
            <p>More than 90% of our customers said they would renew based on the claims service</p>
          </div>
        </div>
        <div className='flex flex-col lg:justify-center justify-center lg:space-x-20 items-center text-center lg:flex-row lg:space-y-0  h-[100vh] lg:h-[50vh]  bg-slate-400'>
          <div>
            <h1 className='text-3xl text-blue-700 font-semibold'>Navigation</h1>
            <div>
            <h1>About</h1>
            <h1>Services</h1>
            <h1>News</h1>
            <h1>Contacts</h1>
            </div>
          </div>
          <div>
            <h1 className='text-3xl text-blue-700 font-semibold'>Contacts</h1>
            <div>
            <h1>Car Insurance Glasgow D04 89GR</h1>
            <h1>800-2345-6789</h1>
            <h1>info@demolink.org</h1>
            <h1>7 Days a week from 9:00 am to 7:00 pm</h1>
            </div>
          </div>
          <div>
            <h1 className='text-3xl text-blue-700 font-semibold'>Follow Us</h1>
            <div>
            <h1>Facebook</h1>
            <h1>Twitter</h1>
            <h1>Google +</h1>
            </div>
          </div>
          <div className='lg:max-w-[40%]'>
            <h1 className='text-3xl text-blue-700 font-semibold'>About</h1>
            <div className='mx-[15%] lg:mx-[0%]'>
              <p>“Car Insurance” is a NY based insurance company that was set up 1993 to specialise in Car Insurance. In 2005 we 
                launched the first Multi Car Insurance cover which allows two or more people to insure their cars on one policy and get a 
                discount on the overall price. In 2013 we launched our Black Box Insurance product LittleBox which helps safe drivers to
                 receive discounts based on their driving style.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
