import React from 'react'

function HeroTwo() {
  return (
    <div>
        <div className='bg-[#F8F8F8]'>
            <div className='container px-4 py-20 mx-auto'>
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
                <div>
                <h1 className='text-4xl font-bold text-[#333]'>The Best Way to Learn</h1>
                <p className='text-[#666]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor sem.</p>
                <button className='bg-[#333] text-white px-6 py-2 rounded mt-4'>Learn More</button>
                </div>
                <div>
                <img src='https://images.unsplash.com/photo-1622740570125-3b3e6a3b0b7b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fHwxNjI0MzY5NzYw&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt='hero' className='rounded-lg'/>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default HeroTwo