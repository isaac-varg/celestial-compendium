import React from 'react'
import { BiSearchAlt } from "react-icons/bi";

const Searchbar = () => {
  return (
    <div className='flex  items-center justify-start bg-neutral-200 rounded-lg py-2 px-2 w-full gap-x-2 border-2 border-neutral-200  hover:border-neutral-300 text-neutral-500 hover:text-neutral-600'>
      <span className='text-2xl'><BiSearchAlt /></span>
      <span className='font-poppins text-base font-semibold'>Search or Ctrl + K</span>
    </div>
  )
}

export default Searchbar
