import React from 'react'
import { AiFillPhone, AiOutlineClockCircle } from "react-icons/ai"
import { BsChatSquareDots } from "react-icons/bs"

const TopBar = () => {
  return (
    <div className='flex justify-between items-center px-4 py-2'>
        <div className='flex items-center'>
            <BsChatSquareDots size={25} className="text-cyan-400 mr-2"/>
            <h1 className='text-xl font-bold text-gray-700 uppercase'>Miah World</h1>
        </div>
        <div className='flex'>
            <div className='hidden md:flex items-center px-6'>
                <AiOutlineClockCircle size={20} className="mr-2 text-cyan-400"/>
                <p className='text-sm text-gray-700'>9am to 5pm</p>
            </div>
            <div className='hidden md:flex items-center px-6'>
                <AiFillPhone size={20} className="mr-2 text-cyan-400"/>
                <p className='text-sm text-gray-700'>018384674746</p>
            </div>
            <button>Get a free Quote</button>
        </div>
    </div>
  )
}

export default TopBar