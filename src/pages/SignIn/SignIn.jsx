import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import HomePage from '../HomePage/HomePage';
import './SignIn.css';
import axios from 'axios';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  let navigate= useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/users");
      const userData = response.data;

      console.log('Full JSON data:', userData); // Log the entire data for debugging

      // Check if user data exists and is an array
      if (Array.isArray(userData)) {
        const matchingUsers = userData.filter(user => user.email === email && user.password === password);

        if (matchingUsers.length > 0) {
          console.log('Login successful');
          navigate('/HomePage')
          // Redirect or perform further actions based on successful login
        } else {
          console.error('Invalid credentials');
          // Handle login failure
        }
      } else {
        console.error('Invalid JSON format: Missing or invalid "users" property');
      }
    } catch (error) {
      console.error('Error fetching JSON data:', error.message);
      // Handle error fetching JSON data
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      setError('Invalid email address');
      return;
    }

    if (!password || password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    setError('');
    fetchData();
  };

  return (
    <div className='container'>
      <h2><strong>Hello</strong>, Grab seats for your upcoming fav event!</h2>
      <div>
        <Link to='/' className='link-style'>SignIn</Link>
        <Link to='/SignUp' className='link-style'>SignUp</Link>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-floating mt-3">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
            value={email}
            onChange={handleEmailChange}
          />
          <label htmlFor="email">Email address</label>
        </div>
        <div className="form-floating mt-3 mb-3">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <label htmlFor="password">Password</label>
        </div>
        {error && <div className="text-danger">{error}</div>}
        <button type="submit" className="btn">
          {/* <Link to='./HomePage'>Sign in</Link> */}
          Sign in
        </button>
      </form>
    </div>
  );
}

export default SignIn;
