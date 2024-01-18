import { useState } from 'react'
import React from 'react'
import Person from './components/person'
import PersonForm from './components/PersonForm'

import './App.css'

function App() {
  

  return (
    <>
    <PersonForm></PersonForm>
    <Person name={'g'} age={22}></Person>
      
      <h1>---------------------------------------</h1>

    </>
  )
}

export default App
