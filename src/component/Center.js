import React from 'react'

export const Center = () => {
  return (
    <div className='lg:h-[100vh]'>
    <div className='space-y-5 bg-cover bg-center bg-blue-50 bg-opacity-80 my-10 lg:my-0 lg:bg-fixed lg:bg-blue-100' style={{ backgroundImage: "url('https://public.libertymutual-cdn.com/lm-media-assets/content-images/products/auto/articles/article-full-car-insurance-woman.png')" }}>
        <div className='text-center space-y-5'>
        <h1 className='text-2xl font-semibold'>Personalize your cover with our policy upgrades</h1>
        <h2 className='font-semibold'>You can learn more about our range of policy upgrades, each of which can be easily added to your car insurance</h2>
        </div>
        <div className='mx-[10%]'>
            <h3 className='text-xl text-blue-800 font-semibold'><span className='text-3xl'>></span> Breakdown Cover</h3>
            <h3 className='text-xl text-blue-800 font-semibold'><span className='text-3xl'>></span> Personal Injury Cover</h3>
            <h3 className='text-xl text-blue-800 font-semibold'><span className='text-3xl'>></span> Hire Car Cover</h3>
            <h3 className='text-xl text-blue-800 font-semibold'><span className='text-3xl'>></span> Bonus Accelerator</h3>
            <h3 className='text-xl text-blue-800 font-semibold'><span className='text-3xl'>></span> Keycare Cover</h3>
            <h3 className='text-xl text-blue-800 font-semibold'><span className='text-3xl'>></span> Motor Legal Protection</h3>
        </div>
    </div>
    </div>
  )
}
