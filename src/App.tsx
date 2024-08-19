
import './App.css'
import AboutContainer from './components/AboutContainer'
import Formations from './components/Formations'
import FormContainer from './components/FormContainer'

import HomeContainer from './components/HomeContainer'

import WorkContainer from './components/WorkContainer'
import WorkStrory from './components/WorkStrory'

function App() {


  return (

    <div className="w-full h-full max-w-sm px-2 lg:px-0  lg:max-w-5xl">
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
