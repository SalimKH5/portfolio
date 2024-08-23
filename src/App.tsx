
import './App.css'
import AboutContainer from './components/AboutContainer'
import Formations from './components/Formations'
import FormContainer from './components/FormContainer'

import HomeContainer from './components/HomeContainer'

import WorkContainer from './components/WorkContainer'
import WorkStrory from './components/WorkStrory'

function App() {


  return (

    <div className="w-full h-full px-2 lg:px-0  max-w-sm sm:max-w-lg md:max-w-5xl xl:max-w-6xl">
      <HomeContainer />
      <AboutContainer />
      <Formations/>
      <WorkStrory/>
      <WorkContainer />
      <FormContainer/>
    </div>


  )
}

export default App
