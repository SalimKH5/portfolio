import { ThemeProvider } from '../Context/ThemeContext'
import Navbar from './Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Footer from './Footer'
import { FloatButton } from 'antd'
import { TbFileCv } from 'react-icons/tb'
import ReactCountryFlag from 'react-country-flag'
import App from '../App'
import Project from '../page/Project'
import CvPage from '../page/CvPage'
import '../i18n.js' // ts => import './i18n.ts'
import { useEffect, useState } from 'react'
const MainComponent = () => {

    const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/:id",
    element: <Project />
  },
  {
    path: "/cv",
    element: <CvPage />
  },
]);
const openPdfInNewTab = (cv:string) => {
  const pdfUrl = cv; // Replace with your PDF URL or path
  window.open(pdfUrl, '_blank', 'noopener,noreferrer');
};


 const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
     <ThemeProvider>
      <div className='bg-zinc-100 font-sans dark:bg-gradient-to-br  dark:from-[#050B2E] dark:via-[#0B1A4A] dark:to-[#102A6B]  w-full h-full  dark:text-white   flex items-center justify-center py-4 '>
        <Navbar  scrolled={scrolled}/>
        <RouterProvider router={router} />
        <Footer />
        <div className="fixed flex items-center justify-center bottom-16 right-4 z-50">
          <FloatButton.Group
            trigger="click"
            type="primary"
            className="cursor-pointer"
          
            icon={ <TbFileCv size={30} />}
          >
            <FloatButton onClick={()=>{openPdfInNewTab("/cv Salim Khadir FR.pdf")}} icon={  <ReactCountryFlag 
              style={{
                width: '1.2em',
                height: '1.2em',
            }}

              countryCode="FR" svg />}/>
            <FloatButton onClick={()=>{openPdfInNewTab("/CV Salim Khadir EN.pdf")}} 
            icon={  <ReactCountryFlag 
              style={{
                width: '1.2em',
                height: '1.2em',
            }}
              countryCode="US" svg />}
            />
          </FloatButton.Group>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default MainComponent
