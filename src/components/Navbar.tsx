
import { FaGithub } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
const Navbar = () => {

  console.log();
  return (
    <nav className='backdrop-blur-xl bg-white/20 w-full flex items-center justify-center  fixed  z-50 py-2 left-0 right-0 top-0 '>
      <div className="w-full  flex items-center justify-between max-w-sm px-4 lg:px-0  lg:max-w-5xl">
        <a href="/" className='text-xl font-bold'>SALIMKHADIR</a>
        {
          window.location.pathname === "/"
          && <ul className='hidden lg:flex items-center justify-between gap-12'>
            <li><a href="#home" className='underline-nav'>Home</a></li>
            <li><a href="#about" className='underline-nav'>About</a></li>
            <li><a href="#work" className='underline-nav'>Work</a></li>
            <li><a href="#contact" className='underline-nav'>Contact</a></li>
          </ul>
        }

        <div className=' flex items-center justify-center'>
          <a target='_blank' href="https://github.com/salimKH5"><FaGithub size={30} /></a>
        </div>

      </div>

    </nav>
  )
}

export default Navbar