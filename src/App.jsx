
import { useState } from 'react'
import './App.css'

import UpNext from './components/UpNext';
import InputEmployee from './components/InputEmployee';
// import SmallTop from './components/SmallTop';
import BigTop from './components/BigTop';
import OnBreak from './components/OnBreak';


function App() {

  return (
    <div>
      
       <UpNext />
      <InputEmployee /> 
      {/* <SmallTop /> */}
      <BigTop />
      <OnBreak /> 
    </div>
      
  )
}

export default App
