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
import { ThemeProvider } from './Context/ThemeContext.tsx';

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
    <ThemeProvider>
    <div className='bg-zinc-100 dark:bg-[#221F1F] no-scrollbar w-full h-full container-main dark:text-white   flex items-center justify-center py-4 '>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />

    </div>
    </ThemeProvider>
  </StrictMode>,
)
