import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {DataContext} from '../../context/dataContext';
import './SignIn.css';
import axios from 'axios';

function SignIn() {
  let {user, setUser} = useContext(DataContext) 
  // const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  let navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user.email || !user.email.includes('@')) {
      setError('Invalid email address');
      return;
    }

    if (!user.password || user.password.length < 6) {
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
          const newuser = userData.find(cuser => cuser.email === user.email && cuser.password === user.password);

          if (newuser) {
            console.log(newuser);
            setUser(newuser);
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
            value={user.email}
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
            value={user.password}
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
