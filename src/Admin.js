import React, { useState } from 'react';
// import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "./config/fire";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
    // Signed in 
        const user = userCredential.user;
        navigate('/admindash');
    // ...
    })
    .catch((error) => {
      setError('Wrong credentials')
    // ..
    });
    // Perform validation
    if (!email || !password) {
      setError('Please enter email and password');
    } else {
      // Submit the form
      setError('');
      // Add your form submission logic here
      
    }
  };

  return (
    <div className='container'>
      <h2>Feedback Application</h2>
      <form onSubmit={handleSubmit}>
        <div className='email'>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='password'>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="error">{error}</p>}
        <div className='buttons'>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
