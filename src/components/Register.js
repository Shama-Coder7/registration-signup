import React, { useState } from 'react';
import './Register.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Register = () => {

  const navigate = useNavigate()

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = e => {
    const { name, value } = e.target
    setUser({
        ...user,
        [name]: value
    })
}

const register = () => {
    const { name, email, password, confirmPassword } = user
    if( name && email && password && (password === confirmPassword)){
        axios.post("http://localhost:9002/register", user)
        .then( res =>  {alert(res.data.message)
        navigate("/home")
        })
    } else {
        alert("invalid input")
    }
    
}

  return (
    <div className="register">

    {console.log("User", user)}
      <h1>Sign Up</h1>

      <input className="input" type="text" name="name" value={user.name} placeholder="Enter your Name" onChange={ handleChange } />
      <input className="input" type="text"  name="email"  value={user.email} placeholder="Enter your Email" onChange={ handleChange } />

      <input className="input" type="password" name="password"  value={user.password} placeholder="Password" onChange={ handleChange } />
      <input className="input" type="password" name="confirmPassword" value={user.confirmPassword} placeholder="Confirm Password" onChange={ handleChange } />

      <div>
        {' '}
        <button className="register-btn" onClick={register}>Register</button>
        <button className="or">or</button>
        <button className="login-btn" onClick={() => navigate("/home")}>Login</button>
      </div>
    </div>
  );
};

export default Register;
