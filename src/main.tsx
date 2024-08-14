import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Project from './page/Project.tsx';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/:id",
    element: <Project />
  },
]);



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='bg-[#221F1F] no-scrollbar w-full h-full container-main text-white   flex items-center justify-center py-4 '>

      <Navbar />
      <RouterProvider router={router} />
      <Footer />



    </div>
  </StrictMode>,
)
