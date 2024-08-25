
import { FaGithub } from "react-icons/fa6";
import { PiMoonStarsBold } from "react-icons/pi";
import { CiSun } from "react-icons/ci";
import { useThemeSwitcher } from "../Context/ThemeContext";
import { Tooltip } from "antd";
const Navbar = () => {
  const {handleThemeSwitch,theme}=useThemeSwitcher()
  return (
    <nav className='bg-white dark:bg-[#363232] w-full flex items-center justify-center  fixed  z-50 py-2 left-0 right-0 top-0 '>
      <div className="w-full  flex items-center justify-between px-4 lg:px-0 max-w-sm sm:max-w-lg md:max-w-5xl xl:max-w-6xl">
        <a href="/" className='text-xl font-bold'>SALIMKHADIR</a>
        {
          window.location.pathname==="/" && <ul className='hidden lg:flex items-center justify-between gap-12'>
            <li><a href="#home" className='underline-nav'>Home</a></li>
            <li><a href="#about" className='underline-nav'>About</a></li>
            <li><a href="#work" className='underline-nav'>Side Projects</a></li>
            <li><a href="#contact" className='underline-nav'>Contact</a></li>
          </ul>
        }

        <div className=' flex items-center gap-3'>
          <div onClick={handleThemeSwitch} className="border-2  border-black dark:border-white  cursor-pointer flex items-center justify-center p-2 rounded-xl">
             <Tooltip title={theme==="dark"?"light":"dark"}>
             {
                theme==="dark"?
                <CiSun size={15}/>
                :
                <PiMoonStarsBold size={15}/>
              }
             </Tooltip>
             
             
          </div>
          <a target='_blank' href="https://github.com/salimKH5" className="border-2  border-black dark:border-white  cursor-pointer flex items-center justify-center p-2 rounded-xl">
                <FaGithub size={15} />
          </a>
         
          

        </div>

      </div>

    </nav>
  )
}

export default Navbar