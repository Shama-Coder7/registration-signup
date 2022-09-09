import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ setLoginUser }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

//   const login = () => {
//     axios.post('http://localhost:9002/login', user)
//     .then((res) => {
//       alert(res.data.message);
//       setLoginUser(res.data.user);
//       navigate('/home');
//     });
//   };

//   const login = () => {
//     const { email, password} = user
//     if( email && password ){
//         axios.post("http://localhost:9002/login", user)
//         .then( res =>  {alert(res.data.message)
//         navigate("/home")
//         })
//     } else {
//         alert("Inncorrect")
//     }
    
// }

  return (
    <div className="login">
      <h1>LogIn</h1>
      <input
        className="input"
        type="text"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Enter your Email"
      />
      <input
        className="input"
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Enter your Password"
      />

      <div>
        <button className="login-btn" onClick={() => navigate('/home')}>
          Login
        </button>
        <button className="or">or</button>
        <button className="register-btn" onClick={() => navigate('/register')}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Login;
