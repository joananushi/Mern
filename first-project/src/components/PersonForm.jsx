import React, { useState } from 'react';

const PersonForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      firstName,
      lastName,
      email,
      password,
      confirmpassword
    };

    // Perform some action with newUser data, e.g., send it to an API or store it in state
    console.log(newUser);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>First Name</h2>
        <input type="text" onChange={(e) => setFirstName(e.target.value)} />
        <h2>Last Name</h2>
        <input type="text" onChange={(e) => setLastName(e.target.value)} />
        <h2>Email</h2>
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
        <h2>Password</h2>
        <input type="text" onChange={(e) => setPassword(e.target.value)} />
        <h2> Confirm Password</h2>
        <input type="text" onChange={(e) => setConfirmpassword(e.target.value)} />
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

export default PersonForm;
