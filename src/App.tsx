
import './App.css'
import AboutContainer from './components/AboutContainer'
import FormContainer from './components/FormContainer'

import HomeContainer from './components/HomeContainer'

import WorkContainer from './components/WorkContainer'

function App() {


  return (

    <div className="w-full h-full max-w-sm px-2 lg:px-0  lg:max-w-4xl">
      <HomeContainer />
      <AboutContainer />
      <WorkContainer />
      <FormContainer/>
    </div>


  )
}

export default App
