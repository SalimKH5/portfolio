import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className='bg-[#363232] flex items-center justify-center py-2 fixed bottom-0 left-0 right-0  w-full z-50'>
      <div className="w-full flex items-center justify-between max-w-sm px-4 lg:px-0  lg:max-w-4xl">
        <h1 className='font-bold'>SALIMKHADIR</h1>
        <div className="flex items-center gap-4">
          <div className=' flex items-center justify-center'>
            <a target='_blank' href="https://github.com/salimKH5"><FaGithub size={30} /></a>
          </div>
          <div className=' flex items-center justify-center'>
            <a target='_blank' href="https://www.linkedin.com/in/salim-khadir-316aa3219/"><FaLinkedin size={30} /></a>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Footer