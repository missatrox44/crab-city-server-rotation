
import { useState } from 'react';
import './App.css';
import React from 'react';
import { EmployeeContext } from './employee-context';

import UpNext from './components/UpNext';
import InputEmployee from './components/InputEmployee';
// import SmallTop from './components/SmallTop';
import BigTop from './components/BigTop';
import Pause from './components/Pause';


function App() {

  const [employee, setEmployee] = React.useState(null)

  return (
    <div>
      <EmployeeContext.Provider value={{ employee, setEmployee}}>

      <InputEmployee /> 

      </EmployeeContext.Provider>


    </div>
      
  )
}

export default App
