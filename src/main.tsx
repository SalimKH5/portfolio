import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n.js' // ts => import './i18n.ts'
import MainComponent from './components/MainComponent.tsx';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <MainComponent/>
  </StrictMode>,
)
