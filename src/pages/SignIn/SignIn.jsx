import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignIn.css';
import axios from 'axios';

function SignIn() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  let navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!credentials.email || !credentials.email.includes('@')) {
      setError('Invalid email address');
      return;
    }

    if (!credentials.password || credentials.password.length < 6) {
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
          const user = userData.find(user => user.email === credentials.email && user.password === credentials.password);

          if (user) {
            console.log(user);
            navigate('/HomePage');
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
      <form onSubmit={handleSubmit}>
        <div className="form-floating mt-3">
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="name@example.com"
            value={credentials.email}
            onChange={handleInputChange}
          />
          <label htmlFor="email">Email address</label>
        </div>
        <div className="form-floating mt-3 mb-3">
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleInputChange}
          />
          <label htmlFor="password">Password</label>
        </div>
        {error && <div className="text-danger">{error}</div>}
        <button type="submit" className="btn">
          Sign in
        </button>
      </form>
      <div className="mt-3">New User, Get Yourself Registered!<Link to='/SignUp' className='link-style'>SignUp</Link></div>
    </div>
  );
}

export default SignIn;
