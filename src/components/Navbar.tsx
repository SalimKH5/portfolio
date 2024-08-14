import React from 'react'
import { FaGithub } from "react-icons/fa6";
const Navbar = () => {
  return (
    <nav className='bg-[#363232] w-full flex items-center justify-center  fixed  z-50 py-2 left-0 right-0 top-0 '>
      <div className="w-full  flex items-center justify-between max-w-sm px-4 lg:px-0  lg:max-w-4xl">
        <a href="/" className='text-xl font-bold'>SALIMKHADIR</a>
        <ul className='hidden lg:flex items-center justify-between gap-12'>
          <li><a href="#home" className='underline-nav'>Home</a></li>
          <li><a href="#about" className='underline-nav'>About</a></li>
          <li><a href="#work" className='underline-nav'>Work</a></li>
        </ul>
        <div className=' flex items-center justify-center'>
          <a target='_blank' href="https://github.com/salimKH5"><FaGithub size={30} /></a>

        </div>

      </div>

    </nav>
  )
}

export default Navbar