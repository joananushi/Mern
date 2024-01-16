import React from 'react'
import { useState } from 'react'


const Person = (props) => {
  const [age, setAge]=useState(props.age);

  const increaseAge = () =>{
    setAge(age+1);
  
  }
  return (
    <div>
        <h1>I am a person</h1>
        <h2>My name is {props.name}</h2>
        <h3>My age is {age}</h3>
        <button onClick={increaseAge}>Increase the age</button>
    </div>
  )
}

export default Person