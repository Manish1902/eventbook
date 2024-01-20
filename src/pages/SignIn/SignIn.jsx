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
    axios.get("http://localhost:4000/users")
  .then(response => {
    const userData = response.data;

    console.log('Full JSON data:', userData); // Log the entire data for debugging

    // Check if user credentials match
    if (userData) {
      const user = userData.find(user => user.email === email && user.password === password);

      if (user) {
        alert('Login successful');
        navigate('/HomePage')
        // Redirect or perform further actions based on successful login
      } else {
        alert('Invalid credentials');
        // Handle login failure
      }
    } else {
      alert('Invalid JSON format: Missing "users" property');
    }
  })
  .catch(error => {
    alert('Error fetching JSON data:', error);
    // Handle error fetching JSON data
  });
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
