
import './App.css'
import AboutContainer from './components/AboutContainer'
import Contact from './components/Contact'
import Formations from './components/Formations'


import HomeContainer from './components/HomeContainer'

import WorkContainer from './components/WorkContainer'
import WorkStrory from './components/WorkStrory'

function App() {
 
  return (

    <div className="w-full h-full px-4 lg:px-0  max-w-md sm:max-w-xl md:px-3 md:max-w-5xl xl:max-w-6xl">
      <HomeContainer />
      <AboutContainer />
      <WorkStrory />
      <WorkContainer />
      <Formations />
      <Contact />
      
    </div>


  )
}

export default App
