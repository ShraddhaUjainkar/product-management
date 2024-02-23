import React, { useState } from 'react';
import './style.css';

const Register = () => {
    const [name, setName]= useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] =useState("");

    const SignUp =() => {
        let obj={name,email,password};
        console.log(obj);
    }
  return (
    <div className="form-container">
    <h1>Register Page</h1>
    <div className="form-row">
        <label htmlFor="Name">Name</label>
        <input
            id="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
    </div>
    <div className="form-row">
        <label htmlFor="email">Email</label>
        <input
            id="email"
            type="text"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
        />
    </div>
    <div className="form-row">
        <label htmlFor="password">Password</label>
        <input
            id="password"
            type="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
        />
    </div>
    <button onClick={SignUp} className='submit-btn'>Submit</button>
    </div>

  )
}

export default Register