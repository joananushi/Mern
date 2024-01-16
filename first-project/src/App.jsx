import { useState } from 'react'
import Person from './components/person'
import './App.css'

function App() {
  

  return (
    <>
     <div>
      <h1>Hello World</h1>
      <h2>Things I need to</h2>
      <ul>
        <li>Learn React</li>
        <li>learn next</li>
      </ul>
      <Person name={'g'} age={22}/>
      <Person name={'g'} age={44}/>
     </div>
    </>
  )
}

export default App
