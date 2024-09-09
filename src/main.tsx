import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { TbFileCv } from "react-icons/tb";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Project from './page/Project.tsx';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import { ThemeProvider } from './Context/ThemeContext.tsx';
import './i18n.js' // ts => import './i18n.ts'
import CvPage from './page/CvPage.tsx';
import { FloatButton } from 'antd';
import ReactCountryFlag from 'react-country-flag';
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


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <div className='bg-zinc-100 font-mono dark:bg-[#221F1F] no-scrollbar w-full h-full container-main dark:text-white   flex items-center justify-center py-4 '>
        <Navbar />
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
  </StrictMode>,
)
