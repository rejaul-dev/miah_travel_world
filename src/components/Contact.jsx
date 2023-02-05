import React from 'react'

const Contact = () => {
  return (
    <div id='contact'className='max-w-[1140px] mx-auto w-full p-4 py-16'>
      <h2 className='text-center text-gray-700'>Send us a message</h2>
      <p className='text-center text-gray-700 py-2'>We are standing by</p>
      <div className='grid md:grid-cols-2'>
        <img className='w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]' src="https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVzb3J0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="/" />
        <form>
          <div className='grid grid-cols-2'>
            <input className='border m-2 p-2' type="text" placeholder='First' />
            <input className='border m-2 p-2' type="text" placeholder='Last' />
            <input className='border m-2 p-2' type="email" placeholder='Email' />
            <input className='border m-2 p-2' type="tel" placeholder='Phone' />
            <textarea cols="30" rows="10" className='border col-span-2 m-2 p-2'></textarea>
            <button className='col-span-2 m-2'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact