import React, { useState } from 'react';

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNamError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmpasswordError, setConfirmpasswordError] = useState("");
  


  const handleName = (e) => {
    setFirstName(e.target.value);
    if(e.target.value.length < 1) {
        setFirstNameError("First Name is required!");
    } else if(e.target.value.length < 3) {
        setFirstNameError("First name must be 3 characters or longer!");
    } else {
        setFirstNameError("");
    }
}

const handleLastName = (e) => {
    setLastName(e.target.value);
    if(e.target.value.length < 1) {
        setLastNamError("Last Name is required!");
    } else if(e.target.value.length < 3) {
        setLastNamError("Last name must be 3 characters or longer!");
    } else {
        setLastNamError("");
    }
}
const handlEmail = (e) => {
    setEmail(e.target.value);
    if(e.target.value.length < 1) {
        setEmailError("Email is required!");
    } else if(e.target.value.length < 3) {
        setEmailError("Email must be 3 characters or longer!");
    } else {
        // an empty string is considered a "falsy" value
        setEmailError("");
    }
}
const handlePassword = (e) => {
    setPassword(e.target.value);
    if(e.target.value.length < 1) {
        setPasswordError("Password is required!");
    } else if(e.target.value.length < 8) {
        setPasswordError("Password must be 8 characters or longer!");
    } else {
        // an empty string is considered a "falsy" value
        setPasswordError("");
    }
}
const handleConfirmPassword = (e) => {
    setConfirmpassword(e.target.value);
    if(e.target.value !== password) {
        setConfirmpasswordError("Passwords doesn't match");
    } else if(e.target.value.length < 8) {
        setPasswordError("Password must be 8 characters or longer!");
    }else {
        setConfirmpasswordError("");
    }
}

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <h2>First Name</h2>
        <input type="text" onChange={handleName} />
        {
            firstNameError ?
            <p>{ firstNameError }</p> :
                    ''
        }
        <h2>Last Name</h2>
        <input type="text" onChange={handleLastName} />
        {
            lastNameError ?
            <p>{ lastNameError }</p> :
                    ''
        }
        <h2>Email</h2>
        <input type="text" onChange={handlEmail} />
        {
            emailError ?
            <p>{ emailError }</p> :
                    ''
        }
        <h2>Password</h2>
        <input type="text" onChange={handlePassword} />
        {
            passwordError ?
            <p>{ passwordError }</p> :
                    ''
        }
        <h2> Confirm Password</h2>
        <input type="text" onChange={handleConfirmPassword} />
        {
            confirmpasswordError ?
            <p>{ confirmpasswordError }</p> :
                    ''
        }
        <button type='submit'>Submit</button>
      </form>


      <h1>Your form</h1>
      <h2>{firstName}</h2>
      <h2>{lastName}</h2>
      <h2>{email}</h2>
      <h2>{password}</h2>
      <h2>{confirmpassword}</h2>
    </>
  )
}

export default Form;
