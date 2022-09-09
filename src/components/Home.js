import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate()



  return (
    <div className="home">
      <h1 className='home-head'>Profile Page</h1>
      <div>
        <h4>Age: <input placeholder='Enter your Age'/></h4>
        <h4>Gender: <input placeholder='Enter your Genger'/></h4>
        <h4>DOB: <input placeholder='Enter your dob'/></h4>
        <h4>Mobile: <input placeholder='Enter your number'/></h4>

      </div>
      <button className="logout" onClick={() => navigate('/')}>Logout</button>
    </div>
  );
};

export default Home;
