import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[90vh]'>
        <img src="https://images.unsplash.com/photo-1550951298-5c7b95a66bfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1633&q=80" alt="" className='w-full h-full object-cover' />
        <div className="max-w-[1040px] mx-auto">
            <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
                <h1 className='text-4xl font-bold'>Find Your Special Trip</h1>
                <h2 className='text-4xl py-4 italic'>With Miah world</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis vel tempora blanditiis eius ducimus doloremque molestias hic rerum numquam aperiam.</p>
            </div>
        </div>
    </div>
  )
}

export default Hero