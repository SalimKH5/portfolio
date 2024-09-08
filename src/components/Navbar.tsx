import { PiMoonStarsBold } from "react-icons/pi";
import { CiSun } from "react-icons/ci";
import { useThemeSwitcher } from "../Context/ThemeContext";
import { Tooltip } from "antd";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import ReactCountryFlag from "react-country-flag";
const Navbar = () => {
  const { handleThemeSwitch, theme } = useThemeSwitcher()
  
  const { t, i18n: { changeLanguage, language } } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language)
  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "fr" : "en";
    setCurrentLanguage(newLanguage);
    changeLanguage(newLanguage);
  }


  return (
    <nav className='bg-white dark:bg-[#363232] w-full flex items-center justify-center  fixed  z-50 py-2 left-0 right-0 top-0 '>
      <div className="w-full  flex items-center justify-between px-4 lg:px-0 max-w-sm sm:max-w-lg md:max-w-5xl xl:max-w-6xl">
        <a href="/" className='text-xl font-bold hover:scale-110'>SALIMKHADIR</a>
        {
          window.location.pathname === "/" && <ul className='hidden lg:flex items-center justify-between gap-12'>
            <li><a href="#home" className={`${theme == "light" ? "underline-nav-dark" : "underline-nav"}`}>{t("navHome")}</a></li>
            <li><a href="#about" className={`${theme == "light" ? "underline-nav-dark" : "underline-nav"}`}>{t("navAbout")}</a></li>
            <li><a href="#work" className={`${theme == "light" ? "underline-nav-dark" : "underline-nav"}`}>{t("navSideProject")}</a></li>
            <li><a href="#contact" className={`${theme == "light" ? "underline-nav-dark" : "underline-nav"}`}>Contact</a></li>
          </ul>
        }

        <div className=' flex items-center gap-3'>
          <Tooltip title={theme === "dark" ? "light" : "dark"}>
            <div onClick={handleThemeSwitch} className="border-[1.2px] hover:scale-110 border-black dark:border-white  cursor-pointer flex items-center justify-center p-2 rounded-lg">

              {
                theme === "dark" ?
                  <CiSun size={15} />
                  :
                  <PiMoonStarsBold size={15} />
              }
            </div>
          </Tooltip>
        
          <Tooltip title={currentLanguage}>
            <button onClick={handleChangeLanguage} className="border-[1.2px]  hover:scale-110 text-sm border-black dark:border-white  cursor-pointer flex items-center justify-center p-2 px-3 rounded-lg">
             
              <ReactCountryFlag 
              style={{
                width: '1.2em',
                height: '1.2em',
            }}

              countryCode={currentLanguage==="fr"?"FR":"US"} svg />

            </button>
          </Tooltip>



        </div>

      </div>

    </nav>
  )
}

export default Navbar